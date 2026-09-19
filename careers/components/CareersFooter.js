const CAREERS_FOOTER_LINKS = [
    { label: 'View All Jobs', href: `${CAREERS_BASE}/jobs/` },
    { label: 'Visit Website', href: `${CAREERS_SITE}/` },
    { label: 'Terms & Conditions', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Cookie Policy', href: '#' }
];

function CareersFooter() {
    const year = new Date().getFullYear();

    return (
        <footer className="tg-on-ink text-white/80" style={{ background: 'var(--ink-navy)' }} data-name="careers-footer" data-file="careers/components/CareersFooter.js">
            <div className="tg-container pt-20 lg:pt-28 pb-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 lg:mb-24 items-end">
                    <p className="lg:col-span-8 text-white text-[clamp(2.25rem,6vw,5.5rem)] font-medium tracking-[-0.045em] leading-[0.98]">Build your future with us.</p>
                    <div className="lg:col-span-4 lg:text-right">
                        <a href={`${CAREERS_BASE}/jobs/`} className="tg-btn tg-btn--primary">See open roles <div className="icon-arrow-right"></div></a>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/15 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                    <div className="inline-block self-start bg-white px-4 py-2.5">
                        <img src={`${CAREERS_SITE}/assets/guires-logo.png`} alt="Guires" className="h-10 w-auto" />
                    </div>
                    <nav className="flex flex-wrap gap-x-8 gap-y-3" aria-label="Careers footer">
                        {CAREERS_FOOTER_LINKS.map((l) => (
                            <a key={l.label} href={l.href} className="text-sm text-white/75 hover:text-white transition-colors">{l.label}</a>
                        ))}
                    </nav>
                </div>
                <p className="mt-10 text-sm text-white/60">&copy; {year} GUIRES. All rights reserved.</p>
            </div>
        </footer>
    );
}
