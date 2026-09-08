function IndustriesTeaser() {
    const industries = [
        'Healthcare & Life Sciences', 'Pharmaceuticals', 'Medical Devices', 'Biotechnology',
        'Diagnostics', 'Nutraceuticals', 'Food', 'Retail'
    ];

    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo('.industry-chip',
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.06, ease: 'power2.out', scrollTrigger: { trigger: '#industries-teaser', start: 'top 80%' } }
        );
    }, []);

    return (
        <section id="industries-teaser" className="py-24 bg-white border-t border-black/5" data-name="industries-teaser" data-file="components/IndustriesTeaser.js">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div>
                        <h2 className="text-5xl font-bold mb-4">Industries We Serve</h2>
                        <p className="text-xl text-gray-600">Research and evidence support across healthcare, life sciences and beyond.</p>
                    </div>
                    <a href="/industries.html" className="btn-outline shrink-0">View All Industries <div className="icon-arrow-right"></div></a>
                </div>

                <div className="flex flex-wrap gap-4">
                    {industries.map((name) => (
                        <a
                            key={name}
                            href="/industries.html"
                            className="industry-chip px-6 py-3 border border-black/10 rounded-full text-sm font-medium text-gray-700 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                        >
                            {name}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
