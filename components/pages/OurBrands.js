function OurBrandsPage() {
    const brands = [
        { id: 'statswork', name: 'Statswork', desc: 'Statistical analysis and data science support for academic and clinical research.' },
        { id: 'pepgra', name: 'Pepgra', desc: 'Scientific writing and publication support for researchers and institutions.' },
        { id: 'pubrica', name: 'Pubrica', desc: 'Medical writing and regulatory documentation for healthcare and life sciences.' },
        { id: 'food-research-lab', name: 'Food Research Lab', desc: 'Food science R&D and product research for food and beverage innovation.' },
        { id: 'pepcreations', name: 'Pepcreations', desc: 'Creative branding and communication services for research-driven organizations.' }
    ];

    React.useEffect(() => {
        tgReveal('.brand-row');
    }, []);

    return (
        <React.Fragment>
            <section className="tg-band tg-band--white tg-section">
                <div className="tg-container">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-24 items-end">
                        <div className="lg:col-span-8">
                            <div className="tg-eyebrow mb-6">A family of five</div>
                            <h2 className="tg-h2">Specialist brands, one standard of rigor</h2>
                        </div>
                        <p className="lg:col-span-4 tg-lead text-[var(--muted)]">Each brand focuses on a discipline. Together they cover the full research, regulatory and communication lifecycle.</p>
                    </div>

                    <div id="brands-grid">
                        {brands.map((b, i) => (
                            <div key={b.id} id={b.id} className="brand-row tg-index-row scroll-mt-32">
                                <div className="grid grid-cols-12 gap-x-4 items-baseline py-8 lg:py-10">
                                    <span className="col-span-2 lg:col-span-1 text-sm font-medium text-[var(--muted)] tabular-nums">0{i + 1}</span>
                                    <h3 className="tg-index-title col-span-10 lg:col-span-6 text-[clamp(2rem,4.6vw,4rem)] font-medium tracking-[-0.04em] leading-none">{b.name}</h3>
                                    <p className="col-span-10 col-start-3 lg:col-start-auto lg:col-span-5 text-[var(--muted)] leading-relaxed mt-3 lg:mt-0">{b.desc}</p>
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
