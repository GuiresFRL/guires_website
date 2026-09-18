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
        <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
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
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(ref.current.querySelectorAll('.svc-tech-elem'),
            { opacity: 0, y: 26 },
            { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power2.out', scrollTrigger: { trigger: ref.current, start: 'top 78%' } }
        );
    }, []);

    return (
        <section ref={ref} className="relative py-24 lg:py-36 overflow-hidden" style={{ background: 'var(--ink-navy)' }}>
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '48px 48px' }}></div>
            <NetworkBackground />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
                <div className="max-w-2xl mb-16">
                    <div className="svc-tech-elem text-xs font-bold tracking-[0.25em] text-[var(--accent-cyan)] uppercase mb-5">Technology &amp; AI</div>
                    <h2 className="svc-tech-elem text-[clamp(2rem,4vw,2.75rem)] font-bold tracking-tight text-white mb-5">Powered by Data, Technology &amp; AI</h2>
                    <p className="svc-tech-elem text-lg text-white/60 leading-relaxed">Combine scientific expertise with advanced technology to improve research efficiency, analytical depth and decision-making.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {TECH_MODULES.map((m) => (
                        <div key={m.title} className="svc-tech-elem group rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-8 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.08]">
                            <div className="w-12 h-12 rounded-xl bg-[#19D3E626] text-[var(--accent-cyan)] flex items-center justify-center text-2xl mb-6 transition-transform duration-300 group-hover:scale-110"><div className={m.icon}></div></div>
                            <h3 className="text-lg font-bold text-white mb-2">{m.title}</h3>
                            <p className="text-sm text-white/60 leading-relaxed">{m.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
