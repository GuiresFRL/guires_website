const MARQUEE_BRANDS = ['Statswork', 'Pepgra', 'Pubrica', 'Food Research Lab', 'Pepcreations'];

function BrandsMarquee() {
    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo('#brands-marquee .marquee-reveal', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', scrollTrigger: { trigger: '#brands-marquee', start: 'top 90%' } });
    }, []);

    return (
        <section id="brands-marquee" className="relative py-16 bg-white border-t border-black/5 overflow-hidden" data-name="brands-marquee" data-file="components/BrandsMarquee.js">
            <div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row lg:items-center gap-8">
                <div className="marquee-reveal lg:w-[30%] shrink-0 lg:pr-8 lg:border-r border-black/15">
                    <div className="text-xs font-bold tracking-wider text-gray-500 uppercase mb-3">A Family of Specialist Research Brands</div>
                    <h2 className="text-4xl lg:text-5xl font-bold leading-tight">Collaborating Across <span className="text-[var(--accent)]">Specialist Brands</span></h2>
                </div>
                <div className="relative flex-1 overflow-hidden brand-marquee-mask">
                    <div className="brand-marquee-track flex items-center gap-4 w-max">
                        {MARQUEE_BRANDS.concat(MARQUEE_BRANDS).map((name, i) => (
                            <div key={i} className="brand-card" aria-hidden={i >= MARQUEE_BRANDS.length}>
                                <span className="brand-card-text">{name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
