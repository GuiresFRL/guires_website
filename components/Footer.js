const FOOTER_GROUPS = [
    {
        title: 'Company',
        items: [
            { label: 'About Guires', href: '/about-us.html' },
            ...findNavItem('About Us').submenu,
            { label: 'Careers', href: '/careers.html' }
        ]
    },
    { title: 'Services', items: findNavItem('Services').submenu },
    { title: 'Industries', items: findNavItem('Industries').submenu },
    { title: 'Solutions', items: findNavItem('Solutions').submenu },
    {
        title: 'Insights & Resources',
        items: [
            ...findNavItem('Insights').submenu,
            { label: 'Case Studies', href: '/case-studies.html' }
        ]
    },
    { title: 'Our Brands', items: findNavItem('Our Brands').submenu },
    {
        title: 'Contact',
        items: [
            { label: 'Contact Us', href: '/contact-us.html' },
            ...findNavItem('Contact Us').submenu
        ]
    }
];

const SOCIAL_LINKS = [
    { label: 'LinkedIn', icon: 'icon-linkedin' },
    { label: 'Facebook', icon: 'icon-facebook' },
    { label: 'Instagram', icon: 'icon-instagram' },
    { label: 'YouTube', icon: 'icon-youtube' },
    { label: 'X / Twitter', icon: 'icon-twitter' }
];

const LEGAL_LINKS = ['Privacy Policy', 'Terms & Conditions', 'Cookie Policy', 'Disclaimer'];

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-[var(--black)] text-gray-300 pt-24 pb-10" data-name="footer" data-file="components/Footer.js">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20 pb-16 border-b border-white/10">
                    <div>
                        <h2 className="text-3xl font-bold mb-4 text-white">GUIRES</h2>
                        <div className="text-gray-400 text-lg space-y-1">
                            <p>Technology.</p>
                            <p>Intelligence.</p>
                            <p>Transformation.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        {SOCIAL_LINKS.map((s) => (
                            <a
                                key={s.label}
                                href="#"
                                aria-label={s.label}
                                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-gray-300 hover:text-white hover:border-white/40 transition-colors"
                            >
                                <div className={s.icon}></div>
                            </a>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-14 mb-20">
                    {FOOTER_GROUPS.map((group) => (
                        <div key={group.title}>
                            <h4 className="text-xs font-bold tracking-wider mb-6 text-white uppercase">{group.title}</h4>
                            <ul className="space-y-3 text-sm text-gray-400">
                                {group.items.map((item) => (
                                    <li key={item.label}>
                                        <a href={item.href} className="hover:text-white transition-colors">{item.label}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>&copy; {year} GUIRES. All rights reserved.</p>
                    <div className="flex flex-wrap gap-6">
                        {LEGAL_LINKS.map((label) => (
                            <a key={label} href="#" className="hover:text-white transition-colors">{label}</a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
