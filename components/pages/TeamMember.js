function initialsFor(role) {
    return role.split(' ').filter((w) => w[0] === w[0].toUpperCase() && w.length > 2).map((w) => w[0]).slice(0, 2).join('');
}

function TeamMemberPage({ member }) {
    React.useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        gsap.fromTo('.member-reveal',
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out', delay: 0.1 }
        );
    }, []);

    return (
        <React.Fragment>
            <section className="tg-on-ink tg-band tg-band--ink pt-32 pb-16 lg:pt-44 lg:pb-24 overflow-hidden">
                <div className="absolute inset-0 tg-grid-bg opacity-60 pointer-events-none" style={{ WebkitMaskImage: 'linear-gradient(180deg, transparent, #000 60%)', maskImage: 'linear-gradient(180deg, transparent, #000 60%)' }}></div>
                <div className="tg-container relative z-10">
                    <a href="https://guiresfrl.github.io/guires_website/about-us/meet-our-team.html" className="member-reveal tg-link text-sm text-white/80 hover:text-white mb-14">
                        <span className="icon-arrow-left"></span> Back to Team
                    </a>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
                        <div className="member-reveal lg:col-span-3">
                            <div className="w-40 h-40 lg:w-full lg:aspect-square lg:h-auto flex items-center justify-center text-[clamp(3.5rem,7vw,6rem)] font-medium tracking-[-0.06em]" style={{ background: 'var(--accent)', color: '#fff' }}>
                                {initialsFor(member.role)}
                            </div>
                        </div>
                        <div className="lg:col-span-9">
                            <div className="member-reveal tg-eyebrow mb-6">{member.dept}</div>
                            <h1 className="member-reveal tg-display !text-[clamp(2.5rem,6.6vw,6rem)] max-w-[16ch]">{member.role}</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="tg-band tg-band--white tg-section">
                <div className="tg-container grid grid-cols-1 lg:grid-cols-12 gap-10">
                    <div className="lg:col-span-3"><div className="tg-eyebrow">Profile</div></div>
                    <div className="lg:col-span-8">
                        <p className="text-[clamp(1.4rem,2.4vw,2rem)] tracking-[-0.02em] leading-[1.3] text-[var(--muted)] mb-12 max-w-3xl">
                            Full bio coming soon. This profile is a placeholder for {member.role.toLowerCase()} at GUIRES.
                        </p>
                        <a href="https://guiresfrl.github.io/guires_website/about-us/meet-our-team.html" className="tg-btn tg-btn--ghost">
                            Meet the rest of the team <div className="icon-arrow-right"></div>
                        </a>
                    </div>
                </div>
            </section>
            <ContactCTA />
        </React.Fragment>
    );
}
