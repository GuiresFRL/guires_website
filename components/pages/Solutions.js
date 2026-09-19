function SolutionsPage() {
    const solutions = [
        { num: '01', title: 'Research Solutions', desc: 'Custom research design and execution for academic, clinical and market research needs.' },
        { num: '02', title: 'Analytics Solutions', desc: 'Data engineering, statistical analysis and visualization built around your questions.' },
        { num: '03', title: 'Healthcare Solutions', desc: 'Evidence generation and research support across the healthcare continuum.' },
        { num: '04', title: 'Life Sciences Solutions', desc: 'Research, regulatory and scientific support for pharma, biotech and medtech.' },
        { num: '05', title: 'Regulatory Solutions', desc: 'Submission-ready documentation and pharmacovigilance support for global markets.' },
        { num: '06', title: 'Digital Solutions', desc: 'Digital tools and platforms that make research and reporting more efficient.' },
        { num: '07', title: 'Customized Solutions', desc: 'Tailored engagements combining our capabilities around a specific challenge.' }
    ];

    const surfaces = [
        { cls: 'tg-band--white' },
        { cls: 'tg-band--ink tg-on-ink' },
        { cls: 'tg-band--lilac' },
        { cls: 'tg-band--purple tg-on-ink' }
    ];

    React.useEffect(() => {
        tgReveal('.solution-item');
    }, []);

    return (
        <React.Fragment>
            <section id="solutions-grid">
                {solutions.map((s, i) => {
                    const surface = surfaces[i % surfaces.length];
                    return (
                        <article key={s.num} className={`solution-item tg-band ${surface.cls}`}>
                            <div className="tg-container py-14 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                                <div className="lg:col-span-3 tg-num !text-[clamp(4rem,10vw,9rem)] opacity-30">{s.num}</div>
                                <div className="lg:col-span-9">
                                    <h3 className="tg-h2 !text-[clamp(2rem,4.4vw,4rem)] mb-6">{s.title}</h3>
                                    <p className="tg-lead max-w-2xl mb-10 opacity-90">{s.desc}</p>
                                    <a href="https://guiresfrl.github.io/guires_website/contact-us/" className={`tg-btn ${surface.cls.includes('ink') || surface.cls.includes('purple') ? 'tg-btn--ghost-light' : 'tg-btn--ghost'}`}>
                                        Discuss this solution <div className="icon-arrow-right"></div>
                                    </a>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </section>
            <ContactCTA />
        </React.Fragment>
    );
}
