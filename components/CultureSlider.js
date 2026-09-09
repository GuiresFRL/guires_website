const CULTURE_ITEMS = [
    { type: 'img', src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=500', offset: 70, rotate: -3 },
    { type: 'img', src: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=500', offset: 20, rotate: 2 },
    { type: 'img', src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=500', offset: -10, rotate: -2 },
    { type: 'card', offset: 30, rotate: 0 },
    { type: 'img', src: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=500', offset: -10, rotate: 2 },
    { type: 'img', src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=500', offset: 20, rotate: -2 },
    { type: 'img', src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=500', offset: 70, rotate: 3 }
];

function CultureSlider() {
    const trackRef = React.useRef(null);

    const scrollByCard = (dir) => {
        const track = trackRef.current;
        if (!track) return;
        track.scrollBy({ left: dir * 260, behavior: 'smooth' });
    };

    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo('.culture-item',
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.08, ease: 'power2.out', scrollTrigger: { trigger: '#culture-slider', start: 'top 75%' } }
        );

        // Center the track on the middle brand card so edge photos start cropped, like the reference layout
        requestAnimationFrame(() => {
            const track = trackRef.current;
            const centerCard = track?.querySelector('.culture-item-center');
            if (track && centerCard) {
                const target = centerCard.offsetLeft + centerCard.offsetWidth / 2 - track.clientWidth / 2;
                track.scrollLeft = Math.max(0, target);
            }
        });
    }, []);

    return (
        <section id="culture-slider" className="py-24 lg:py-32 bg-[var(--accent)]/5 border-t border-black/5 overflow-hidden w-full" data-name="culture-slider" data-file="components/CultureSlider.js">
            <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold mb-4">Life at GUIRES</h2>
                <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
                    Where curious minds come together to advance research that matters.
                </p>
                <a href="https://guiresfrl.github.io/guires_website/careers.html" className="btn-primary">
                    Join Our Team <div className="icon-arrow-right"></div>
                </a>
            </div>

            <div className="relative w-full">
                <button
                    onClick={() => scrollByCard(-1)}
                    aria-label="Previous"
                    className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white border border-black/15 items-center justify-center hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors shadow-sm"
                >
                    <div className="icon-arrow-left"></div>
                </button>
                <button
                    onClick={() => scrollByCard(1)}
                    aria-label="Next"
                    className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white border border-black/15 items-center justify-center hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors shadow-sm"
                >
                    <div className="icon-arrow-right"></div>
                </button>

                <div ref={trackRef} className="flex items-center gap-6 overflow-x-auto no-scrollbar py-10" style={{ paddingLeft: '10vw', paddingRight: '10vw' }}>
                    {CULTURE_ITEMS.map((item, i) => (
                        <div
                            key={i}
                            className={`culture-item shrink-0 ${item.type === 'card' ? 'culture-item-center' : ''}`}
                            style={{ transform: `translateY(${item.offset}px) rotate(${item.rotate}deg)` }}
                        >
                            {item.type === 'img' ? (
                                <div className="w-[200px] h-[260px] rounded-2xl overflow-hidden shadow-lg">
                                    <img src={item.src} alt="Life at GUIRES" className="w-full h-full object-cover" />
                                </div>
                            ) : (
                                <div className="w-[200px] h-[260px] rounded-2xl bg-[var(--accent)] shadow-lg flex flex-col items-center justify-center text-center p-6">
                                    <div className="text-white text-3xl font-bold mb-3">5</div>
                                    <div className="text-white text-sm font-medium leading-snug">Specialist Brands.<br />One Research Mission.</div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
