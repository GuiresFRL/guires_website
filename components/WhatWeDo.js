function WhatWeDo() {
    const capabilities = [
        { id: '01', title: 'Research Solutions' },
        { id: '02', title: 'Data Science & Analytics' },
        { id: '03', title: 'Regulatory & Pharmacovigilance' },
        { id: '04', title: 'Biostatistics & Statistical Programming' },
        { id: '05', title: 'Scientific & Medical Communication' },
        { id: '06', title: 'Branding & Communication' },
        { id: '07', title: 'Food Research & R&D' }
    ];

    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        
        gsap.fromTo('.capability-item', 
            { opacity: 0, y: 30 },
            {
                opacity: 1, 
                y: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '#what-we-do',
                    start: 'top 60%',
                }
            }
        );
    }, []);

    return (
        <section id="what-we-do" className="py-24 bg-gradient-to-b from-gray-50 to-white border-t border-black/5" data-name="what-we-do" data-file="components/WhatWeDo.js">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div>
                        <h2 className="text-4xl lg:text-5xl font-bold mb-4">Our Core Services</h2>
                        <p className="text-xl text-gray-600">We turn complex research challenges into opportunities.</p>
                    </div>
                    <a href="https://guiresfrl.github.io/guires_website/services.html" className="btn-outline shrink-0">View All Services <div className="icon-arrow-right"></div></a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
                    {capabilities.map((cap) => (
                        <a key={cap.id} href="https://guiresfrl.github.io/guires_website/services.html" className="capability-item group cursor-pointer border-t border-black/10 pt-6 block transition-transform duration-300 hover:-translate-y-1">
                            <div className="text-gray-500 text-sm mb-4 font-mono">{cap.id}</div>
                            <h3 className="text-3xl font-medium text-gray-700 group-hover:text-black transition-colors duration-300 flex items-center justify-between">
                                {cap.title}
                                <div className="icon-arrow-right opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"></div>
                            </h3>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}