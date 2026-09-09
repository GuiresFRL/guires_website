const WHY_ITEMS = [
    {
        title: 'Deep Domain Expertise',
        desc: 'Decades of combined experience across research, regulatory affairs and biostatistics.',
        icon: (<React.Fragment><circle cx="9" cy="9" r="6"></circle><line x1="13.5" y1="13.5" x2="18" y2="18"></line></React.Fragment>)
    },
    {
        title: 'Global Reach, Local Expertise',
        desc: 'Supporting clients and research partners across multiple regions and markets.',
        icon: (<React.Fragment><circle cx="10" cy="10" r="8"></circle><ellipse cx="10" cy="10" rx="8" ry="3.2"></ellipse><line x1="2" y1="10" x2="18" y2="10"></line></React.Fragment>)
    },
    {
        title: 'End-to-End Research Support',
        desc: 'From study design to publication, under one connected workflow.',
        icon: (<React.Fragment><path d="M5 2h7l4 4v12H5Z"></path><path d="M12 2v4h4"></path></React.Fragment>)
    },
    {
        title: 'Rigorous Quality & Compliance',
        desc: 'Quality and compliance are built into every stage of our work.',
        icon: (<path d="M10 2 L17 5 V10 C17 14.5 14 17.5 10 19 C6 17.5 3 14.5 3 10 V5 Z"></path>)
    }
];

function WhyGuires() {
    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo('.why-item',
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: '#why-guires', start: 'top 78%' } }
        );
    }, []);

    return (
        <section id="why-guires" className="py-24 lg:py-32 bg-[#DCE8F5] border-t border-black/5" data-name="why-guires" data-file="components/WhyGuires.js">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="mb-16 max-w-2xl">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4">Why GUIRES</h2>
                    <p className="text-lg text-gray-600">What sets our research and regulatory support apart.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {WHY_ITEMS.map((item) => (
                        <div key={item.title} className="why-item border-t border-black/10 pt-6">
                            <svg viewBox="0 0 20 20" width="28" height="28" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-5">
                                {item.icon}
                            </svg>
                            <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
