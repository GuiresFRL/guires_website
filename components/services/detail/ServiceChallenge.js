function ChallengeIllustration({ index }) {
    const c = 'var(--accent)';
    const c2 = 'var(--accent-cyan)';
    const illustrations = [
        <g key="0"><rect x="20" y="20" width="24" height="30" rx="2" stroke={c} strokeWidth="1.8" fill="none" /><rect x="30" y="34" width="24" height="30" rx="2" stroke={c2} strokeWidth="1.8" fill="none" /><rect x="40" y="48" width="24" height="30" rx="2" stroke={c} strokeWidth="1.8" fill="none" strokeDasharray="4 3" /></g>,
        <g key="1"><path d="M15 60 L15 30 L35 30 L35 45 L55 45 L55 20 L75 20" stroke={c} strokeWidth="1.8" fill="none" /><circle cx="15" cy="30" r="3" fill={c2} /><circle cx="35" cy="45" r="3" fill={c} /><circle cx="55" cy="20" r="3" fill={c2} /><circle cx="75" cy="20" r="3" fill={c} /></g>,
        <g key="2"><circle cx="45" cy="45" r="26" stroke={c} strokeWidth="1.8" fill="none" strokeDasharray="3 4" /><path d="M45 45 L45 22" stroke={c2} strokeWidth="2" strokeLinecap="round" /><path d="M45 45 L64 56" stroke={c} strokeWidth="2" strokeLinecap="round" /><circle cx="45" cy="45" r="3" fill={c} /></g>
    ];
    return <svg viewBox="0 0 90 90" className="w-20 h-20">{illustrations[index]}</svg>;
}

function ServiceChallenge({ service }) {
    const ref = React.useRef(null);

    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(ref.current.querySelectorAll('.svd-challenge-elem'),
            { opacity: 0, y: 28 },
            { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: ref.current, start: 'top 78%' } }
        );
    }, []);

    return (
        <section ref={ref} className="relative overflow-hidden py-14 lg:py-16 bg-[var(--bg-soft)]">
            <div className="absolute top-0 right-0 w-[45%] h-full pointer-events-none opacity-[0.5]" aria-hidden="true">
                <svg viewBox="0 0 500 500" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                    <circle cx="480" cy="20" r="220" fill="none" stroke="var(--accent)" strokeOpacity="0.12" strokeWidth="1.5" />
                    <circle cx="480" cy="20" r="160" fill="none" stroke="var(--accent)" strokeOpacity="0.14" strokeWidth="1.5" />
                    <circle cx="480" cy="20" r="100" fill="none" stroke="var(--accent-cyan)" strokeOpacity="0.18" strokeWidth="1.5" />
                </svg>
            </div>
            <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
                <div className="svd-challenge-elem flex items-center gap-4 mb-5">
                    <span className="h-px flex-1 bg-black/15"></span>
                    <span className="w-2 h-2 rotate-45 bg-[var(--accent)] shrink-0"></span>
                </div>
                <div className="svd-challenge-elem text-xs font-bold tracking-[0.25em] text-[var(--accent)] uppercase mb-4">{service.challengeEyebrow}</div>
                <p className="svd-challenge-elem text-[clamp(1.6rem,3vw,2.25rem)] font-light text-[var(--black)] leading-snug max-w-6xl mb-10">{service.challengeStatement}</p>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {service.challenges.map((c, i) => (
                        <div key={c.num} className="svd-challenge-elem rounded-[20px] border border-black/10 p-9 bg-white">
                            <div className="text-sm font-bold text-[var(--muted)] mb-6">{c.num}</div>
                            <ChallengeIllustration index={i} />
                            <h3 className="text-xl font-bold text-[var(--black)] mt-6 mb-3">{c.title}</h3>
                            <p className="text-[var(--muted)] leading-relaxed">{c.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
