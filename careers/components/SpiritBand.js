function SpiritBand() {
    const ref = React.useRef(null);

    React.useEffect(() => {
        gsap.fromTo(ref.current.querySelector('.cw-spirit-card'),
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.9, ease: 'power2.out', delay: 0.2 }
        );
    }, []);

    return (
        <section ref={ref} className="relative py-14 lg:py-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #082F63 0%, #0C4DA2 28%, #3E86D6 50%, #29539B 72%, #082F63 100%)' }}>
            <div className="absolute inset-0 opacity-40 pointer-events-none" aria-hidden="true" style={{ background: 'linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.18) 45%, transparent 60%)' }}></div>
            <div className="absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true" style={{ background: 'linear-gradient(105deg, transparent 55%, rgba(255,255,255,0.12) 68%, transparent 82%)' }}></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex justify-center">
                <div className="cw-spirit-card max-w-lg w-full rounded-2xl border border-white/25 p-8 lg:p-10 text-center" style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}>
                    <p className="text-white/90 text-lg leading-relaxed mb-5">
                        Our commitment to <span className="font-bold text-white">rigorous research</span> has always defined GUIRES.
                    </p>
                    <p className="text-white/80 text-base leading-relaxed">
                        When we&rsquo;re not helping clients navigate complex research and regulatory challenges, we&rsquo;re investing in <span className="font-bold text-white">continuous learning</span>, strengthening <span className="font-bold text-white">cross-functional collaboration</span>, and building a culture where curiosity is encouraged. We don&rsquo;t just deliver research &mdash; we live it.
                    </p>
                </div>
            </div>
        </section>
    );
}
