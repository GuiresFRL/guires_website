function IndustriesPage() {
    const industries = [
        { name: 'Healthcare & Life Sciences', desc: 'Research and evidence support across the healthcare continuum.' },
        { name: 'Pharmaceuticals', desc: 'Regulatory, clinical and scientific support for drug development.' },
        { name: 'Medical Devices', desc: 'Research and documentation support through the device lifecycle.' },
        { name: 'Biotechnology', desc: 'Data and regulatory support for emerging biotech innovation.' },
        { name: 'Diagnostics', desc: 'Research support for diagnostic development and validation.' },
        { name: 'Nutraceuticals', desc: 'Scientific and regulatory support for nutraceutical products.' },
        { name: 'Food', desc: 'Product research and R&D for food and beverage innovation.' },
        { name: 'Retail', desc: 'Data and consumer research support for retail organizations.' },
        { name: 'Travel & Hospitality', desc: 'Research and analytics for travel and hospitality businesses.' },
        { name: 'Insurance', desc: 'Data and analytics support for insurance risk and operations.' },
        { name: 'Mortgage', desc: 'Research and analytics support for mortgage and lending.' },
        { name: 'Logistics', desc: 'Data-driven support for logistics and supply chain operations.' },
        { name: 'Telecom', desc: 'Research and analytics support for telecom operators.' }
    ];

    React.useEffect(() => {
        tgReveal('.industry-card');
    }, []);

    return (
        <React.Fragment>
            <section className="tg-band tg-band--white tg-section">
                <div className="tg-container">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-24 items-end">
                        <div className="lg:col-span-8">
                            <div className="tg-eyebrow mb-6">{industries.length} industries</div>
                            <h2 className="tg-h2">Expertise built around your sector</h2>
                        </div>
                        <p className="lg:col-span-4 tg-lead text-[var(--muted)]">From life sciences to logistics, the same research rigor and data discipline, applied to your context.</p>
                    </div>

                    <div id="industries-grid" className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16">
                        {industries.map((ind, i) => (
                            <div key={ind.name} className="industry-card tg-index-row">
                                <div className="grid grid-cols-12 gap-x-4 items-baseline py-7">
                                    <span className="col-span-2 text-sm font-medium text-[var(--muted)] tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                                    <div className="col-span-10">
                                        <h3 className="tg-index-title text-[clamp(1.5rem,2.4vw,2.125rem)] font-medium tracking-[-0.03em] leading-tight mb-2">{ind.name}</h3>
                                        <p className="text-[var(--muted)] leading-relaxed max-w-md">{ind.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <ContactCTA />
        </React.Fragment>
    );
}
