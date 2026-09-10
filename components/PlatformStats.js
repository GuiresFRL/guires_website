const HUB_PATHS = [
    'M80 110 C 80 190, 200 260, 240 340',
    'M200 110 C 200 180, 225 250, 240 340',
    'M320 110 C 320 180, 265 250, 240 340',
    'M440 110 C 440 190, 300 260, 240 340'
];

const HUB_NODES = [
    { x: 45, icon: 'icon-database' },
    { x: 165, icon: 'icon-shield-check' },
    { x: 285, icon: 'icon-activity' },
    { x: 405, icon: 'icon-file-text' }
];

const PLATFORM_STATS = [
    { target: 250, label: 'Research Projects Delivered' },
    { target: 40, label: 'Countries Served' },
    { target: 1500, label: 'Domain Experts' },
    { target: 85, label: 'Publications Supported' }
];

function PlatformStats() {
    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo('.platform-reveal', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: '#platform-section', start: 'top 70%' } });

        document.querySelectorAll('.hub-path').forEach((c) => {
            const len = c.getTotalLength();
            gsap.set(c, { strokeDasharray: len, strokeDashoffset: len });
            gsap.to(c, { strokeDashoffset: 0, duration: 1.2, stagger: 0.15, ease: 'power2.out', scrollTrigger: { trigger: '#platform-section', start: 'top 60%' } });
        });
        gsap.fromTo('.hub-node', { opacity: 0, y: -16, scale: 0.85 }, { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.12, ease: 'back.out(1.7)', scrollTrigger: { trigger: '#platform-section', start: 'top 60%' } });

        document.querySelectorAll('.stat-num').forEach((el) => {
            const target = parseFloat(el.getAttribute('data-target'));
            ScrollTrigger.create({
                trigger: '#platform-section',
                start: 'top 55%',
                once: true,
                onEnter: () => {
                    gsap.to(el, {
                        innerHTML: target,
                        duration: 1.8,
                        ease: 'power3.out',
                        snap: { innerHTML: 1 },
                        onUpdate: function () { el.innerHTML = Math.round(this.targets()[0].innerHTML) + '+'; }
                    });
                }
            });
        });
    }, []);

    return (
        <section id="platform-section" className="py-24 bg-white" data-name="platform-stats" data-file="components/PlatformStats.js">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                <div>
                    <h2 className="platform-reveal text-3xl lg:text-4xl font-bold mb-6">Data &amp; research intelligence platforms</h2>
                    <p className="platform-reveal text-gray-600 leading-relaxed mb-6">
                        Global demand for research, regulatory and data-driven decision-making continues to accelerate. GUIRES combines domain specialists with modern research operations to help clients move from raw data to publication-ready outcomes &mdash; faster and with confidence.
                    </p>
                    <ul className="platform-reveal space-y-3 mb-8 text-gray-700">
                        <li className="flex items-center gap-3"><div className="icon-check text-[var(--accent)]"></div> Research &amp; data intelligence</li>
                        <li className="flex items-center gap-3"><div className="icon-check text-[var(--accent)]"></div> Regulatory &amp; compliance workflows</li>
                        <li className="flex items-center gap-3"><div className="icon-check text-[var(--accent)]"></div> Scientific communication &amp; publication support</li>
                    </ul>
                    <a href="https://guiresfrl.github.io/guires_website/services.html" className="platform-reveal btn-primary">Read More <div className="icon-arrow-right"></div></a>
                </div>
                <div className="flex items-center justify-center">
                    <svg viewBox="0 0 480 440" className="w-full max-w-lg" fill="none">
                        {HUB_PATHS.map((d, i) => (
                            <path key={i} className="hub-path" d={d} stroke="#C7D6EA" strokeWidth="2" fill="none" />
                        ))}
                        {HUB_PATHS.map((d, i) => (
                            <circle key={i} r="4" fill="#5A8FD6">
                                <animateMotion dur="2.4s" repeatCount="indefinite" begin={`${i * 0.6}s`} path={d} />
                            </circle>
                        ))}
                        {HUB_NODES.map((node) => (
                            <g key={node.x} className="hub-node">
                                <rect x={node.x} y="40" width="70" height="70" rx="16" fill="#0A1B33" />
                                <foreignObject x={node.x} y="40" width="70" height="70">
                                    <div xmlns="http://www.w3.org/1999/xhtml" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '26px' }} className={node.icon}></div>
                                </foreignObject>
                            </g>
                        ))}
                        <defs>
                            <radialGradient id="hubGrad" cx="35%" cy="30%" r="80%">
                                <stop offset="0%" stopColor="#1B4F8C" />
                                <stop offset="100%" stopColor="#081B33" />
                            </radialGradient>
                        </defs>
                        <circle cx="240" cy="395" r="58" fill="url(#hubGrad)" />
                        <foreignObject x="205" y="360" width="70" height="70">
                            <div xmlns="http://www.w3.org/1999/xhtml" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '28px' }} className="icon-network"></div>
                        </foreignObject>
                    </svg>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-6 lg:px-12 border-t border-black/10 pt-14">
                <div className="text-xs font-bold tracking-wider text-gray-400 uppercase mb-10">Featured Outcomes</div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
                    {PLATFORM_STATS.map((s) => (
                        <div key={s.label}>
                            <div className="stat-num text-5xl font-bold text-[var(--accent)] mb-2" data-target={s.target}>0</div>
                            <div className="text-gray-600 font-medium">{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
