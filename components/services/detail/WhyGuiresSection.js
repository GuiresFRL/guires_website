function WhyGuiresSection({ service }) {
    const ref = React.useRef(null);
    const [open, setOpen] = React.useState(0);

    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(ref.current.querySelectorAll('.svd-why-elem'),
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out', scrollTrigger: { trigger: ref.current, start: 'top 78%' } }
        );
    }, []);

    return (
        <section ref={ref} className="relative overflow-hidden py-16 lg:py-20" style={{ background: 'var(--ink-navy)' }}>
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 items-start">
                    <div className="svd-why-elem relative w-full max-w-xs mx-auto lg:mx-0">
                        <div className="absolute -inset-5 rounded-full border border-dashed border-white/20"></div>
                        <img src={service.whyImage} alt="" className="relative w-full aspect-square object-cover rounded-full border-4 border-[var(--accent-cyan)]" />
                    </div>

                    <div>
                        <div className="svd-why-elem flex items-center gap-4 mb-5">
                            <span className="h-px flex-1 bg-white/20"></span>
                            <span className="w-2 h-2 rotate-45 bg-[var(--accent-cyan)] shrink-0"></span>
                        </div>
                        <div className="svd-why-elem text-xs font-bold tracking-[0.25em] text-[var(--accent-cyan)] uppercase mb-4">{service.whyEyebrow}</div>
                        <h2 className="svd-why-elem text-[clamp(1.8rem,3.2vw,2.4rem)] font-semibold text-white leading-snug mb-9">{service.whyHeading}</h2>

                        <div className="svd-why-elem divide-y divide-white/15 border-t border-b border-white/15">
                            {WHY_GUIRES_PILLARS.map((p, i) => (
                                <div key={p.title}>
                                    <button
                                        onClick={() => setOpen(open === i ? -1 : i)}
                                        className="w-full flex items-center justify-between gap-4 py-5 text-left"
                                        aria-expanded={open === i}
                                    >
                                        <span className="text-sm font-bold text-white">{p.title}</span>
                                        <div className={`icon-chevron-down text-white/50 shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}></div>
                                    </button>
                                    <div className={`grid transition-all duration-300 ease-out ${open === i ? 'grid-rows-[1fr] opacity-100 pb-5' : 'grid-rows-[0fr] opacity-0'}`} style={{ overflow: 'hidden' }}>
                                        <div className="min-h-0"><p className="text-sm text-white/60 leading-relaxed max-w-md">{p.desc}</p></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
