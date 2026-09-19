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

const TEAM_SURFACES = [
    { bg: 'var(--lilac)', fg: 'var(--ink)', sub: '#010120B3' },
    { bg: 'var(--ink-navy)', fg: '#ffffff', sub: '#FFFFFFBF' },
    { bg: 'var(--purple)', fg: '#ffffff', sub: '#FFFFFFD9' }
];

function TeamPage() {
    React.useEffect(() => {
        tgReveal('.team-card');
    }, []);

    return (
        <React.Fragment>
            <section id="team-slider" className="tg-band tg-band--white tg-section">
                <div className="tg-container">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
                        <div className="lg:col-span-8">
                            <div className="tg-eyebrow mb-6">Leadership team</div>
                            <h2 className="tg-h2">The people behind the work</h2>
                        </div>
                        <p className="lg:col-span-4 text-[var(--muted)] leading-relaxed">Select a profile to learn more about each leader and the discipline they guide.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {TEAM_MEMBERS.map((m, i) => {
                            const s = TEAM_SURFACES[i % TEAM_SURFACES.length];
                            return (
                                <a
                                    key={m.slug}
                                    href={`https://guiresfrl.github.io/guires_website/about-us/meet-our-team/${m.slug}.html`}
                                    className="team-card group flex flex-col justify-between min-h-[22rem] p-8 transition-transform duration-300 hover:-translate-y-1"
                                    style={{ background: s.bg, color: s.fg }}
                                >
                                    <div className="flex items-start justify-between">
                                        <span className="text-[clamp(3.5rem,6vw,5rem)] font-medium tracking-[-0.06em] leading-none">{initialsFor(m.role)}</span>
                                        <span className="icon-arrow-up-right text-2xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"></span>
                                    </div>
                                    <div>
                                        <div className="text-xs font-semibold tracking-[0.14em] uppercase mb-3" style={{ color: s.sub }}>{m.dept}</div>
                                        <h3 className="text-[clamp(1.5rem,2.4vw,2rem)] font-medium tracking-[-0.03em] leading-tight mb-6">{m.role}</h3>
                                        <span className="tg-link text-sm">View Profile <span className="icon-arrow-right"></span></span>
                                    </div>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </section>
            <ContactCTA />
        </React.Fragment>
    );
}
