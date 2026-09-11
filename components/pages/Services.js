function ServicesPage() {
    const services = [
        {
            id: 'research-solutions',
            num: '01',
            title: 'Research Solutions',
            desc: 'End-to-end support for academic, clinical and market research, from study design and literature review through data collection and reporting.'
        },
        {
            id: 'data-science-analytics',
            num: '02',
            title: 'Data Science & Analytics',
            desc: 'Turning research and operational data into clear, decision-ready insight through analytics, modelling and visualization.',
            link: 'https://guiresfrl.github.io/guires_website/services/data-science-analytics.html'
        },
        {
            id: 'regulatory-pharmacovigilance',
            num: '03',
            title: 'Regulatory & Pharmacovigilance',
            desc: 'Regulatory submissions, dossier preparation and safety monitoring support to help products move through global markets responsibly.'
        },
        {
            id: 'biostatistics-statistical-programming',
            num: '04',
            title: 'Biostatistics & Statistical Programming',
            desc: 'Statistical analysis plans, SDTM/ADaM programming and biostatistics support for clinical and non-clinical studies.'
        },
        {
            id: 'scientific-medical-communication',
            num: '05',
            title: 'Scientific & Medical Communication',
            desc: 'Manuscripts, publications and medical writing that communicate research clearly to scientific and regulatory audiences.'
        },
        {
            id: 'branding-communication',
            num: '06',
            title: 'Branding & Communication',
            desc: 'Brand strategy and content for research-driven organizations that need to communicate complex work with clarity.'
        },
        {
            id: 'food-research-rd',
            num: '07',
            title: 'Food Research & R&D',
            desc: 'Product research, sensory evaluation and R&D support for food, beverage and nutraceutical innovation.'
        }
    ];

    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.utils.toArray('.service-panel').forEach((elem) => {
            gsap.fromTo(elem,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: elem, start: 'top 85%' } }
            );
        });
    }, []);

    return (
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-20">
                {services.map((s) => (
                    <div key={s.id} id={s.id} className="service-panel grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 border-t border-black/10 pt-10 scroll-mt-32">
                        <div className="lg:col-span-2 text-gray-400 font-mono text-sm">{s.num}</div>
                        <h2 className="lg:col-span-4 text-3xl lg:text-4xl font-bold">{s.title}</h2>
                        <div className="lg:col-span-6">
                            <p className="text-lg text-gray-600 leading-relaxed">{s.desc}</p>
                            {s.link && (
                                <a href={s.link} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] hover:text-blue-800 transition-colors">
                                    Learn More <div className="icon-arrow-right"></div>
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
