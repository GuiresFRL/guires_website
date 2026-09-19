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
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        gsap.registerPlugin(ScrollTrigger);
        if (reduce) {
            document.querySelectorAll('.stat-num').forEach((el) => { el.innerHTML = el.getAttribute('data-target') + '+'; });
            return;
        }
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
        <section id="platform-section" className="py-24 lg:py-36 bg-white" data-name="platform-stats" data-file="components/PlatformStats.js">
            <div className="tg-container grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-center mb-24 lg:mb-32">
                <div className="lg:col-span-6">
                    <div className="platform-reveal tg-eyebrow mb-6">Platforms</div>
                    <h2 className="platform-reveal tg-h2 !text-[clamp(2rem,4.4vw,4rem)] mb-8">Data &amp; research intelligence platforms</h2>
                    <p className="platform-reveal tg-lead text-[var(--muted)] mb-8 max-w-xl">
                        Global demand for research, regulatory and data-driven decision-making continues to accelerate. GUIRES combines domain specialists with modern research operations to help clients move from raw data to publication-ready outcomes &mdash; faster and with confidence.
                    </p>
                    <ul className="platform-reveal mb-10 max-w-xl">
                        {['Research & data intelligence', 'Regulatory & compliance workflows', 'Scientific communication & publication support'].map((t) => (
                            <li key={t} className="tg-hairline flex items-center gap-4 py-4 text-lg font-medium tracking-tight">
                                <span className="w-2 h-2 bg-[var(--accent)] shrink-0"></span>{t}
                            </li>
                        ))}
                    </ul>
                    <a href="https://guiresfrl.github.io/guires_website/services.html" className="platform-reveal tg-btn tg-btn--primary">Read More <div className="icon-arrow-right"></div></a>
                </div>
                <div className="lg:col-span-6 flex items-center justify-center">
                    <svg viewBox="0 0 480 440" className="w-full max-w-lg" fill="none" role="img" aria-label="Four research disciplines converging into one platform">
                        {HUB_PATHS.map((d, i) => (
                            <path key={i} className="hub-path" d={d} stroke="#b89dc0" strokeWidth="2" fill="none" />
                        ))}
                        {HUB_PATHS.map((d, i) => (
                            <circle key={i} r="4" fill="#da2e0f">
                                <animateMotion dur="2.4s" repeatCount="indefinite" begin={`${i * 0.6}s`} path={d} />
                            </circle>
                        ))}
                        {HUB_NODES.map((node, i) => (
                            <g key={node.x} className="hub-node">
                                <rect x={node.x} y="40" width="70" height="70" fill={['#010120', '#8d468a', '#010120', '#8d468a'][i]} />
                                <foreignObject x={node.x} y="40" width="70" height="70">
                                    <div xmlns="http://www.w3.org/1999/xhtml" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '26px' }} className={node.icon}></div>
                                </foreignObject>
                            </g>
                        ))}
                        <circle cx="240" cy="395" r="58" fill="#da2e0f" />
                        <foreignObject x="205" y="360" width="70" height="70">
                            <div xmlns="http://www.w3.org/1999/xhtml" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '28px' }} className="icon-network"></div>
                        </foreignObject>
                    </svg>
                </div>
            </div>

            <div className="tg-container">
                <div className="tg-eyebrow mb-10">Featured Outcomes</div>
                <div className="grid grid-cols-2 lg:grid-cols-4">
                    {PLATFORM_STATS.map((s, i) => (
                        <div key={s.label} className={`tg-hairline pt-6 pb-10 ${i % 2 === 1 ? 'pl-5 lg:pl-8' : 'pr-5'} ${i > 0 ? 'lg:pl-8' : ''} lg:pr-8`}>
                            <div className="stat-num text-[clamp(3rem,7vw,6.5rem)] font-medium tracking-[-0.05em] leading-none mb-4 tabular-nums" data-target={s.target}>0</div>
                            <div className="text-[var(--muted)] font-medium max-w-[16rem]">{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
