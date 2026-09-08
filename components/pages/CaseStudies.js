function CaseStudiesPage() {
    const cases = [
        { title: 'Accelerating Clinical Research Delivery', category: 'Healthcare & Life Sciences', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200' },
        { title: 'Modernizing Pharmacovigilance Operations', category: 'Pharmaceuticals', img: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&q=80&w=1200' },
        { title: 'Statistical Rigor for Global Trials', category: 'Biostatistics', img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200' },
        { title: 'Advancing Diagnostics R&D', category: 'Diagnostics', img: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=1200' },
        { title: 'Scientific Communication for Global Publication', category: 'Scientific & Medical Communication', img: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&q=80&w=1200' }
    ];

    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo('.case-card',
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out', scrollTrigger: { trigger: '#case-list', start: 'top 75%' } }
        );
    }, []);

    return (
        <section className="py-24">
            <div id="case-list" className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-12">
                {cases.map((c, idx) => (
                    <div key={idx} className="case-card group relative h-[45vh] lg:h-[60vh] rounded-lg overflow-hidden cursor-pointer">
                        <img src={c.img} alt={c.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-50 group-hover:opacity-70" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                        <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-end">
                            <div className="text-[var(--accent-secondary)] font-bold tracking-wider text-sm mb-4 uppercase translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                                {c.category}
                            </div>
                            <h3 className="text-3xl lg:text-5xl font-bold mb-2 max-w-3xl text-white">
                                {c.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
