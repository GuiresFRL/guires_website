const TEAM_MEMBERS = [
    { slug: 'chairman-ceo', role: 'Chairman & CEO', dept: 'Leadership' },
    { slug: 'head-of-research', role: 'Head of Research', dept: 'Research' },
    { slug: 'head-of-regulatory-affairs', role: 'Head of Regulatory Affairs', dept: 'Regulatory' },
    { slug: 'head-of-data-analytics', role: 'Head of Data & Analytics', dept: 'Data & Analytics' },
    { slug: 'head-of-scientific-communication', role: 'Head of Scientific Communication', dept: 'Communications' },
    { slug: 'head-of-operations', role: 'Head of Operations', dept: 'Operations' }
];

function initialsFor(role) {
    return role.split(' ').filter((w) => w[0] === w[0].toUpperCase() && w.length > 2).map((w) => w[0]).slice(0, 2).join('');
}

function TeamPage() {
    const trackRef = React.useRef(null);

    const scrollByCard = (dir) => {
        const track = trackRef.current;
        if (!track) return;
        const card = track.querySelector('.team-card');
        const amount = card ? card.offsetWidth + 32 : 320;
        track.scrollBy({ left: dir * amount, behavior: 'smooth' });
    };

    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo('.team-card',
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power2.out', scrollTrigger: { trigger: '#team-slider', start: 'top 80%' } }
        );
    }, []);

    return (
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex items-center justify-end gap-2 mb-8">
                    <button
                        onClick={() => scrollByCard(-1)}
                        aria-label="Previous team member"
                        className="w-11 h-11 rounded-full border border-black/15 flex items-center justify-center hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                    >
                        <div className="icon-arrow-left"></div>
                    </button>
                    <button
                        onClick={() => scrollByCard(1)}
                        aria-label="Next team member"
                        className="w-11 h-11 rounded-full border border-black/15 flex items-center justify-center hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                    >
                        <div className="icon-arrow-right"></div>
                    </button>
                </div>

                <div id="team-slider" ref={trackRef} className="flex gap-8 overflow-x-auto pb-4 snap-x snap-mandatory no-scrollbar">
                    {TEAM_MEMBERS.map((m) => (
                        <a
                            key={m.slug}
                            href={`/about-us/meet-our-team/${m.slug}.html`}
                            className="team-card group shrink-0 snap-start w-[280px] block border border-black/10 rounded-lg p-8 hover:border-[var(--accent)] transition-colors"
                        >
                            <div className="w-16 h-16 rounded-full bg-gray-100 text-[var(--accent)] font-bold flex items-center justify-center text-lg mb-6 group-hover:bg-[var(--accent)] group-hover:text-white transition-colors">
                                {initialsFor(m.role)}
                            </div>
                            <div className="text-xs font-bold tracking-wider text-gray-400 uppercase mb-2">{m.dept}</div>
                            <h3 className="text-xl font-semibold mb-4">{m.role}</h3>
                            <div className="flex items-center gap-2 text-sm font-medium text-[var(--accent)]">
                                View Profile <div className="icon-arrow-right transition-transform group-hover:translate-x-2"></div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
