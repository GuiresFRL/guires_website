function Hero() {
    const parallaxRef = React.useRef(null);

    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo('.hero-badge', { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', delay: 0.1 });
        gsap.fromTo('.hero-line', { y: '100%' }, { y: '0%', duration: 1, stagger: 0.12, ease: 'power3.out', delay: 0.25 });
        gsap.fromTo('.hero-fade', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.9, stagger: 0.15, ease: 'power2.out', delay: 0.9 });

        gsap.fromTo('.hero-globe', { opacity: 0, scale: 0.85 }, { opacity: 1, scale: 1, duration: 1.4, ease: 'power2.out', delay: 0.3 });
        gsap.to('.hero-globe-spin', { rotation: 360, transformOrigin: '50% 50%', duration: 90, repeat: -1, ease: 'none' });
        gsap.fromTo('.hero-glow-orb', { opacity: 0, scale: 0.7 }, { opacity: 1, scale: 1, duration: 2, stagger: 0.3, ease: 'power2.out', delay: 0.2 });

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

        gsap.to('.hero-cta-glow', { opacity: 0.55, duration: 1.6, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1.4 });
        gsap.to('.hero-scroll-cue', { y: 8, opacity: 0.4, duration: 1.1, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1.6 });

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

        const section = parallaxRef.current;
        const isFinePointer = window.matchMedia('(pointer: fine)').matches;
        if (section && isFinePointer) {
            const onMove = (e) => {
                const rect = section.getBoundingClientRect();
                const px = (e.clientX - rect.left) / rect.width - 0.5;
                const py = (e.clientY - rect.top) / rect.height - 0.5;
                gsap.to('.hero-parallax-slow', { x: px * 14, y: py * 10, duration: 1, ease: 'power2.out' });
                gsap.to('.hero-parallax-fast', { x: px * 26, y: py * 18, duration: 0.8, ease: 'power2.out' });
                gsap.to('.hero-globe', { x: px * 40, y: py * 30, rotationY: px * 25, rotationX: py * -20, duration: 1.1, ease: 'power2.out', transformPerspective: 800 });
            };
            const onLeave = () => {
                gsap.to('.hero-globe', { x: 0, y: 0, rotationY: 0, rotationX: 0, duration: 1.2, ease: 'power2.out' });
            };
            section.addEventListener('mousemove', onMove);
            section.addEventListener('mouseleave', onLeave);
            return () => {
                section.removeEventListener('mousemove', onMove);
                section.removeEventListener('mouseleave', onLeave);
            };
        }
    }, []);

    return (
        <section ref={parallaxRef} className="relative min-h-[88vh] flex flex-col overflow-hidden bg-[#050B18]" data-name="hero" data-file="components/Hero.js">
            <div className="hero-dusk-sky absolute inset-0"></div>

            <div className="hero-glow-orb hero-parallax-slow absolute top-[10%] right-[18%] w-[360px] h-[360px] rounded-full bg-[#3E7BD6]/25 blur-[90px] pointer-events-none"></div>
            <div className="hero-glow-orb hero-parallax-fast absolute bottom-[5%] left-[8%] w-[280px] h-[280px] rounded-full bg-[#0C4DA2]/20 blur-[80px] pointer-events-none"></div>

            {/* interactive globe, tilts and drifts with the mouse */}
            <svg className="hero-globe absolute -right-8 lg:right-8 top-1/2 -translate-y-1/2 w-[380px] h-[380px] lg:w-[460px] lg:h-[460px] opacity-0 pointer-events-none hidden sm:block" viewBox="0 0 400 400" fill="none" style={{ transformStyle: 'preserve-3d' }}>
                <g className="hero-globe-spin">
                    <circle cx="200" cy="200" r="188" stroke="#5A8FD6" strokeOpacity="0.4" strokeWidth="1" />
                    <circle cx="200" cy="200" r="150" stroke="#5A8FD6" strokeOpacity="0.3" strokeWidth="1" />
                    <circle cx="200" cy="200" r="110" stroke="#7FA8E8" strokeOpacity="0.4" strokeWidth="1" />
                    <circle cx="200" cy="200" r="70" stroke="#7FA8E8" strokeOpacity="0.5" strokeWidth="1" />
                    <circle cx="200" cy="200" r="32" stroke="#CFE0FF" strokeOpacity="0.7" strokeWidth="1.5" />
                    <ellipse cx="200" cy="200" rx="188" ry="70" stroke="#5A8FD6" strokeOpacity="0.25" strokeWidth="1" />
                    <ellipse cx="200" cy="200" rx="188" ry="140" stroke="#5A8FD6" strokeOpacity="0.2" strokeWidth="1" />
                    <ellipse cx="200" cy="200" rx="70" ry="188" stroke="#5A8FD6" strokeOpacity="0.2" strokeWidth="1" />
                    <circle cx="200" cy="200" r="188" fill="url(#globeGlow)" />
                </g>
                <defs>
                    <radialGradient id="globeGlow" cx="35%" cy="30%" r="70%">
                        <stop offset="0%" stopColor="#3E7BD6" stopOpacity="0.12" />
                        <stop offset="100%" stopColor="#3E7BD6" stopOpacity="0" />
                    </radialGradient>
                </defs>
            </svg>

            {/* HUD gauge + bar chart accent */}
            <div className="hero-fade hero-parallax-fast absolute right-6 lg:right-16 top-[20%] hidden md:flex flex-col gap-2 border border-white/15 bg-white/5 backdrop-blur-sm rounded-xl px-6 py-5">
                <div className="text-[10px] font-bold tracking-wider text-blue-200/70 uppercase">Research Velocity</div>
                <div className="flex items-center gap-6">
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
            </div>

            <div id="hero-sparkles" className="absolute inset-0 pointer-events-none"></div>

            <div className="relative z-10 flex-1 flex items-center pt-28">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
                    <div className="max-w-2xl">
                        <div className="hero-badge inline-flex items-center gap-2 border border-white/20 bg-white/5 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 text-xs font-semibold tracking-wide text-blue-100 uppercase">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#5AB6FF]"></span>
                            Research &amp; Data Intelligence
                        </div>
                        <h1 className="text-[clamp(2.5rem,5.5vw,4.25rem)] font-bold leading-[1.1] mb-6">
                            <span className="overflow-hidden block"><span className="hero-line block text-white">Redesigning how</span></span>
                            <span className="overflow-hidden block"><span className="hero-line block hero-gradient-text-blue">research moves at</span></span>
                            <span className="overflow-hidden block"><span className="hero-line block hero-gradient-text-blue">the speed of discovery</span></span>
                        </h1>
                        <p className="hero-fade text-blue-100 text-lg mb-10 leading-relaxed max-w-xl">
                            GUIRES helps healthcare and life sciences organizations transform research, regulatory and scientific challenges through domain expertise, data intelligence and human-led delivery.
                        </p>
                        <div className="hero-fade flex flex-wrap items-center gap-4">
                            <a href="https://guiresfrl.github.io/guires_website/services.html" className="relative rounded-full px-8 py-4 bg-gradient-to-r from-[#0C4DA2] to-[#3E7BD6] text-white text-sm font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2">
                                <span className="hero-cta-glow absolute -inset-1 rounded-full bg-[#3E7BD6] opacity-0 blur-lg -z-10"></span>
                                Explore Our Services <div className="icon-arrow-right"></div>
                            </a>
                            <a href="https://guiresfrl.github.io/guires_website/contact-us.html" className="rounded-full px-8 py-4 border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors inline-flex items-center gap-2">
                                Start a Conversation
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero-scroll-cue relative z-10 hidden sm:flex flex-col items-center gap-2 text-white/50 pb-7">
                <span className="text-[10px] font-semibold tracking-widest uppercase">Scroll</span>
                <div className="icon-chevron-down text-lg"></div>
            </div>
        </section>
    );
}
