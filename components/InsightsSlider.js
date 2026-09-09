function InsightsSlider() {
    const articles = [
        { date: 'Oct 15, 2026', category: 'Regulatory', title: 'Navigating Global Pharmacovigilance Reporting Standards' },
        { date: 'Oct 02, 2026', category: 'Biostatistics', title: 'The Role of Biostatistics in Modern Clinical Trials' },
        { date: 'Sep 28, 2026', category: 'Research', title: 'Regulatory Trends Shaping Life Sciences in 2027' },
        { date: 'Sep 15, 2026', category: 'Data Science', title: 'Building Robust Research Data Pipelines' },
        { date: 'Sep 08, 2026', category: 'Publications', title: 'A Practical Guide to Scientific Manuscript Structure' },
        { date: 'Aug 30, 2026', category: 'Food Research', title: 'Sensory Evaluation Methods for Product Innovation' }
    ];

    const trackRef = React.useRef(null);

    const scrollByCard = (dir) => {
        const track = trackRef.current;
        if (!track) return;
        const card = track.querySelector('.insight-slide-card');
        const amount = card ? card.offsetWidth + 24 : 320;
        track.scrollBy({ left: dir * amount, behavior: 'smooth' });
    };

    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo('.insight-slide-card',
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: '#insights-slider', start: 'top 75%' } }
        );
    }, []);

    return (
        <section id="insights-slider" className="py-24 bg-[#EEF3FA] border-t border-black/5" data-name="insights-slider" data-file="components/InsightsSlider.js">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div>
                        <h2 className="text-5xl font-bold mb-4">Insights</h2>
                        <p className="text-xl text-gray-600">Perspectives for what's next.</p>
                    </div>
                    <div className="flex items-center gap-4 shrink-0">
                        <a href="https://guiresfrl.github.io/guires_website/insights.html" className="btn-outline">View All Insights <div className="icon-arrow-right"></div></a>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => scrollByCard(-1)}
                                aria-label="Previous insight"
                                className="w-11 h-11 rounded-full border border-black/15 flex items-center justify-center hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                            >
                                <div className="icon-arrow-left"></div>
                            </button>
                            <button
                                onClick={() => scrollByCard(1)}
                                aria-label="Next insight"
                                className="w-11 h-11 rounded-full border border-black/15 flex items-center justify-center hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                            >
                                <div className="icon-arrow-right"></div>
                            </button>
                        </div>
                    </div>
                </div>

                <div ref={trackRef} className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory no-scrollbar">
                    {articles.map((art, idx) => (
                        <a
                            key={idx}
                            href="https://guiresfrl.github.io/guires_website/insights.html"
                            className="insight-slide-card snap-start shrink-0 w-[80vw] sm:w-[320px] bg-white p-8 border border-black/10 hover:border-black/30 transition-all duration-300 cursor-pointer group flex flex-col justify-between min-h-[300px] shadow-sm hover:-translate-y-1 hover:shadow-lg"
                        >
                            <div>
                                <div className="flex justify-between items-center mb-8">
                                    <span className="text-xs font-bold text-[var(--accent-secondary)] uppercase tracking-wider">{art.category}</span>
                                    <span className="text-xs text-gray-500">{art.date}</span>
                                </div>
                                <h3 className="text-xl font-semibold group-hover:text-[var(--accent)] transition-colors">
                                    {art.title}
                                </h3>
                            </div>
                            <div className="flex items-center gap-2 text-sm font-medium mt-8">
                                Read Article <div className="icon-arrow-right transition-transform group-hover:translate-x-2"></div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
