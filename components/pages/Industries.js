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
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo('.industry-card',
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.7, stagger: 0.06, ease: 'power2.out', scrollTrigger: { trigger: '#industries-grid', start: 'top 80%' } }
        );
    }, []);

    return (
        <section className="py-24">
            <div id="industries-grid" className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {industries.map((ind) => (
                    <div key={ind.name} className="industry-card border-t border-black/10 pt-6">
                        <h3 className="text-xl font-semibold mb-2">{ind.name}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{ind.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
