const INSIGHT_ARTICLES = [
    {
        category: 'Regulatory', title: 'Navigating Global Pharmacovigilance Reporting Standards',
        img: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&q=80&w=600'
    },
    {
        category: 'Biostatistics', title: 'The Role of Biostatistics in Modern Clinical Trials',
        img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=600'
    },
    {
        category: 'Research', title: 'Regulatory Trends Shaping Life Sciences in 2027',
        img: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&q=80&w=600'
    }
];

function InsightsSlider() {
    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo('.insight-card', { opacity: 0, y: 40 }, {
            opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power2.out',
            scrollTrigger: { trigger: '#insights-slider', start: 'top 80%' }
        });
    }, []);

    return (
        <section id="insights-slider" className="py-24 bg-[var(--tint-1)]" data-name="insights-slider" data-file="components/InsightsSlider.js">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex items-end justify-between mb-14">
                    <h2 className="text-4xl lg:text-5xl font-bold">Insights</h2>
                    <a href="https://guiresfrl.github.io/guires_website/insights.html" className="btn-outline">View All Insights <div className="icon-arrow-right"></div></a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {INSIGHT_ARTICLES.map((art) => (
                        <a key={art.title} href="https://guiresfrl.github.io/guires_website/insights.html" className="insight-card bg-white border border-black/10 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 block overflow-hidden">
                            <div className="h-44 overflow-hidden">
                                <img src={art.img} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="" />
                            </div>
                            <div className="p-8">
                                <div className="text-xs font-bold text-[var(--accent-secondary)] uppercase tracking-wider mb-6">{art.category}</div>
                                <h3 className="text-xl font-semibold mb-6">{art.title}</h3>
                                <div className="text-sm font-medium flex items-center gap-2">Read Article <div className="icon-arrow-right"></div></div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
