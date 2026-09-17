const CAREERS_FOOTER_LINKS = [
    { label: 'View All Jobs', href: `${CAREERS_BASE}/jobs/` },
    { label: 'Visit Website', href: `${CAREERS_SITE}/index.html` },
    { label: 'Terms & Conditions', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Cookie Policy', href: '#' }
];

function CareersFooter() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-[var(--cw-border)] bg-[var(--cw-surface)]" data-name="careers-footer" data-file="careers/components/CareersFooter.js">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
                    <div className="flex flex-col items-center md:items-start gap-3">
                        <img
                            src={`${CAREERS_SITE}/assets/guires-logo.png`}
                            alt="Guires"
                            className="h-9 w-auto"
                        />
                        <p className="text-sm text-[var(--cw-muted)]">Build your future with us.</p>
                    </div>

                    <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
                        {CAREERS_FOOTER_LINKS.map((l) => (
                            <a key={l.label} href={l.href} className="text-sm font-medium text-[var(--cw-muted)] hover:text-[var(--cw-accent)] transition-colors">
                                {l.label}
                            </a>
                        ))}
                    </nav>
                </div>
                <div className="pt-6 border-t border-[var(--cw-border)] text-center md:text-left">
                    <p className="text-xs text-[var(--cw-muted)]">&copy; {year} GUIRES. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
