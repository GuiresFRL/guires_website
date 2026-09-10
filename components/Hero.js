const HERO_TRAILS = [
    'M-20 480 C 120 460, 220 380, 340 360 C 460 340, 520 300, 620 260',
    'M-20 520 C 100 510, 240 440, 380 410 C 500 385, 560 330, 660 300',
    'M-20 440 C 140 400, 260 340, 400 320 C 500 305, 540 270, 600 230'
];

function Hero() {
    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo('.hero-line', { y: '100%' }, { y: '0%', duration: 1, stagger: 0.12, ease: 'power3.out', delay: 0.2 });
        gsap.fromTo('.hero-fade', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.9, stagger: 0.15, ease: 'power2.out', delay: 0.9 });

        gsap.fromTo('.hero-trail', { opacity: 0 }, { opacity: 1, duration: 1.5, stagger: 0.2, ease: 'power2.out', delay: 0.4 });

        const bars = gsap.utils.toArray('.hero-bar');
        gsap.fromTo(bars, { scaleY: 0 }, { scaleY: 1, duration: 0.8, stagger: 0.08, ease: 'power3.out', delay: 1, transformOrigin: '50% 100%' });

        const gaugeEl = document.querySelector('.hero-gauge-fill');
        if (gaugeEl) {
            const len = gaugeEl.getTotalLength();
            gsap.set(gaugeEl, { strokeDasharray: len, strokeDashoffset: len });
            gsap.to(gaugeEl, { strokeDashoffset: len * 0.14, duration: 1.6, ease: 'power2.out', delay: 1 });
        }
        const gaugeNum = document.querySelector('.hero-gauge-num');
        if (gaugeNum) {
            const counter = { val: 0 };
            gsap.to(counter, {
                val: 86, duration: 1.6, delay: 1, ease: 'power2.out',
                onUpdate: () => { gaugeNum.textContent = Math.round(counter.val) + '%'; }
            });
        }

        const host = document.getElementById('hero-sparkles');
        if (host && !host.childElementCount) {
            for (let i = 0; i < 18; i++) {
                const dot = document.createElement('div');
                dot.className = 'hero-sparkle';
                const size = 2 + Math.random() * 2;
                dot.style.width = size + 'px';
                dot.style.height = size + 'px';
                dot.style.left = (10 + Math.random() * 80) + '%';
                dot.style.top = (15 + Math.random() * 70) + '%';
                dot.style.animationDelay = (Math.random() * 4) + 's';
                dot.style.animationDuration = (3 + Math.random() * 3) + 's';
                host.appendChild(dot);
            }
        }
    }, []);

    return (
        <section className="relative min-h-[85vh] flex items-center pt-28 overflow-hidden bg-[#050B18]" data-name="hero" data-file="components/Hero.js">
            <div className="hero-dusk-sky absolute inset-0"></div>

            {/* animated winding light-trail data streams */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 700 600" preserveAspectRatio="xMidYMax slice" fill="none">
                <defs>
                    <linearGradient id="trailGrad" x1="0" y1="0" x2="700" y2="0" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#0C4DA2" stopOpacity="0" />
                        <stop offset="55%" stopColor="#3E7BD6" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#8FD8FF" stopOpacity="1" />
                    </linearGradient>
                </defs>
                {HERO_TRAILS.map((d, i) => (
                    <path key={i} className="hero-trail" d={d} stroke="url(#trailGrad)" strokeWidth={i === 1 ? 3 : 2} strokeLinecap="round" fill="none" opacity="0" />
                ))}
                {HERO_TRAILS.map((d, i) => (
                    <circle key={`p${i}`} r={i === 1 ? 5 : 3.5} fill="#BFE6FF">
                        <animateMotion dur={`${5 + i}s`} repeatCount="indefinite" begin={`${i * 1.2}s`} path={d} />
                    </circle>
                ))}
            </svg>

            {/* HUD gauge + bar chart accent */}
            <div className="hero-fade absolute right-6 lg:right-16 top-[22%] hidden md:flex items-center gap-6 border border-white/15 bg-white/5 backdrop-blur-sm rounded-xl px-6 py-5">
                <svg viewBox="0 0 80 80" className="w-16 h-16">
                    <circle cx="40" cy="40" r="34" stroke="#ffffff" strokeOpacity="0.15" strokeWidth="5" fill="none" />
                    <circle className="hero-gauge-fill" cx="40" cy="40" r="34" stroke="#5AB6FF" strokeWidth="5" fill="none" strokeLinecap="round" transform="rotate(-90 40 40)" />
                    <text x="40" y="45" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="700" className="hero-gauge-num">0%</text>
                </svg>
                <div className="flex items-end gap-1.5 h-10">
                    {[14, 22, 16, 28, 20, 32].map((h, i) => (
                        <div key={i} className="hero-bar w-2 rounded-sm bg-[#5AB6FF]" style={{ height: `${h}px` }}></div>
                    ))}
                </div>
            </div>

            <div id="hero-sparkles" className="absolute inset-0 pointer-events-none"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
                <div className="max-w-2xl">
                    <h1 className="text-[clamp(2.5rem,5.5vw,4.25rem)] font-bold leading-[1.1] mb-6">
                        <span className="overflow-hidden block"><span className="hero-line block text-white">Redesigning how</span></span>
                        <span className="overflow-hidden block"><span className="hero-line block hero-gradient-text-blue">research moves at</span></span>
                        <span className="overflow-hidden block"><span className="hero-line block hero-gradient-text-blue">the speed of discovery</span></span>
                    </h1>
                    <p className="hero-fade text-blue-100 text-lg mb-10 leading-relaxed">
                        GUIRES helps healthcare and life sciences organizations transform research, regulatory and scientific challenges through domain expertise, data intelligence and human-led delivery.
                    </p>
                    <a href="https://guiresfrl.github.io/guires_website/services.html" className="hero-fade rounded-full px-8 py-4 bg-gradient-to-r from-[#0C4DA2] to-[#3E7BD6] text-white text-sm font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2">
                        Explore Our Services <div className="icon-arrow-right"></div>
                    </a>
                </div>
            </div>
        </section>
    );
}
