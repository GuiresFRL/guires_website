function Hero() {
    React.useEffect(() => {
        gsap.fromTo('.hero-text-line',
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.2 }
        );
        gsap.fromTo('.hero-fade',
            { opacity: 0 },
            { opacity: 1, duration: 1.5, ease: 'power2.out', delay: 1 }
        );
        gsap.fromTo('.hero-bg-img',
            { scale: 1.12 },
            { scale: 1, duration: 2.2, ease: 'power2.out' }
        );
    }, []);

    return (
        <section className="relative min-h-[95vh] flex items-center pt-24 overflow-hidden" data-name="hero" data-file="components/Hero.js">
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=2000"
                    alt="Research laboratory"
                    className="hero-bg-img absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">
                <div className="max-w-2xl">
                    <h1 className="text-[clamp(3.5rem,8vw,6.5rem)] font-bold leading-[1.05] tracking-tight mb-8 text-white">
                        <div className="overflow-hidden"><div className="hero-text-line">Creating</div></div>
                        <div className="overflow-hidden"><div className="hero-text-line">What's</div></div>
                        <div className="overflow-hidden"><div className="hero-text-line text-[var(--accent)]">Next.</div></div>
                    </h1>

                    <p className="text-lg lg:text-xl text-gray-200 mb-10 max-w-lg hero-fade leading-relaxed">
                        We help healthcare, life sciences and research-driven organizations transform complex challenges into opportunities through research, data and scientific intelligence.
                    </p>

                    <div className="flex flex-wrap gap-4 hero-fade">
                        <a href="https://guiresfrl.github.io/guires_website/services.html" className="btn-primary">
                            Explore Our Services <div className="icon-arrow-right"></div>
                        </a>
                        <a href="https://guiresfrl.github.io/guires_website/contact-us.html" className="px-6 py-3 border border-white/40 text-white text-sm font-medium hover:bg-white/10 transition-colors duration-300 inline-flex items-center gap-2">
                            Start a Conversation <div className="icon-arrow-right"></div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
