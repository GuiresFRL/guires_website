function InsightsPage() {
    const filters = ['All', 'Blog', 'Research Insights', 'Industry Insights', 'Whitepapers', 'Reports', 'Publications', 'News & Updates', 'FAQs'];
    const [activeFilter, setActiveFilter] = React.useState('All');

    const articles = [
        { date: 'Oct 15, 2026', category: 'Regulatory', title: 'Navigating Global Pharmacovigilance Reporting Standards' },
        { date: 'Oct 02, 2026', category: 'Biostatistics', title: 'The Role of Biostatistics in Modern Clinical Trials' },
        { date: 'Sep 28, 2026', category: 'Research', title: 'Regulatory Trends Shaping Life Sciences in 2027' },
        { date: 'Sep 15, 2026', category: 'Data Science', title: 'Building Robust Research Data Pipelines' },
        { date: 'Sep 08, 2026', category: 'Publications', title: 'A Practical Guide to Scientific Manuscript Structure' },
        { date: 'Aug 30, 2026', category: 'Food Research', title: 'Sensory Evaluation Methods for Product Innovation' },
        { date: 'Aug 18, 2026', category: 'Industry Insights', title: 'What Diagnostics Companies Need From Their Data' },
        { date: 'Aug 05, 2026', category: 'Whitepapers', title: 'A Framework for Research Quality & Compliance' }
    ];

    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo('.insight-page-card',
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power2.out', scrollTrigger: { trigger: '#insights-list', start: 'top 80%' } }
        );
    }, []);

    return (
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex flex-wrap gap-3 mb-16">
                    {filters.map((f) => (
                        <button
                            key={f}
                            onClick={() => setActiveFilter(f)}
                            className={`px-5 py-2 rounded-full text-sm font-medium border transition-colors ${activeFilter === f ? 'bg-[var(--accent)] text-white border-[var(--accent)]' : 'border-black/15 text-gray-600 hover:border-black/40'}`}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                <div id="insights-list" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((art, idx) => (
                        <div key={idx} className="insight-page-card bg-white p-8 border border-black/10 hover:border-black/30 transition-colors cursor-pointer group flex flex-col justify-between min-h-[300px] shadow-sm">
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
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
