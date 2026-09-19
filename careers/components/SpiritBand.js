function SpiritBand() {
    const ref = React.useRef(null);

    React.useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(ref.current.querySelectorAll('.cw-spirit-elem'),
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.9, stagger: 0.12, ease: 'power2.out', scrollTrigger: { trigger: ref.current, start: 'top 85%' } }
        );
    }, []);

    return (
        <section ref={ref} className="tg-on-ink relative py-20 lg:py-32 overflow-hidden text-white" style={{ background: 'var(--purple)' }}>
            <div className="tg-container grid grid-cols-1 lg:grid-cols-12 gap-10">
                <div className="cw-spirit-elem lg:col-span-3"><div className="tg-eyebrow !text-white">Our spirit</div></div>
                <div className="lg:col-span-8">
                    <p className="cw-spirit-elem text-[clamp(1.75rem,3.6vw,3.25rem)] font-medium tracking-[-0.035em] leading-[1.1] mb-10">
                        Our commitment to rigorous research has always defined GUIRES.
                    </p>
                    <p className="cw-spirit-elem text-lg lg:text-xl leading-relaxed text-white/90 max-w-3xl">
                        When we&rsquo;re not helping clients navigate complex research and regulatory challenges, we&rsquo;re investing in <strong className="font-semibold text-white">continuous learning</strong>, strengthening <strong className="font-semibold text-white">cross-functional collaboration</strong>, and building a culture where curiosity is encouraged. We don&rsquo;t just deliver research &mdash; we live it.
                    </p>
                </div>
            </div>
        </section>
    );
}
