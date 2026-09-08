const CHART_BARS = [
    { x: 40, h: 70 },
    { x: 100, h: 110 },
    { x: 160, h: 90 },
    { x: 220, h: 150 },
    { x: 280, h: 130 },
    { x: 340, h: 190 }
];
const CHART_BASE_Y = 320;
const CHART_TOP = CHART_BARS.map((b) => ({ x: b.x + 22, y: CHART_BASE_Y - b.h }));

function Impact() {
    const svgRef = React.useRef(null);

    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const counters = document.querySelectorAll('.stat-number');

        counters.forEach(counter => {
            const target = parseFloat(counter.getAttribute('data-target'));

            ScrollTrigger.create({
                trigger: '#impact',
                start: 'top 75%',
                onEnter: () => {
                    gsap.to(counter, {
                        innerHTML: target,
                        duration: 2,
                        ease: 'power3.out',
                        snap: { innerHTML: 1 },
                        onUpdate: function() {
                            counter.innerHTML = Math.round(this.targets()[0].innerHTML) + '+';
                        }
                    });
                },
                once: true
            });
        });

        if (svgRef.current) {
            const bars = svgRef.current.querySelectorAll('.chart-bar');
            const trendLine = svgRef.current.querySelector('.chart-trend');
            const trendDots = svgRef.current.querySelectorAll('.chart-trend-dot');
            const endPing = svgRef.current.querySelector('.chart-end-ping');

            gsap.set(bars, { scaleY: 0, transformOrigin: '50% 100%' });
            gsap.set(trendDots, { scale: 0, transformOrigin: '50% 50%' });
            if (trendLine) {
                const length = trendLine.getTotalLength();
                gsap.set(trendLine, { strokeDasharray: length, strokeDashoffset: length });
            }
            gsap.set(endPing, { scale: 0.5, opacity: 0, transformOrigin: '50% 50%' });

            const tl = gsap.timeline({
                scrollTrigger: { trigger: '#impact', start: 'top 70%' }
            });
            tl.to(bars, { scaleY: 1, duration: 0.8, stagger: 0.12, ease: 'power3.out' })
              .to(trendLine, { strokeDashoffset: 0, duration: 1, ease: 'power2.out' }, '-=0.5')
              .to(trendDots, { scale: 1, duration: 0.35, stagger: 0.08, ease: 'back.out(2.5)' }, '-=0.9')
              .add(() => {
                  gsap.fromTo(endPing,
                      { scale: 0.6, opacity: 0.7 },
                      { scale: 2.2, opacity: 0, duration: 1.6, repeat: -1, ease: 'power1.out' }
                  );
              }, '-=0.1');
        }
    }, []);

    return (
        <section id="impact" className="py-32 bg-gradient-to-b from-gray-50 to-white border-t border-black/5" data-name="impact" data-file="components/Impact.js">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-4xl font-bold mb-6">Global Reach, <br/>Research-Led Impact.</h2>
                    <p className="text-gray-600 text-lg mb-12">Supporting healthcare and life sciences organizations with rigorous, research-led outcomes across geographies.</p>

                    <div className="grid grid-cols-2 gap-12">
                        <div>
                            <div className="stat-number text-5xl lg:text-6xl font-bold text-[var(--accent)] mb-2" data-target="250">0</div>
                            <div className="text-gray-600 font-medium">Research Projects Delivered</div>
                        </div>
                        <div>
                            <div className="stat-number text-5xl lg:text-6xl font-bold text-[var(--accent)] mb-2" data-target="40">0</div>
                            <div className="text-gray-600 font-medium">Countries Served</div>
                        </div>
                        <div>
                            <div className="stat-number text-5xl lg:text-6xl font-bold text-[var(--accent)] mb-2" data-target="1500">0</div>
                            <div className="text-gray-600 font-medium">Domain Experts</div>
                        </div>
                        <div>
                            <div className="stat-number text-5xl lg:text-6xl font-bold text-[var(--accent)] mb-2" data-target="85">0</div>
                            <div className="text-gray-600 font-medium">Publications Supported</div>
                        </div>
                    </div>
                </div>
                
                <div className="relative h-[400px] flex items-center justify-center">
                    <div className="absolute w-[280px] h-[280px] bg-[var(--accent)]/8 rounded-full blur-3xl"></div>

                    <svg ref={svgRef} viewBox="0 0 400 360" width="100%" height="100%" className="max-w-[440px] relative" fill="none">
                        <line x1="20" y1={CHART_BASE_Y} x2="380" y2={CHART_BASE_Y} stroke="black" strokeOpacity="0.1" strokeWidth="1.5"></line>

                        {CHART_BARS.map((b, i) => (
                            <rect
                                key={i}
                                className="chart-bar"
                                x={b.x}
                                y={CHART_BASE_Y - b.h}
                                width="44"
                                height={b.h}
                                rx="4"
                                fill="var(--accent)"
                                fillOpacity={i === CHART_BARS.length - 1 ? '1' : '0.18'}
                            ></rect>
                        ))}

                        <path
                            className="chart-trend"
                            d={`M${CHART_TOP.map((p) => `${p.x},${p.y}`).join(' L')}`}
                            stroke="var(--accent-secondary)"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>

                        {CHART_TOP.map((p, i) => (
                            <circle key={i} className="chart-trend-dot" cx={p.x} cy={p.y} r="5" fill="var(--white)" stroke="var(--accent-secondary)" strokeWidth="2.5"></circle>
                        ))}

                        <circle className="chart-end-ping" cx={CHART_TOP[CHART_TOP.length - 1].x} cy={CHART_TOP[CHART_TOP.length - 1].y} r="9" fill="var(--accent-secondary)"></circle>
                    </svg>
                </div>
            </div>
        </section>
    );
}