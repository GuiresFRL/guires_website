const CAROUSEL_SLIDES = [
    { img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1400', caption: 'People. Ideas. Impact.', alt: 'Team collaborating around a laptop' },
    { img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1400', caption: 'Where great work happens.', alt: 'Team meeting in a bright office' },
    { img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1400', caption: 'Built together.', alt: 'Colleagues discussing around a table' },
    { img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1400', caption: 'People. Ideas. Impact.', alt: 'Team working together at a desk' },
    { img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1400', caption: 'Where great work happens.', alt: 'Coworkers sharing a laugh in the office' },
    { img: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=1400', caption: 'Built together.', alt: 'Team celebrating at a company event' },
    { img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1400', caption: 'People. Ideas. Impact.', alt: 'Open, collaborative office workspace' }
];

const SLIDE_WIDTH_DESKTOP = 70;
const SLIDE_WIDTH_MOBILE = 100;
const AUTOPLAY_INTERVAL = 5500;

function ImageCarousel() {
    const [index, setIndex] = React.useState(0);
    const [isDesktop, setIsDesktop] = React.useState(typeof window !== 'undefined' && window.innerWidth >= 1024);
    const [paused, setPaused] = React.useState(false);
    const total = CAROUSEL_SLIDES.length;
    const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const sectionRef = React.useRef(null);

    React.useEffect(() => {
        const onResize = () => setIsDesktop(window.innerWidth >= 1024);
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    React.useEffect(() => {
        gsap.fromTo(sectionRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.9, ease: 'power2.out', delay: 0.3 });
    }, []);

    React.useEffect(() => {
        if (paused || prefersReducedMotion) return undefined;
        const id = setInterval(() => setIndex((i) => (i + 1) % total), AUTOPLAY_INTERVAL);
        return () => clearInterval(id);
    }, [paused, total, prefersReducedMotion]);

    const go = (next) => setIndex(((next % total) + total) % total);

    const slideWidth = isDesktop ? SLIDE_WIDTH_DESKTOP : SLIDE_WIDTH_MOBILE;
    const offset = 50 - (index + 0.5) * slideWidth;

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowLeft') { e.preventDefault(); go(index - 1); }
        if (e.key === 'ArrowRight') { e.preventDefault(); go(index + 1); }
    };

    return (
        <section
            ref={sectionRef}
            className="relative py-14 lg:py-20 bg-[var(--cw-bg)]"
            aria-roledescription="carousel"
            aria-label="Life at GUIRES"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
            onKeyDown={handleKeyDown}
        >
            <div className="max-w-3xl mx-auto px-6 text-center mb-12">
                <div className="text-xs font-bold tracking-[0.2em] text-[var(--cw-accent)] uppercase mb-4">Life at GUIRES</div>
                <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-[var(--cw-text)]">A team that shows up for each other</h2>
                <div className="w-12 h-1.5 rounded-full bg-[var(--cw-accent)] mt-5 mx-auto"></div>
            </div>

            <div className="relative">
                <div className="relative overflow-hidden">
                    <div
                        className="flex will-change-transform"
                        style={{
                            transform: `translateX(${offset}%)`,
                            transition: prefersReducedMotion ? 'none' : 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1)'
                        }}
                    >
                        {CAROUSEL_SLIDES.map((slide, i) => {
                            const isActive = i === index;
                            const nearActive = Math.abs(i - index) <= 1 || Math.abs(i - index) >= total - 1;
                            return (
                                <div
                                    key={slide.img}
                                    className="shrink-0 px-2 sm:px-3"
                                    style={{ width: `${slideWidth}%` }}
                                    aria-hidden={!isActive}
                                >
                                    <div className={`relative rounded-2xl lg:rounded-[1.75rem] overflow-hidden aspect-[4/3] sm:aspect-[16/10] border border-[var(--cw-border)] transition-all duration-700 ${isActive ? 'opacity-100 scale-100' : 'opacity-45 scale-[0.94]'}`}>
                                        {nearActive ? (
                                            <img
                                                src={slide.img}
                                                alt={slide.alt}
                                                loading={isActive ? 'eager' : 'lazy'}
                                                className={`w-full h-full object-cover transition-transform duration-[1600ms] ease-out ${isActive ? 'scale-[1.06]' : 'scale-100'}`}
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-[var(--cw-surface-2)]"></div>
                                        )}
                                        {isActive && (
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent flex items-end p-6 sm:p-8 lg:p-10">
                                                <p className="text-white text-lg sm:text-2xl font-semibold tracking-tight">{slide.caption}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <button
                    onClick={() => go(index - 1)}
                    aria-label="Previous slide"
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FFFFFFE6] border border-[var(--cw-border)] backdrop-blur flex items-center justify-center text-[var(--cw-text)] hover:bg-[var(--cw-accent)] hover:text-white hover:border-[var(--cw-accent)] transition-colors duration-300 shadow-sm z-10"
                >
                    <div className="icon-chevron-left"></div>
                </button>
                <button
                    onClick={() => go(index + 1)}
                    aria-label="Next slide"
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FFFFFFE6] border border-[var(--cw-border)] backdrop-blur flex items-center justify-center text-[var(--cw-text)] hover:bg-[var(--cw-accent)] hover:text-white hover:border-[var(--cw-accent)] transition-colors duration-300 shadow-sm z-10"
                >
                    <div className="icon-chevron-right"></div>
                </button>
            </div>

            <div role="tablist" aria-label="Choose slide" className="flex items-center justify-center gap-2 mt-8">
                {CAROUSEL_SLIDES.map((slide, i) => (
                    <button
                        key={slide.img}
                        role="tab"
                        aria-selected={i === index}
                        aria-label={`Go to slide ${i + 1} of ${total}`}
                        onClick={() => go(i)}
                        className={`h-2 rounded-full transition-all duration-300 ${i === index ? 'w-7 bg-[var(--cw-accent)]' : 'w-2 bg-[var(--cw-border)] hover:bg-[var(--cw-muted)]'}`}
                    ></button>
                ))}
            </div>
        </section>
    );
}
