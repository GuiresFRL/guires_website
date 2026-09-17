const CULTURE_FILMSTRIP = [
    { img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=700', alt: 'Team brainstorming session' },
    { img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=700', alt: 'Colleagues sharing a laugh' },
    { img: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=700', alt: 'Team celebrating together' },
    { img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=700', alt: 'Open collaborative workspace' }
];

function CultureGallery() {
    const ref = React.useRef(null);

    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(ref.current.querySelectorAll('.cw-gallery-item'),
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.7, stagger: 0.07, ease: 'power2.out', scrollTrigger: { trigger: ref.current, start: 'top 78%' } }
        );
    }, []);

    return (
        <section ref={ref} className="py-14 lg:py-20 bg-[var(--cw-surface-2)] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-10">
                <div className="max-w-2xl">
                    <div className="text-xs font-bold tracking-[0.2em] text-[var(--cw-accent)] uppercase mb-4">Our Culture</div>
                    <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-[var(--cw-text)]">Moments that define how we work</h2>
                    <div className="w-12 h-1.5 rounded-full bg-[var(--cw-accent)] mt-5"></div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex gap-2 sm:gap-3 overflow-x-auto snap-x snap-mandatory pb-2 -mx-6 px-6 lg:mx-0 lg:px-0">
                    {CULTURE_FILMSTRIP.map((item) => (
                        <div
                            key={item.img}
                            className="cw-gallery-item group shrink-0 w-[62%] sm:w-[38%] lg:w-[calc(25%-0.6rem)] snap-start relative rounded-lg overflow-hidden aspect-[3/4]"
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
