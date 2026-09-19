function WhatWeDo() {
    const SITE_URL = 'https://guiresfrl.github.io/guires_website';
    const capabilities = [
        { id: '01', title: 'Research Solutions', href: `${SITE_URL}/services/#research-solutions`,
          desc: 'End-to-end support for academic, clinical and market research, from study design and literature review through data collection and reporting.' },
        { id: '02', title: 'Data Science & Analytics', href: `${SITE_URL}/services/data-science-analytics/`,
          desc: 'Turning research and operational data into clear, decision-ready insight through analytics, modelling and visualization.' },
        { id: '03', title: 'Regulatory & Pharmacovigilance', href: `${SITE_URL}/services/#regulatory-pharmacovigilance`,
          desc: 'Regulatory submissions, dossier preparation and safety monitoring support to help products move through global markets responsibly.' },
        { id: '04', title: 'Biostatistics & Statistical Programming', href: `${SITE_URL}/services/biostatistics/`,
          desc: 'Statistical analysis plans, SDTM/ADaM programming and biostatistics support for clinical and non-clinical studies.' },
        { id: '05', title: 'Scientific & Medical Communication', href: `${SITE_URL}/services/#scientific-medical-communication`,
          desc: 'Manuscripts, publications and medical writing that communicate research clearly to scientific and regulatory audiences.' },
        { id: '06', title: 'Branding & Communication', href: `${SITE_URL}/services/#branding-communication`,
          desc: 'Brand strategy and content for research-driven organizations that need to communicate complex work with clarity.' },
        { id: '07', title: 'Food Research & R&D', href: `${SITE_URL}/services/#food-research-rd`,
          desc: 'Product research, sensory evaluation and R&D support for food, beverage and nutraceutical innovation.' }
    ];

    React.useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo('.capability-item',
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.7, stagger: 0.07, ease: 'power2.out', scrollTrigger: { trigger: '#what-we-do', start: 'top 65%' } }
        );
    }, []);

    return (
        <section id="what-we-do" className="py-24 lg:py-36 bg-white" data-name="what-we-do" data-file="components/WhatWeDo.js">
            <div className="tg-container">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-24 items-end">
                    <div className="lg:col-span-8">
                        <div className="tg-eyebrow mb-6">Ecosystem</div>
                        <h2 className="tg-h2">Our Core Services</h2>
                    </div>
                    <div className="lg:col-span-4">
                        <p className="tg-lead text-[var(--muted)] mb-6">We turn complex research challenges into opportunities.</p>
                        <a href={`${SITE_URL}/services/`} className="tg-btn tg-btn--ghost">View All Services <div className="icon-arrow-right"></div></a>
                    </div>
                </div>

                <div>
                    {capabilities.map((cap) => (
                        <div key={cap.id} className="capability-item tg-index-row">
                            <a href={cap.href} className="grid grid-cols-12 gap-x-4 items-baseline py-6 lg:py-8 group">
                                <span className="col-span-2 lg:col-span-1 text-sm font-medium text-[var(--muted)] tabular-nums">{cap.id}</span>
                                <div className="col-span-8 lg:col-span-9">
                                    <h3 className="tg-index-title text-[clamp(1.5rem,3.6vw,3.25rem)] font-medium tracking-[-0.03em] leading-[1.08]">{cap.title}</h3>
                                    <div className="tg-index-desc">
                                        <div><p className="pt-4 max-w-2xl text-[var(--muted)] leading-relaxed lg:ml-5">{cap.desc}</p></div>
                                    </div>
                                </div>
                                <div className="col-span-2 lg:col-span-2 flex justify-end">
                                    <div className="tg-index-arrow icon-arrow-right text-2xl"></div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
