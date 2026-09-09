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
        <section id="industries-teaser" className="relative py-24 border-t border-black/5 overflow-hidden" data-name="industries-teaser" data-file="components/IndustriesTeaser.js">
            <div className="absolute inset-0 w-full h-full">
                <img
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2000"
                    alt="Healthcare and life sciences research"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#081B33]/90"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
                <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div>
                        <h2 className="text-5xl font-bold mb-4 text-white">Industries We Serve</h2>
                        <p className="text-xl text-white/70">Research and evidence support across healthcare, life sciences and beyond.</p>
                    </div>
                    <a href="https://guiresfrl.github.io/guires_website/industries.html" className="px-6 py-3 border border-white/40 text-white text-sm font-medium hover:bg-white/10 transition-colors duration-300 inline-flex items-center gap-2 shrink-0">View All Industries <div className="icon-arrow-right"></div></a>
                </div>

                <div className="flex flex-wrap gap-4">
                    {industries.map((name) => (
                        <a
                            key={name}
                            href="https://guiresfrl.github.io/guires_website/industries.html"
                            className="industry-chip px-6 py-3 border border-white/20 rounded-full text-sm font-medium text-white/80 hover:border-white hover:text-white transition-colors"
                        >
                            {name}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
