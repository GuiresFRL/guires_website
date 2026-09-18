function ServiceOverview({ service }) {
    const ref = React.useRef(null);

    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(ref.current.querySelectorAll('.svd-overview-elem'),
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power2.out', scrollTrigger: { trigger: ref.current, start: 'top 75%' } }
        );
    }, []);

    return (
        <section ref={ref} className="py-14 lg:py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className="svd-overview-elem">
                        <img src={service.overviewImage} alt="" className="w-full h-72 object-cover rounded-[4px]" />
                        <div className="mt-4 flex items-center gap-3">
                            <div className="flex-1 space-y-2">
                                <div className="h-px bg-black/10 w-full"></div>
                                <div className="h-px bg-black/10 w-4/5"></div>
                                <div className="h-px bg-black/10 w-3/5"></div>
                            </div>
                            <span className="w-2.5 h-2.5 rotate-45 bg-[var(--accent)] shrink-0"></span>
                        </div>
                    </div>

                    <div>
                        <div className="svd-overview-elem flex items-center gap-4 mb-4">
                            <span className="h-px flex-1 bg-black/15"></span>
                            <span className="w-2 h-2 rotate-45 bg-[var(--accent)] shrink-0"></span>
                        </div>
                        <div className="svd-overview-elem text-xs font-bold tracking-[0.25em] text-[var(--accent)] uppercase mb-4">{service.approachEyebrow}</div>
                        <h2 className="svd-overview-elem text-[clamp(1.8rem,3.2vw,2.4rem)] font-semibold text-[var(--black)] leading-snug mb-4">{service.approachHeading}</h2>
                        {service.approachParagraphs.map((p, i) => (
                            <p key={i} className="svd-overview-elem text-[var(--muted)] leading-relaxed mb-3">{p}</p>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.6fr] gap-8 lg:gap-16 mt-10 pt-10 border-t border-black/10">
                    <h3 className="svd-overview-elem text-2xl lg:text-3xl font-semibold text-[var(--black)] leading-snug">{service.teamHeading}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
                        {service.overviewItems.map((item) => (
                            <div key={item.title} className="svd-overview-elem pt-5 border-t border-black/15">
                                <h4 className="font-bold text-[var(--black)] mb-2">{item.title}</h4>
                                <p className="text-sm text-[var(--muted)] leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
