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
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo('.insight-card', { opacity: 0, y: 30 }, {
            opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power2.out',
            scrollTrigger: { trigger: '#insights-slider', start: 'top 75%' }
        });
    }, []);

    const [featured, ...rest] = INSIGHT_ARTICLES;
    const href = 'https://guiresfrl.github.io/guires_website/insights/';

    return (
        <section id="insights-slider" className="py-24 lg:py-36 bg-[var(--bg-soft)]" data-name="insights-slider" data-file="components/InsightsSlider.js">
            <div className="tg-container">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div>
                        <div className="tg-eyebrow mb-6">Resources</div>
                        <h2 className="tg-h2">Insights</h2>
                    </div>
                    <a href={href} className="tg-btn tg-btn--ghost self-start md:self-auto">View All Insights <div className="icon-arrow-right"></div></a>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-12">
                    <a href={href} className="insight-card group lg:col-span-7 block">
                        <div className="overflow-hidden mb-6 aspect-[16/10] bg-[var(--ink)]">
                            <img src={featured.img.replace('w=600', 'w=1200')} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="" loading="lazy" />
                        </div>
                        <div className="tg-eyebrow mb-4">{featured.category}</div>
                        <h3 className="text-[clamp(1.75rem,3.2vw,3rem)] font-medium tracking-[-0.03em] leading-[1.08] mb-6 max-w-2xl group-hover:text-[var(--accent-secondary)] transition-colors">{featured.title}</h3>
                        <span className="tg-link">Read Article <span className="icon-arrow-right"></span></span>
                    </a>

                    <div className="lg:col-span-5 flex flex-col">
                        {rest.map((art) => (
                            <a key={art.title} href={href} className="insight-card group tg-hairline py-8 first:pt-0 first:border-t-0 lg:first:border-t-0 flex gap-6 items-start">
                                <div className="flex-1">
                                    <div className="tg-eyebrow mb-4">{art.category}</div>
                                    <h3 className="text-2xl font-medium tracking-[-0.02em] leading-snug mb-5 group-hover:text-[var(--accent-secondary)] transition-colors">{art.title}</h3>
                                    <span className="tg-link text-sm">Read Article <span className="icon-arrow-right"></span></span>
                                </div>
                                <div className="hidden sm:block w-32 h-32 shrink-0 overflow-hidden bg-[var(--ink)]">
                                    <img src={art.img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="" loading="lazy" />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
