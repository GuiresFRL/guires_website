function IndustriesPage() {
    const industries = INDUSTRIES_DATA;

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
                            <a key={ind.slug} href={industryUrl(ind.slug)} className="industry-card tg-index-row group grid grid-cols-12 gap-x-4 items-baseline py-7">
                                <span className="col-span-2 text-sm font-medium text-[var(--muted)] tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                                <div className="col-span-8">
                                    <h3 className="tg-index-title text-[clamp(1.5rem,2.4vw,2.125rem)] font-medium tracking-[-0.03em] leading-tight mb-2">{ind.name}</h3>
                                    <p className="text-[var(--muted)] leading-relaxed max-w-md">{ind.desc}</p>
                                </div>
                                <span className="tg-index-arrow col-span-2 text-right icon-arrow-right text-xl"></span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
            <ContactCTA />
        </React.Fragment>
    );
}
