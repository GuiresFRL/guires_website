function initialsFor(role) {
    return role.split(' ').filter((w) => w[0] === w[0].toUpperCase() && w.length > 2).map((w) => w[0]).slice(0, 2).join('');
}

function TeamMemberPage({ member }) {
    React.useEffect(() => {
        gsap.fromTo('.member-reveal',
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out', delay: 0.1 }
        );
    }, []);

    return (
        <section className="py-24">
            <div className="max-w-4xl mx-auto px-6 lg:px-12">
                <a href="https://guiresfrl.github.io/guires_website/about-us/meet-our-team.html" className="member-reveal inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[var(--accent)] transition-colors mb-12">
                    <div className="icon-arrow-left"></div> Back to Team
                </a>

                <div className="member-reveal w-24 h-24 rounded-full bg-gray-100 text-[var(--accent)] font-bold flex items-center justify-center text-2xl mb-8">
                    {initialsFor(member.role)}
                </div>

                <div className="member-reveal text-xs font-bold tracking-wider text-gray-400 uppercase mb-3">{member.dept}</div>
                <h1 className="member-reveal text-4xl lg:text-5xl font-bold mb-8">{member.role}</h1>
                <p className="member-reveal text-lg text-gray-600 leading-relaxed max-w-2xl">
                    Full bio coming soon. This profile is a placeholder for {member.role.toLowerCase()} at GUIRES.
                </p>
            </div>
        </section>
    );
}
