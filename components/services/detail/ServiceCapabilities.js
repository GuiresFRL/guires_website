function ServiceCapabilities({ service }) {
    const ref = React.useRef(null);
    const [active, setActive] = React.useState(0);

    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(ref.current.querySelectorAll('.svd-cap-elem'),
            { opacity: 0, y: 26 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out', scrollTrigger: { trigger: ref.current, start: 'top 78%' } }
        );
        gsap.registerPlugin(ScrollTrigger);
        setTimeout(() => ScrollTrigger.refresh(), 50);
    }, []);

    React.useEffect(() => {
        if (window.ScrollTrigger) window.ScrollTrigger.refresh();
    }, [active]);

    const current = service.capabilities[active];

    return (
        <section ref={ref} className="py-14 lg:py-16 bg-[var(--bg-soft)]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="svd-cap-elem max-w-2xl mb-10">
                    <h2 className="tg-h2 !text-[clamp(1.9rem,3.6vw,3rem)]">{service.capabilitiesHeading || 'Our Capabilities'}</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.6fr] gap-10 lg:gap-16">
                    <div className="svd-cap-elem flex lg:flex-col overflow-x-auto lg:overflow-visible no-scrollbar border-t border-black/10 lg:border-t-0">
                        {service.capabilities.map((cap, i) => (
                            <button
                                key={cap.title}
                                onClick={() => setActive(i)}
                                className={`shrink-0 text-left px-5 py-5 lg:px-0 lg:py-4 border-b-2 lg:border-b lg:border-b-black/10 text-sm font-semibold transition-colors duration-300 whitespace-nowrap lg:whitespace-normal ${active === i ? 'border-[var(--accent)] text-[var(--accent)]' : 'border-transparent text-[var(--black)] hover:text-[var(--accent)]'}`}
                            >
                                {cap.title}
                            </button>
                        ))}
                    </div>

                    <div className="svd-cap-elem rounded-[20px] bg-white border border-black/10 p-8 lg:p-10">
                        <div className="w-12 h-12 rounded-xl bg-[var(--tint-2)] text-[var(--accent)] flex items-center justify-center text-2xl mb-6">
                            <div className={current.icon}></div>
                        </div>
                        <p className="text-[var(--muted)] leading-relaxed mb-9 max-w-2xl">{current.desc}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                            {current.highlights.map((h) => (
                                <div key={h.label}>
                                    <div className="w-9 h-9 rounded-lg bg-[var(--bg-soft)] text-[var(--accent)] flex items-center justify-center text-base mb-4">
                                        <div className={h.icon}></div>
                                    </div>
                                    <p className="text-sm text-[var(--black)] leading-relaxed">
                                        <span className="font-bold">{h.label}</span>, {h.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <a href="https://guiresfrl.github.io/guires_website/contact-us.html" className="group mt-10 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)]">
                            Talk to a Specialist <div className="icon-arrow-right text-xs transition-transform duration-300 group-hover:translate-x-1"></div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
