function Hero() {
    const sectionRef = React.useRef(null);

    React.useEffect(() => {
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduce) return;

        gsap.fromTo('.hero-line', { yPercent: 110 }, { yPercent: 0, duration: 1, stagger: 0.1, ease: 'power3.out', delay: 0.15 });
        gsap.fromTo('.hero-fade', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power2.out', delay: 0.7 });
        gsap.fromTo('.hero-art', { opacity: 0, scale: 0.94 }, { opacity: 1, scale: 1, duration: 1.4, ease: 'power2.out', delay: 0.2 });
        gsap.to('.hero-ring-a', { rotation: 360, transformOrigin: '50% 50%', duration: 120, repeat: -1, ease: 'none' });
        gsap.to('.hero-ring-b', { rotation: -360, transformOrigin: '50% 50%', duration: 80, repeat: -1, ease: 'none' });
        gsap.to('.hero-orbit', { rotation: 360, transformOrigin: '50% 50%', duration: 40, repeat: -1, ease: 'none' });

        const section = sectionRef.current;
        if (section && window.matchMedia('(pointer: fine)').matches) {
            const onMove = (e) => {
                const r = section.getBoundingClientRect();
                const px = (e.clientX - r.left) / r.width - 0.5;
                const py = (e.clientY - r.top) / r.height - 0.5;
                gsap.to('.hero-art', { x: px * -24, y: py * -18, duration: 1.2, ease: 'power2.out' });
            };
            section.addEventListener('mousemove', onMove);
            return () => section.removeEventListener('mousemove', onMove);
        }
    }, []);

    return (
        <section
            ref={sectionRef}
            className="tg-on-ink relative overflow-hidden text-white min-h-[100svh] flex flex-col"
            style={{ background: 'var(--ink-navy)' }}
            data-name="hero"
            data-file="components/Hero.js"
        >
            <div className="absolute inset-0 tg-grid-bg opacity-70 pointer-events-none" style={{ WebkitMaskImage: 'linear-gradient(180deg, transparent 0%, #000 30%, #000 100%)', maskImage: 'linear-gradient(180deg, transparent 0%, #000 30%, #000 100%)' }}></div>

            {/* geometric composition — typography leads, this only supports it */}
            <svg className="hero-art absolute -right-[12%] -bottom-[18%] w-[min(92vw,820px)] aspect-square pointer-events-none" viewBox="0 0 600 600" fill="none" aria-hidden="true">
                <circle cx="300" cy="300" r="290" stroke="#74d4fc" strokeOpacity="0.28" />
                <circle cx="300" cy="300" r="230" stroke="#74d4fc" strokeOpacity="0.22" />
                <circle cx="300" cy="300" r="170" stroke="#b89dc0" strokeOpacity="0.35" />
                <circle className="hero-ring-a" cx="300" cy="300" r="260" stroke="#74d4fc" strokeOpacity="0.55" strokeDasharray="2 10" strokeLinecap="round" />
                <g className="hero-ring-b">
                    <rect x="170" y="170" width="260" height="260" stroke="#b89dc0" strokeOpacity="0.45" />
                </g>
                <path d="M300 180 A120 120 0 0 1 420 300 L300 300 Z" fill="#da2e0f" />
                <path d="M300 420 A120 120 0 0 1 180 300 L300 300 Z" fill="#8d468a" />
                <circle cx="300" cy="300" r="6" fill="#fff" />
                <g className="hero-orbit">
                    <circle cx="300" cy="10" r="7" fill="#74d4fc" />
                    <circle cx="300" cy="70" r="4" fill="#fff" fillOpacity="0.8" />
                </g>
                <g stroke="#fff" strokeOpacity="0.35">
                    <path d="M300 0 V22 M300 578 V600 M0 300 H22 M578 300 H600" />
                </g>
            </svg>

            <div className="relative z-10 tg-container flex-1 flex flex-col justify-center pt-28 pb-16 lg:pt-36">
                <div className="hero-fade tg-eyebrow mb-8 lg:mb-10">Research &amp; Data Intelligence</div>

                <h1 className="tg-display max-w-[18ch] mb-10 lg:mb-14 !text-[clamp(2.75rem,7.4vw,7rem)]">
                    <span className="block overflow-hidden pb-[0.08em]"><span className="hero-line block">Redesigning how</span></span>
                    <span className="block overflow-hidden pb-[0.08em]"><span className="hero-line block">research moves at</span></span>
                    <span className="block overflow-hidden pb-[0.08em]"><span className="hero-line block text-[var(--accent-cyan)]">the speed of discovery</span></span>
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-12">
                    <div className="lg:col-span-6 xl:col-span-5">
                        <p className="hero-fade tg-lead text-white/75 mb-9 max-w-xl">
                            GUIRES helps healthcare and life sciences organizations transform research, regulatory and scientific challenges through domain expertise, data intelligence and human-led delivery.
                        </p>
                        <div className="hero-fade flex flex-wrap items-center gap-3">
                            <a href="https://guiresfrl.github.io/guires_website/services.html" className="tg-btn tg-btn--primary">
                                Explore Our Services <div className="icon-arrow-right"></div>
                            </a>
                            <a href="https://guiresfrl.github.io/guires_website/contact-us.html" className="tg-btn tg-btn--ghost-light">
                                Start a Conversation
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
