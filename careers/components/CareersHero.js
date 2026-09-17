function HeroPhoto() {
    return (
        <div className="relative w-full h-full">
            <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=700"
                alt="Colleagues walking and talking in the office"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ clipPath: 'polygon(0 0, 65% 0, 100% 100%, 0 65%)' }}
            />
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    clipPath: 'polygon(0 65%, 35% 100%, 100% 100%)',
                    background: 'linear-gradient(to left, #0A2F63 10%, var(--cw-accent) 50%, #5CD9F0 94%)'
                }}
            ></div>
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    clipPath: 'polygon(65% 0, 100% 35%, 100% 100%)',
                    background: 'linear-gradient(to top, #0A2F63 10%, var(--cw-accent) 50%, #5CD9F0 94%)'
                }}
            ></div>
        </div>
    );
}

function CareersHero() {
    const ref = React.useRef(null);

    React.useEffect(() => {
        gsap.fromTo(ref.current.querySelectorAll('.cw-hero-elem'),
            { opacity: 0, y: 28 },
            { opacity: 1, y: 0, duration: 0.9, stagger: 0.12, ease: 'power3.out', delay: 0.15 }
        );
        gsap.fromTo(ref.current.querySelectorAll('.cw-hero-photo'),
            { opacity: 0, scale: 1.04 },
            { opacity: 1, scale: 1, duration: 1.1, ease: 'power2.out', delay: 0.2 }
        );
    }, []);

    return (
        <section ref={ref} className="relative pt-32 pb-10 lg:pt-28 lg:pb-0 overflow-hidden bg-[var(--cw-bg)] lg:flex lg:items-end">
            {/* desktop: photo pinned to the true right edge, flush with the section's bottom */}
            <div className="cw-hero-photo hidden lg:block absolute right-0 bottom-0 w-full max-w-[500px] aspect-square">
                <HeroPhoto />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
                <div className="max-w-xl">
                    <div className="cw-hero-elem inline-flex items-center gap-2 rounded-full border border-[var(--cw-border)] bg-[var(--cw-surface)] px-4 py-2 text-xs font-semibold tracking-wide text-[var(--cw-muted)] mb-7">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--cw-accent)]"></span>
                        We&rsquo;re hiring across engineering, data, design &amp; research
                    </div>
                    <h1 className="cw-hero-elem text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.15] text-[var(--cw-text)] mb-6">
                        Build Your Future <span className="text-[var(--cw-accent)]">With Us</span>
                    </h1>
                    <p className="cw-hero-elem text-lg text-[var(--cw-muted)] leading-relaxed max-w-md mb-9">
                        Join a talented team solving meaningful problems in healthcare and life sciences research. We&rsquo;re looking for curious, driven people who want their work to matter.
                    </p>

                    <a
                        href={`${CAREERS_BASE}/jobs/`}
                        className="cw-hero-elem cw-btn-arrow inline-flex items-center gap-2 rounded-full bg-[var(--cw-accent)] text-white text-base font-semibold px-8 py-4 hover:bg-[var(--cw-accent-dark)] transition-colors duration-300 shadow-lg shadow-[#0C4DA233] mb-10 lg:mb-16"
                    >
                        View All Jobs <div className="icon-arrow-right transition-transform duration-300"></div>
                    </a>

                    {/* mobile: photo shown inline below the text */}
                    <div className="cw-hero-photo lg:hidden relative w-full max-w-[320px] mx-auto aspect-square mt-10">
                        <HeroPhoto />
                    </div>
                </div>
            </div>
        </section>
    );
}
