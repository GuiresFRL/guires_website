function BrandsMarquee() {
    const brands = ['Statswork', 'Pepgra', 'Pubrica', 'Food Research Lab', 'Pepcreations'];
    const track = [...brands, ...brands];

    return (
        <section className="py-14 bg-white border-t border-black/5 overflow-hidden" data-name="brands-marquee" data-file="components/BrandsMarquee.js">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-8">
                <p className="text-center text-xs font-bold tracking-wider text-gray-400 uppercase">A Family of Specialist Research Brands</p>
            </div>
            <div className="relative">
                <div className="flex w-max animate-[marquee_28s_linear_infinite] hover:[animation-play-state:paused]">
                    {track.map((name, i) => (
                        <a
                            key={i}
                            href="/our-brands.html"
                            className="shrink-0 px-10 lg:px-14 text-2xl lg:text-3xl font-semibold text-gray-300 hover:text-[var(--accent)] transition-colors whitespace-nowrap"
                        >
                            {name}
                        </a>
                    ))}
                </div>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent"></div>
            </div>
        </section>
    );
}
