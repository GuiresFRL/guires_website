const TECH_MODULES = [
    { icon: 'icon-brain-circuit', title: 'AI & Machine Learning', desc: 'Applied AI models that surface patterns across large, complex datasets.' },
    { icon: 'icon-chart-column', title: 'Advanced Analytics', desc: 'Predictive and exploratory analysis for research and business questions.' },
    { icon: 'icon-workflow', title: 'Automation', desc: 'Automated pipelines that remove manual bottlenecks from research operations.' },
    { icon: 'icon-chart-area', title: 'Data Visualization', desc: 'Clear, interactive visual representations of complex evidence.' },
    { icon: 'icon-file-code', title: 'Statistical Programming', desc: 'Production-grade programming for regulated analysis and reporting.' },
    { icon: 'icon-network', title: 'Research Platforms', desc: 'Purpose-built platforms that scale research and analytics delivery.' }
];

function NetworkBackground() {
    const nodes = React.useMemo(() => Array.from({ length: 24 }).map((_, i) => ({
        x: (i * 37) % 100,
        y: (i * 53) % 100,
        r: 1 + (i % 3)
    })), []);

    return (
        <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            {nodes.map((n, i) => (
                i < nodes.length - 1 && (
                    <line key={`l${i}`} x1={n.x} y1={n.y} x2={nodes[i + 1].x} y2={nodes[i + 1].y} stroke="var(--accent-cyan)" strokeWidth="0.15" />
                )
            ))}
            {nodes.map((n, i) => (
                <circle key={i} cx={n.x} cy={n.y} r={n.r * 0.3} fill="var(--accent-cyan)">
                    <animate attributeName="opacity" values="0.3;0.9;0.3" dur={`${3 + (i % 4)}s`} repeatCount="indefinite" begin={`${i * 0.2}s`} />
                </circle>
            ))}
        </svg>
    );
}

function TechAI() {
    const ref = React.useRef(null);

    React.useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(ref.current.querySelectorAll('.svc-tech-elem'),
            { opacity: 0, y: 26 },
            { opacity: 1, y: 0, duration: 0.7, stagger: 0.07, ease: 'power2.out', scrollTrigger: { trigger: ref.current, start: 'top 75%' } }
        );
    }, []);

    return (
        <section ref={ref} className="fs-band fs-band--dark tg-on-ink py-24 lg:py-36 overflow-hidden">
            <div className="absolute inset-0 tg-grid-bg opacity-60 pointer-events-none"></div>
            <NetworkBackground />

            <div className="relative z-10 tg-container">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-24 items-end">
                    <div className="lg:col-span-8">
                        <div className="svc-tech-elem tg-eyebrow mb-6">Technology &amp; AI</div>
                        <h2 className="svc-tech-elem tg-h2">Powered by Data, Technology &amp; AI</h2>
                    </div>
                    <p className="svc-tech-elem lg:col-span-4 text-[#eef3fad9] leading-relaxed">Combine scientific expertise with advanced technology to improve research efficiency, analytical depth and decision-making.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10">
                    {TECH_MODULES.map((m, i) => (
                        <div key={m.title} className="svc-tech-elem tg-hairline group pt-6 pb-12">
                            <div className="flex items-center justify-between mb-10">
                                <span className="text-sm tabular-nums text-[var(--accent-cyan)]">0{i + 1}</span>
                                <span className={`${m.icon} text-xl text-[var(--accent-cyan)] transition-transform duration-300 group-hover:translate-x-1`}></span>
                            </div>
                            <h3 className="text-2xl tracking-[-0.02em] mb-3">{m.title}</h3>
                            <p className="text-[#eef3facc] leading-relaxed max-w-sm">{m.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
