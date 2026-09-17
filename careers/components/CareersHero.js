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
    const [keyword, setKeyword] = React.useState('');
    const [location, setLocation] = React.useState('');

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

    const handleSearch = (e) => {
        e.preventDefault();
        const terms = [keyword, location].map((t) => t.trim()).filter(Boolean).join(' ');
        const qs = terms ? `?search=${encodeURIComponent(terms)}` : '';
        window.location.href = `${CAREERS_BASE}/jobs/${qs}`;
    };

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
                    <h1 className="cw-hero-elem text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] text-[var(--cw-text)] mb-6">
                        Build Your Future <span className="text-[var(--cw-accent)]">With Us</span>
                    </h1>
                    <p className="cw-hero-elem text-lg text-[var(--cw-muted)] leading-relaxed max-w-md mb-9">
                        Join a talented team solving meaningful problems in healthcare and life sciences research. We&rsquo;re looking for curious, driven people who want their work to matter.
                    </p>

                    <form onSubmit={handleSearch} className="cw-hero-elem flex flex-col sm:flex-row items-stretch gap-1.5 rounded-2xl sm:rounded-full p-1.5 max-w-lg" style={{ background: 'var(--cw-accent-secondary)' }}>
                        <div className="relative flex-1">
                            <div className="icon-search absolute left-4 top-[30%] -translate-y-1/2 text-white/50 text-sm"></div>
                            <input
                                type="text"
                                value={keyword}
                                onChange={(e) => setKeyword(e.target.value)}
                                placeholder="Search jobs"
                                aria-label="Search jobs"
                                className="w-full bg-transparent text-white placeholder:text-white/50 rounded-full pl-10 pr-4 py-3 focus:outline-none"
                            />
                        </div>
                        <div className="hidden sm:block w-px bg-white/20 my-2"></div>
                        <div className="relative flex-1">
                            <div className="icon-map-pin absolute left-4 top-[30%] -translate-y-1/2 text-white/50 text-sm"></div>
                            <input
                                type="text"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                placeholder="Type location"
                                aria-label="Location"
                                className="w-full bg-transparent text-white placeholder:text-white/50 rounded-full pl-10 pr-4 py-3 focus:outline-none"
                            />
                        </div>
                        <button type="submit" aria-label="Search jobs" className="cw-btn-arrow shrink-0 w-11 h-11 self-center rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors duration-300">
                            <div className="icon-arrow-right transition-transform duration-300"></div>
                        </button>
                    </form>

                    {/* mobile: photo shown inline below the text */}
                    <div className="cw-hero-photo lg:hidden relative w-full max-w-[320px] mx-auto aspect-square mt-10">
                        <HeroPhoto />
                    </div>
                </div>
            </div>
        </section>
    );
}
