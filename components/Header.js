// Shared scroll-reveal: hides targets, reveals them in batches, and re-measures once fonts/images settle.
window.tgReveal = window.tgReveal || function (selector, opts) {
    const o = opts || {};
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const els = gsap.utils.toArray(selector);
    if (!els.length) return;
    gsap.set(els, { opacity: 0, y: o.y === undefined ? 28 : o.y });
    ScrollTrigger.batch(els, {
        start: o.start || 'top 96%',
        once: true,
        onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power2.out', overwrite: 'auto' })
    });
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(refresh);
    setTimeout(refresh, 600);
};

function Header() {
    const [scrolled, setScrolled] = React.useState(false);
    const [menuOpen, setMenuOpen] = React.useState(false);
    const [openDesktopMenu, setOpenDesktopMenu] = React.useState(null);
    const [openMobileSection, setOpenMobileSection] = React.useState(null);

    // Compare on the site-relative path so the check works on GitHub Pages (/guires_website/...) and locally.
    const normalize = (p) => {
        let out = p.replace(/^\/guires_website/, '').replace(/index\.html$/, '').replace(/\.html$/, '');
        if (out.length > 1) out = out.replace(/\/$/, '');
        return out || '/';
    };
    const currentPath = normalize(window.location.pathname);
    const isActive = (href) => {
        const target = normalize(new URL(href, window.location.href).pathname);
        if (target === '/') return currentPath === '/';
        return currentPath === target || currentPath.startsWith(target + '/');
    };

    const cta = SITE_NAV.find((item) => item.label === 'Contact Us');
    const navItems = SITE_NAV.filter((item) => item.label !== 'Contact Us');

    React.useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 8);
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });

        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!reduce) {
            gsap.fromTo('.header-elem',
                { y: -12, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, stagger: 0.05, ease: 'power3.out', delay: 0.1 }
            );
        }
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    React.useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    // Scroll-triggered sections are measured at mount; re-measure once fonts/images settle so they never stay hidden.
    React.useEffect(() => {
        const refresh = () => { if (window.ScrollTrigger) window.ScrollTrigger.refresh(); };
        window.addEventListener('load', refresh);
        if (document.fonts && document.fonts.ready) document.fonts.ready.then(refresh);
        const t1 = setTimeout(refresh, 800);
        const t2 = setTimeout(refresh, 2500);
        return () => { window.removeEventListener('load', refresh); clearTimeout(t1); clearTimeout(t2); };
    }, []);

    React.useEffect(() => {
        const onKey = (e) => { if (e.key === 'Escape') { setMenuOpen(false); setOpenDesktopMenu(null); } };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 bg-white border-b transition-colors duration-300 ${scrolled || menuOpen ? 'border-[#01012026]' : 'border-transparent'}`}
            data-name="header"
            data-file="components/Header.js"
            onMouseLeave={() => setOpenDesktopMenu(null)}
        >
            <div className="tg-container h-16 xl:h-[72px] flex items-center gap-10">
                <a href="https://guiresfrl.github.io/guires_website/index.html" className="header-elem block shrink-0 relative z-50" aria-label="GUIRES home">
                    <img
                        src="https://guiresfrl.github.io/guires_website/assets/guires-logo.png"
                        alt="Guires"
                        className="h-10 xl:h-12 w-auto"
                        width="520"
                        height="160"
                    />
                </a>

                <nav className="hidden xl:flex items-center gap-8 flex-1" aria-label="Primary">
                    {navItems.map((item) => (
                        <div
                            key={item.href}
                            className="relative"
                            onMouseEnter={() => setOpenDesktopMenu(item.submenu ? item.label : null)}
                        >
                            <a
                                href={item.href}
                                aria-expanded={item.submenu ? openDesktopMenu === item.label : undefined}
                                className={`header-elem nav-link whitespace-nowrap py-2 flex items-center gap-1.5 ${isActive(item.href) ? 'is-active' : ''}`}
                                onFocus={() => setOpenDesktopMenu(item.submenu ? item.label : null)}
                            >
                                {item.label}
                                {item.submenu && (
                                    <div className={`icon-chevron-down text-[10px] transition-transform duration-300 ${openDesktopMenu === item.label ? 'rotate-180' : ''}`}></div>
                                )}
                            </a>
                        </div>
                    ))}
                </nav>

                <div className="hidden xl:flex items-center gap-6 ml-auto">
                    <button className="header-elem text-[var(--ink)] hover:text-[var(--accent-secondary)] transition-colors text-lg" aria-label="Search">
                        <div className="icon-search"></div>
                    </button>
                    {cta && (
                        <a href={cta.href} className="header-elem tg-btn tg-btn--primary !py-3 !px-5 !text-sm">
                            Contact us <div className="icon-arrow-right text-xs"></div>
                        </a>
                    )}
                </div>

                <button
                    className="xl:hidden ml-auto text-[var(--ink)] header-elem relative z-50 -mr-2 p-2"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={menuOpen}
                >
                    <div className={`text-2xl ${menuOpen ? 'icon-x' : 'icon-menu'}`}></div>
                </button>
            </div>

            {/* Desktop mega-menu panel */}
            {navItems.filter((item) => item.submenu).map((item) => {
                const open = openDesktopMenu === item.label;
                const cols = item.submenu.length > 8 ? 'grid-cols-3' : 'grid-cols-2';
                return (
                    <div
                        key={`panel-${item.href}`}
                        className={`tg-on-ink hidden xl:block absolute left-0 top-full w-full overflow-hidden text-white border-b-2 border-b-[var(--accent)] transition-all duration-300 ${open ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-3 pointer-events-none'}`}
                        style={{ background: 'var(--ink-navy)' }}
                        aria-hidden={!open}
                    >
                        <div className="absolute inset-0 tg-grid-bg opacity-50 pointer-events-none" style={{ WebkitMaskImage: 'linear-gradient(90deg, #000, transparent 70%)', maskImage: 'linear-gradient(90deg, #000, transparent 70%)' }}></div>
                        <div className="tg-container relative py-14 grid grid-cols-12 gap-12">
                            <div className="col-span-4 flex flex-col">
                                <div className="tg-eyebrow mb-6">{item.label}</div>
                                <a href={item.href} tabIndex={open ? 0 : -1} className="group block text-[clamp(2.25rem,3.4vw,3.5rem)] font-medium tracking-[-0.04em] leading-[1.02] text-white hover:text-[var(--accent-cyan)] transition-colors">
                                    View all {item.label}
                                    <span className="icon-arrow-right block mt-5 text-3xl transition-transform duration-300 group-hover:translate-x-2"></span>
                                </a>
                                <p className="mt-auto pt-10 text-sm text-white/60">{item.submenu.length} topics in {item.label}</p>
                            </div>
                            <div className={`col-span-8 grid ${cols} gap-x-10 content-start`}>
                                {item.submenu.map((sub, i) => (
                                    <a
                                        key={sub.label}
                                        href={sub.href}
                                        tabIndex={open ? 0 : -1}
                                        className="group flex items-baseline gap-4 border-t border-white/20 py-4 text-white/85 hover:text-white transition-colors"
                                    >
                                        <span className="text-xs tabular-nums text-[var(--accent-cyan)] w-5 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                                        <span className="flex-1 text-[15px] leading-snug transition-transform duration-300 group-hover:translate-x-1.5">{sub.label}</span>
                                        <span className="icon-arrow-right text-xs opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[var(--accent-cyan)]"></span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            })}

            {/* Mobile menu drawer */}
            <div className={`xl:hidden fixed inset-0 bg-white transition-all duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} aria-hidden={!menuOpen}>
                <div className="pt-24 pb-10 px-5 sm:px-8 h-full overflow-y-auto flex flex-col">
                    <nav className="flex flex-col" aria-label="Mobile">
                        {SITE_NAV.map((item) => (
                            <div key={item.href} className="border-t border-[#01012026]">
                                <div className="flex items-center justify-between">
                                    <a
                                        href={item.href}
                                        onClick={() => setMenuOpen(false)}
                                        className={`text-3xl font-medium tracking-tight py-4 flex-1 transition-colors ${isActive(item.href) ? 'text-[var(--accent-secondary)]' : 'text-[var(--ink)]'}`}
                                    >
                                        {item.label}
                                    </a>
                                    {item.submenu && (
                                        <button
                                            className="p-4 text-[var(--ink)]"
                                            onClick={() => setOpenMobileSection(openMobileSection === item.label ? null : item.label)}
                                            aria-label={`Toggle ${item.label} submenu`}
                                            aria-expanded={openMobileSection === item.label}
                                        >
                                            <div className={`icon-chevron-down transition-transform duration-300 ${openMobileSection === item.label ? 'rotate-180' : ''}`}></div>
                                        </button>
                                    )}
                                </div>
                                {item.submenu && openMobileSection === item.label && (
                                    <div className="flex flex-col pb-5 ml-1 border-l-2 border-[var(--accent)] pl-4">
                                        {item.submenu.map((sub, i) => (
                                            <a
                                                key={sub.label}
                                                href={sub.href}
                                                onClick={() => setMenuOpen(false)}
                                                className="flex items-baseline gap-3 text-[17px] text-[var(--ink)] py-2.5"
                                            >
                                                <span className="text-xs tabular-nums text-[var(--accent-secondary)] w-5 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                                                {sub.label}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>
                    {cta && (
                        <a href={cta.href} onClick={() => setMenuOpen(false)} className="tg-btn tg-btn--primary mt-8 w-full">
                            Contact us <div className="icon-arrow-right"></div>
                        </a>
                    )}
                </div>
            </div>
        </header>
    );
}
