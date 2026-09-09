function OurWork() {
    const projects = [
        { title: 'Accelerating Clinical Research Delivery', category: 'Healthcare & Life Sciences', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200' },
        { title: 'Modernizing Pharmacovigilance Operations', category: 'Pharmaceuticals', img: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&q=80&w=1200' },
        { title: 'Statistical Rigor for Global Trials', category: 'Biostatistics', img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200' },
        { title: 'Advancing Diagnostics R&D', category: 'Diagnostics', img: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=1200' },
        { title: 'Scientific Communication for Global Publication', category: 'Scientific & Medical Communication', img: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&q=80&w=1200' }
    ];

    const trackRef = React.useRef(null);

    const scrollByCard = (dir) => {
        const track = trackRef.current;
        if (!track) return;
        const card = track.querySelector('.work-card');
        const amount = card ? card.offsetWidth + 32 : 340;
        track.scrollBy({ left: dir * amount, behavior: 'smooth' });
    };

    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo('.work-card',
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '#our-work',
                    start: 'top 70%',
                }
            }
        );
    }, []);

    return (
        <section id="our-work" className="py-32 bg-white" data-name="our-work" data-file="components/OurWork.js">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div>
                        <h2 className="text-5xl font-bold mb-4">Featured Case Studies</h2>
                        <p className="text-xl text-gray-600">Ideas are only valuable when they create impact.</p>
                    </div>
                    <div className="flex items-center gap-4 shrink-0">
                        <a href="https://guiresfrl.github.io/guires_website/case-studies.html" className="btn-outline">View All Cases <div className="icon-arrow-right"></div></a>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => scrollByCard(-1)}
                                aria-label="Previous case study"
                                className="w-11 h-11 rounded-full border border-black/15 flex items-center justify-center hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                            >
                                <div className="icon-arrow-left"></div>
                            </button>
                            <button
                                onClick={() => scrollByCard(1)}
                                aria-label="Next case study"
                                className="w-11 h-11 rounded-full border border-black/15 flex items-center justify-center hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                            >
                                <div className="icon-arrow-right"></div>
                            </button>
                        </div>
                    </div>
                </div>

                <div ref={trackRef} className="flex gap-8 overflow-x-auto pb-4 snap-x snap-mandatory no-scrollbar">
                    {projects.map((proj, idx) => (
                        <a
                            key={idx}
                            href="https://guiresfrl.github.io/guires_website/case-studies.html"
                            className="work-card group relative h-[340px] w-[85vw] sm:w-[420px] shrink-0 snap-start rounded-lg overflow-hidden cursor-pointer block transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                            <img src={proj.img} alt={proj.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>

                            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                <div className="text-[var(--accent-secondary)] font-bold tracking-wider text-xs mb-3 uppercase">
                                    {proj.category}
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white leading-snug">
                                    {proj.title}
                                </h3>
                                <div className="flex items-center gap-3 text-white text-sm font-medium group-hover:text-[var(--accent)] transition-colors">
                                    View Project <div className="icon-arrow-right transition-transform group-hover:translate-x-2"></div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
