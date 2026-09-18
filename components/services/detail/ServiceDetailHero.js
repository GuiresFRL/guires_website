function ServiceDetailHero({ service }) {
    const ref = React.useRef(null);

    React.useEffect(() => {
        gsap.fromTo(ref.current.querySelectorAll('.svd-hero-elem'),
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out', delay: 0.1 }
        );
        gsap.fromTo(ref.current.querySelector('.svd-hero-image'),
            { opacity: 0, scale: 1.05 },
            { opacity: 1, scale: 1, duration: 1.1, ease: 'power2.out', delay: 0.05 }
        );
        gsap.fromTo(ref.current.querySelector('.svd-hero-accent-line'),
            { scaleX: 0 },
            { scaleX: 1, duration: 0.8, ease: 'power2.out', delay: 0.2, transformOrigin: 'left center' }
        );
    }, []);

    return (
        <section ref={ref} className="relative overflow-hidden min-h-[560px] lg:min-h-[600px] flex items-stretch">
            {/* Full-bleed background image, spans the entire banner */}
            <img
                src={service.heroImage || 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1920'}
                alt=""
                aria-hidden="true"
                className="svd-hero-image absolute inset-0 w-full h-full object-cover"
            />
            {/* Bottom dot pattern spanning full width */}
            <div className="absolute inset-x-0 bottom-0 h-16 opacity-[0.18] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1.5px, transparent 2px)', backgroundSize: '14px 14px' }}></div>

            {/* Solid opaque color block, ~35% width on desktop, full width on mobile */}
            <div className="relative z-10 flex flex-col justify-center px-6 sm:px-10 lg:pl-[3%] lg:pr-10 lg:ml-[100px] pt-32 pb-20 lg:py-16 w-full lg:w-[35%] lg:min-w-[460px]" style={{ background: '#1a334fbd' }}>
                <div className="svd-hero-elem flex items-center gap-3 mb-7">
                    <span className="svd-hero-accent-line w-12 h-px bg-white/50"></span>
                    <span className="w-1.5 h-1.5 rotate-45 bg-[var(--accent-cyan)] shrink-0"></span>
                </div>

                <div className="svd-hero-elem text-xs font-bold tracking-[0.25em] text-[var(--accent-cyan)] uppercase mb-5">{service.eyebrow}</div>
                <h1 className="svd-hero-elem text-[clamp(2.5rem,4.5vw,3.75rem)] font-light text-white leading-[1.05] mb-6">{service.title}</h1>
                <p className="svd-hero-elem text-lg font-semibold text-white/90 leading-snug mb-6">{service.heroHeadline}</p>
                <p className="svd-hero-elem text-white/60 leading-relaxed">{service.heroDescription}</p>
            </div>
        </section>
    );
}
