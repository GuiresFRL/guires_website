const CULTURE_FILMSTRIP = [
    { img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=700', alt: 'Team brainstorming session' },
    { img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=700', alt: 'Colleagues sharing a laugh' },
    { img: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=700', alt: 'Team celebrating together' },
    { img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=700', alt: 'Open collaborative workspace' }
];

function CultureGallery() {
    const ref = React.useRef(null);

    React.useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(ref.current.querySelectorAll('.cw-gallery-item, .cw-gallery-head'),
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.7, stagger: 0.07, ease: 'power2.out', scrollTrigger: { trigger: ref.current, start: 'top 80%' } }
        );
    }, []);

    return (
        <section ref={ref} className="py-20 lg:py-32 bg-[var(--cw-surface-2)] overflow-hidden">
            <div className="tg-container mb-14">
                <div className="cw-gallery-head tg-eyebrow mb-6">Our Culture</div>
                <h2 className="cw-gallery-head tg-h2 !text-[clamp(2rem,4.2vw,3.75rem)] max-w-3xl">Moments that define how we work</h2>
            </div>

            <div className="tg-container">
                <div className="no-scrollbar flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2 -mx-5 px-5 sm:mx-0 sm:px-0">
                    {CULTURE_FILMSTRIP.map((item, i) => (
                        <div
                            key={item.img}
                            className={`cw-gallery-item group shrink-0 w-[68%] sm:w-[40%] lg:w-[calc(25%-0.6rem)] snap-start relative overflow-hidden aspect-[3/4] bg-[var(--ink)] ${i % 2 === 1 ? 'lg:mt-12' : ''}`}
                        >
                            <img
                                src={item.img}
                                alt={item.alt}
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
