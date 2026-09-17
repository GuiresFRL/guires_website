function CareersHeader() {
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        gsap.fromTo('.cw-header-elem', { y: -16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.08, ease: 'power3.out' });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 bg-[#FAFAF8F2] backdrop-blur border-b border-[var(--cw-border)] transition-shadow duration-300 ${scrolled ? 'shadow-sm' : ''}`}
            data-name="careers-header"
            data-file="careers/components/CareersHeader.js"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
                <a href={`${CAREERS_SITE}/index.html`} className="cw-header-elem block shrink-0">
                    <img
                        src={`${CAREERS_SITE}/assets/guires-logo.png`}
                        alt="Guires"
                        className="h-10 lg:h-12 w-auto"
                        width="520"
                        height="160"
                    />
                </a>
                <a
                    href={`${CAREERS_BASE}/jobs/`}
                    className="cw-header-elem inline-flex items-center gap-2 rounded-full bg-[var(--cw-accent)] text-white text-sm font-semibold px-5 py-2.5 lg:px-6 lg:py-3 hover:bg-[var(--cw-accent-dark)] transition-colors duration-300"
                >
                    Get Started
                </a>
            </div>
        </header>
    );
}
