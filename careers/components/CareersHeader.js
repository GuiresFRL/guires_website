function CareersHeader() {
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 8);
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            gsap.fromTo('.cw-header-elem', { y: -12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out' });
        }
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 bg-white border-b transition-colors duration-300 ${scrolled ? 'border-[#01012026]' : 'border-transparent'}`}
            data-name="careers-header"
            data-file="careers/components/CareersHeader.js"
        >
            <div className="tg-container h-[68px] lg:h-20 flex items-center justify-between gap-6">
                <a href={`${CAREERS_SITE}/index.html`} className="cw-header-elem block shrink-0" aria-label="GUIRES home">
                    <img
                        src={`${CAREERS_SITE}/assets/guires-logo.png`}
                        alt="Guires"
                        className="h-12 lg:h-14 w-auto"
                        width="520"
                        height="160"
                    />
                </a>
                <div className="flex items-center gap-4 sm:gap-8">
                    <a href={`${CAREERS_BASE}/`} className="cw-header-elem hidden sm:inline text-sm font-medium text-[var(--ink)] hover:text-[var(--accent-secondary)] transition-colors">Careers</a>
                    <a href={`${CAREERS_SITE}/index.html`} className="cw-header-elem hidden sm:inline text-sm font-medium text-[var(--ink)] hover:text-[var(--accent-secondary)] transition-colors">Visit website</a>
                    <a href={`${CAREERS_BASE}/jobs/`} className="cw-header-elem tg-btn tg-btn--primary !py-3 !px-5 !text-sm">
                        View all jobs <div className="icon-arrow-right text-xs"></div>
                    </a>
                </div>
            </div>
        </header>
    );
}
