function OurBrandsPage() {
    const brands = [
        { id: 'statswork', name: 'Statswork', desc: 'Statistical analysis and data science support for academic and clinical research.' },
        { id: 'pepgra', name: 'Pepgra', desc: 'Scientific writing and publication support for researchers and institutions.' },
        { id: 'pubrica', name: 'Pubrica', desc: 'Medical writing and regulatory documentation for healthcare and life sciences.' },
        { id: 'food-research-lab', name: 'Food Research Lab', desc: 'Food science R&D and product research for food and beverage innovation.' },
        { id: 'pepcreations', name: 'Pepcreations', desc: 'Creative branding and communication services for research-driven organizations.' }
    ];

    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo('.brand-card',
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power2.out', scrollTrigger: { trigger: '#brands-grid', start: 'top 80%' } }
        );
    }, []);

    return (
        <section className="py-24">
            <div id="brands-grid" className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                {brands.map((b) => (
                    <div key={b.id} id={b.id} className="brand-card border border-black/10 rounded-lg p-10 scroll-mt-32">
                        <h3 className="text-2xl font-bold mb-3">{b.name}</h3>
                        <p className="text-gray-600 leading-relaxed">{b.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
