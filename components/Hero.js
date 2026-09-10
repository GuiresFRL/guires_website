function Hero() {
    React.useEffect(() => {
        gsap.fromTo('.hero-line', { y: '100%' }, { y: '0%', duration: 1, stagger: 0.12, ease: 'power3.out', delay: 0.2 });
        gsap.fromTo('.hero-fade', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.9, stagger: 0.15, ease: 'power2.out', delay: 0.9 });
        gsap.fromTo('.hero-bg-img', { scale: 1.1 }, { scale: 1, duration: 2.4, ease: 'power2.out' });

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
        <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#0A0E1A]" data-name="hero" data-file="components/Hero.js">
            <img className="hero-bg-img absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=90&w=2400" alt="Research team collaborating" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1A0A08] via-[#3D140F]/85 to-[#3D140F]/25"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A08]/70 via-transparent to-[#1A0A08]/30"></div>

            <svg className="hero-ribbon absolute -top-16 -right-16 w-[380px] h-[380px] opacity-70 pointer-events-none hidden md:block" viewBox="0 0 400 400" fill="none">
                <defs>
                    <linearGradient id="ribbonGrad1" x1="0" y1="0" x2="400" y2="400" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#FF9A5A" />
                        <stop offset="100%" stopColor="#E8352B" />
                    </linearGradient>
                </defs>
                <path d="M40 200 C 40 100, 300 100, 300 220 C 300 320, 120 320, 120 240 C 120 180, 220 180, 220 230" stroke="url(#ribbonGrad1)" strokeWidth="14" strokeLinecap="round" fill="none" opacity="0.55" />
            </svg>
            <svg className="hero-ribbon absolute -bottom-24 -right-10 w-[520px] h-[280px] opacity-70 pointer-events-none hidden md:block" viewBox="0 0 500 260" fill="none" style={{ animationDirection: 'alternate-reverse' }}>
                <defs>
                    <linearGradient id="ribbonGrad2" x1="0" y1="0" x2="500" y2="260" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#FF7A3D" />
                        <stop offset="100%" stopColor="#7A1810" />
                    </linearGradient>
                </defs>
                <path d="M20 200 C 150 260, 250 100, 400 160 C 460 185, 480 140, 470 90" stroke="url(#ribbonGrad2)" strokeWidth="16" strokeLinecap="round" fill="none" opacity="0.6" />
                <path d="M60 230 C 190 280, 270 130, 430 190" stroke="url(#ribbonGrad2)" strokeWidth="10" strokeLinecap="round" fill="none" opacity="0.4" />
            </svg>

            <div id="hero-sparkles" className="absolute inset-0 pointer-events-none"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
                <div className="max-w-2xl">
                    <h1 className="text-[clamp(2.5rem,5.5vw,4.25rem)] font-bold leading-[1.1] mb-6">
                        <span className="overflow-hidden block"><span className="hero-line block text-white">Redesigning how</span></span>
                        <span className="overflow-hidden block"><span className="hero-line block hero-gradient-text">research moves at</span></span>
                        <span className="overflow-hidden block"><span className="hero-line block hero-gradient-text">the speed of discovery</span></span>
                    </h1>
                    <p className="hero-fade text-white/90 text-lg mb-10 leading-relaxed">
                        GUIRES helps healthcare and life sciences organizations transform research, regulatory and scientific challenges through domain expertise, data intelligence and human-led delivery.
                    </p>
                    <a href="https://guiresfrl.github.io/guires_website/services.html" className="hero-fade rounded-full px-8 py-4 bg-gradient-to-r from-[#FF7A3D] to-[#E8352B] text-white text-sm font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2">
                        Explore Our Services <div className="icon-arrow-right"></div>
                    </a>
                </div>
            </div>
        </section>
    );
}
