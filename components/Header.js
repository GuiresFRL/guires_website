function Header() {
    const [scrolled, setScrolled] = React.useState(false);
    const [menuOpen, setMenuOpen] = React.useState(false);
    const [openDesktopMenu, setOpenDesktopMenu] = React.useState(null);
    const [openMobileSection, setOpenMobileSection] = React.useState(null);
    const currentPath = window.location.pathname;

    const isActive = (href) => {
        const path = href.split('#')[0];
        if (path === 'https://guiresfrl.github.io/guires_website/index.html') {
            return currentPath === '/' || currentPath === '/index.html' || currentPath === '';
        }
        return currentPath === path;
    };

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);

        // Initial entry animation
        gsap.fromTo('.header-elem',
            { y: -20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.08, ease: 'power3.out', delay: 0.5 }
        );

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    React.useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 bg-white border-b border-black/10 ${scrolled ? 'py-4 shadow-sm' : 'py-6'}`}
            data-name="header"
            data-file="components/Header.js"
            onMouseLeave={() => setOpenDesktopMenu(null)}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
                <div className="header-elem">
                    <a href="https://guiresfrl.github.io/guires_website/index.html" className="block">
                        <img
                            src="https://guiresfrl.github.io/guires_website/assets/guires-logo.png"
                            alt="Guires"
                            className="h-16 lg:h-20 w-auto"
                            width="520"
                            height="160"
                        />
                    </a>
                </div>

                <nav className="hidden xl:flex items-center gap-1 2xl:gap-2">
                    {SITE_NAV.map((item) => (
                        <div
                            key={item.href}
                            className="relative"
                            onMouseEnter={() => setOpenDesktopMenu(item.submenu ? item.label : null)}
                        >
                            <a
                                href={item.href}
                                className={`header-elem nav-link whitespace-nowrap text-[13px] px-3 py-2 flex items-center gap-1 ${isActive(item.href) ? 'text-black' : ''}`}
                            >
                                {item.label}
                                {item.submenu && (
                                    <div className={`icon-chevron-down text-[10px] transition-transform duration-300 ${openDesktopMenu === item.label ? 'rotate-180' : ''}`}></div>
                                )}
                            </a>
                        </div>
                    ))}
                </nav>

                <div className="hidden xl:flex items-center gap-5 pl-4">
                    <button className="header-elem text-gray-600 hover:text-black transition-colors flex items-center gap-2 text-sm font-medium">
                        <div className="icon-search"></div>
                    </button>
                </div>

                <button
                    className="xl:hidden text-black header-elem z-50"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                >
                    <div className={`text-2xl ${menuOpen ? 'icon-x' : 'icon-menu'}`}></div>
                </button>
            </div>

            {/* Desktop mega-menu panel */}
            {SITE_NAV.filter((item) => item.submenu).map((item) => (
                <div
                    key={`panel-${item.href}`}
                    className={`hidden xl:block absolute left-0 top-full w-full bg-white border-t border-black/5 shadow-xl transition-all duration-200 ${openDesktopMenu === item.label ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'}`}
                >
                    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 grid grid-cols-12 gap-10">
                        <div className="col-span-3">
                            <div className="text-xs font-bold tracking-wider text-gray-400 uppercase mb-3">{item.label}</div>
                            <a href={item.href} className="inline-flex items-center gap-2 text-lg font-semibold text-black hover:text-[var(--accent)] transition-colors">
                                View All {item.label} <div className="icon-arrow-right"></div>
                            </a>
                        </div>
                        <div className="col-span-9 grid grid-cols-3 gap-x-8 gap-y-4">
                            {item.submenu.map((sub) => (
                                <a
                                    key={sub.label}
                                    href={sub.href}
                                    className="text-sm text-gray-600 hover:text-[var(--accent)] transition-colors py-1"
                                >
                                    {sub.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            ))}

            {/* Mobile menu drawer */}
            <div className={`xl:hidden fixed inset-0 top-0 bg-white transition-all duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className="pt-28 pb-12 px-6 h-full overflow-y-auto flex flex-col">
                    <nav className="flex flex-col gap-1">
                        {SITE_NAV.map((item) => (
                            <div key={item.href} className="border-b border-black/5">
                                <div className="flex items-center justify-between">
                                    <a
                                        href={item.href}
                                        onClick={() => setMenuOpen(false)}
                                        className={`text-xl font-medium py-4 flex-1 transition-colors ${isActive(item.href) ? 'text-[var(--accent)]' : 'text-black'}`}
                                    >
                                        {item.label}
                                    </a>
                                    {item.submenu && (
                                        <button
                                            className="p-4 text-gray-400"
                                            onClick={() => setOpenMobileSection(openMobileSection === item.label ? null : item.label)}
                                            aria-label={`Toggle ${item.label} submenu`}
                                        >
                                            <div className={`icon-chevron-down transition-transform duration-300 ${openMobileSection === item.label ? 'rotate-180' : ''}`}></div>
                                        </button>
                                    )}
                                </div>
                                {item.submenu && openMobileSection === item.label && (
                                    <div className="flex flex-col gap-1 pb-4 pl-4">
                                        {item.submenu.map((sub) => (
                                            <a
                                                key={sub.label}
                                                href={sub.href}
                                                onClick={() => setMenuOpen(false)}
                                                className="text-sm text-gray-600 py-2"
                                            >
                                                {sub.label}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
}
