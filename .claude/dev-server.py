import http.server
import os

os.chdir(os.path.join(os.path.dirname(__file__), '..'))

PROD = b'https://guiresfrl.github.io/guires_website/'
PROD_NO_SLASH = b'https://guiresfrl.github.io/guires_website'
TEXT_EXT = ('.html', '.js', '.css')


class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    """Serves the site locally and rewrites production asset URLs to local
    root-relative paths, so local edits are what the browser actually loads."""

    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        super().end_headers()

    def do_GET(self):
        path = self.translate_path(self.path)
        if os.path.isdir(path):
            path = os.path.join(path, 'index.html')
        if path.lower().endswith(TEXT_EXT) and os.path.isfile(path):
            with open(path, 'rb') as f:
                body = f.read().replace(PROD, b'/').replace(PROD_NO_SLASH, b'')
            ctype = self.guess_type(path)
            self.send_response(200)
            self.send_header('Content-Type', ctype + '; charset=utf-8' if ctype.startswith('text/') or 'javascript' in ctype else ctype)
            self.send_header('Content-Length', str(len(body)))
            self.end_headers()
            self.wfile.write(body)
            return
        super().do_GET()


if __name__ == '__main__':
    http.server.test(HandlerClass=NoCacheHandler, port=8420)
