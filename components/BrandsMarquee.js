const MARQUEE_BRANDS = ['Statswork', 'Pepgra', 'Pubrica', 'Food Research Lab', 'Pepcreations'];

function BrandsMarquee() {
    React.useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo('#brands-marquee .marquee-reveal', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: '#brands-marquee', start: 'top 85%' } });
    }, []);

    return (
        <section id="brands-marquee" className="relative py-24 lg:py-32 bg-white overflow-hidden" data-name="brands-marquee" data-file="components/BrandsMarquee.js">
            <div className="tg-container mb-14 lg:mb-20 grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
                <div className="marquee-reveal lg:col-span-8">
                    <div className="tg-eyebrow mb-6">A Family of Specialist Research Brands</div>
                    <h2 className="tg-h2 !text-[clamp(2rem,4.4vw,4rem)]">Collaborating Across <span className="text-[var(--accent-secondary)]">Specialist Brands</span></h2>
                </div>
                <div className="marquee-reveal lg:col-span-4 lg:text-right">
                    <a href="https://guiresfrl.github.io/guires_website/our-brands/" className="tg-btn tg-btn--ghost">Meet the brands <div className="icon-arrow-right"></div></a>
                </div>
            </div>
            <div className="relative overflow-hidden brand-marquee-mask border-y border-[#01012026] py-8 lg:py-10" aria-label="GUIRES specialist brands">
                <div className="brand-marquee-track flex items-center w-max">
                    {MARQUEE_BRANDS.concat(MARQUEE_BRANDS).map((name, i) => (
                        <div key={i} className="brand-card" aria-hidden={i >= MARQUEE_BRANDS.length}>
                            <span className="brand-card-text">{name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
