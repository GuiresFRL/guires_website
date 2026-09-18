function CapabilityDiagram({ service }) {
    const [active, setActive] = React.useState(0);
    const ref = React.useRef(null);
    const nodes = service.diagramNodes;
    const radius = 150;
    const center = 190;

    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(ref.current.querySelectorAll('.svd-diagram-elem'),
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power2.out', scrollTrigger: { trigger: ref.current, start: 'top 78%' } }
        );
        gsap.fromTo(ref.current.querySelectorAll('.svd-diagram-node'),
            { opacity: 0, scale: 0 },
            { opacity: 1, scale: 1, duration: 0.5, stagger: 0.1, ease: 'back.out(2)', scrollTrigger: { trigger: ref.current, start: 'top 70%' } }
        );
    }, []);

    const positions = nodes.map((_, i) => {
        const angle = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
        return { x: center + Math.cos(angle) * radius, y: center + Math.sin(angle) * radius };
    });

    return (
        <section ref={ref} className="py-24 lg:py-32 bg-[var(--bg-soft)]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="svd-diagram-elem max-w-2xl mb-14">
                    <h2 className="text-[clamp(1.9rem,3.6vw,2.5rem)] font-bold tracking-tight text-[var(--black)]">How the Pieces Connect</h2>
                </div>

                {/* Desktop circular diagram */}
                <div className="hidden lg:grid grid-cols-2 gap-12 items-center">
                    <div className="svd-diagram-elem relative mx-auto" style={{ width: 380, height: 380 }}>
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 380 380" fill="none">
                            {positions.map((p, i) => (
                                <line
                                    key={i}
                                    x1={center} y1={center} x2={p.x} y2={p.y}
                                    stroke={active === i ? 'var(--accent)' : '#CBD5E1'}
                                    strokeWidth={active === i ? 2 : 1.2}
                                    className="transition-all duration-300"
                                />
                            ))}
                        </svg>
                        <div className="absolute rounded-full bg-[var(--ink-navy)] text-white flex items-center justify-center text-sm font-bold shadow-lg" style={{ width: 84, height: 84, left: center - 42, top: center - 42 }}>
                            GUIRES
                        </div>
                        {nodes.map((n, i) => (
                            <button
                                key={n.key}
                                onClick={() => setActive(i)}
                                className={`svd-diagram-node absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 group`}
                                style={{ left: positions[i].x, top: positions[i].y }}
                            >
                                <div className={`w-14 h-14 rounded-full flex items-center justify-center text-xl border-2 transition-all duration-300 ${active === i ? 'bg-[var(--accent)] text-white border-[var(--accent)] scale-110' : 'bg-white text-[var(--accent)] border-black/10 group-hover:border-[var(--accent)]'}`}>
                                    <div className={n.icon}></div>
                                </div>
                                <span className={`text-xs font-semibold whitespace-nowrap ${active === i ? 'text-[var(--black)]' : 'text-[var(--muted)]'}`}>{n.label}</span>
                            </button>
                        ))}
                    </div>

                    <div className="svd-diagram-elem rounded-[20px] border border-black/10 bg-white p-10">
                        <div className="text-xs font-bold tracking-wider text-[var(--accent)] uppercase mb-3">{nodes[active].label}</div>
                        <p className="text-lg text-[var(--black)] leading-relaxed">{nodes[active].desc}</p>
                    </div>
                </div>

                {/* Mobile vertical sequence */}
                <div className="lg:hidden space-y-4">
                    {nodes.map((n, i) => (
                        <div key={n.key} className="svd-diagram-elem rounded-2xl border border-black/10 bg-white overflow-hidden">
                            <button onClick={() => setActive(active === i ? -1 : i)} className="w-full flex items-center gap-4 p-5 text-left">
                                <div className={`w-11 h-11 rounded-full flex items-center justify-center text-lg shrink-0 ${active === i ? 'bg-[var(--accent)] text-white' : 'bg-[#0C4DA21A] text-[var(--accent)]'}`}><div className={n.icon}></div></div>
                                <span className="font-bold text-[var(--black)] flex-1">{n.label}</span>
                                <div className={`icon-chevron-down text-[var(--muted)] transition-transform duration-300 ${active === i ? 'rotate-180' : ''}`}></div>
                            </button>
                            <div className={`grid transition-all duration-300 ease-out ${active === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`} style={{ overflow: 'hidden' }}>
                                <div className="min-h-0 px-5 pb-5"><p className="text-sm text-[var(--muted)] leading-relaxed">{n.desc}</p></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
