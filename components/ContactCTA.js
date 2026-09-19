function ContactCTA() {
    React.useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo('.contact-cta-elem',
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power2.out', scrollTrigger: { trigger: '#contact-cta', start: 'top 80%' } }
        );
    }, []);

    return (
        <section id="contact-cta" className="relative py-28 lg:py-44 overflow-hidden text-white" style={{ background: 'var(--accent)' }} data-name="contact-cta" data-file="components/ContactCTA.js">
            <svg className="absolute -right-24 -bottom-40 w-[620px] h-[620px] pointer-events-none" viewBox="0 0 400 400" fill="none" aria-hidden="true">
                <circle cx="200" cy="200" r="190" stroke="#fff" strokeOpacity="0.28" strokeWidth="1.5" />
                <circle cx="200" cy="200" r="140" stroke="#fff" strokeOpacity="0.28" strokeWidth="1.5" />
                <circle cx="200" cy="200" r="90" stroke="#fff" strokeOpacity="0.28" strokeWidth="1.5" />
            </svg>
            <div className="relative z-10 tg-container">
                <h2 className="contact-cta-elem tg-display max-w-[14ch] mb-10 !text-[clamp(3rem,8.4vw,8.5rem)]">
                    Let&rsquo;s Talk About Your Research.
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
                    <p className="contact-cta-elem lg:col-span-6 tg-lead text-white/90 max-w-xl">
                        Tell us about your challenge, idea or opportunity and our team will be in touch.
                    </p>
                    <div className="contact-cta-elem lg:col-span-6 lg:text-right">
                        <a href="https://guiresfrl.github.io/guires_website/contact-us.html" className="tg-btn tg-btn--light !py-5 !px-8 !text-base">
                            Request a Consultation <div className="icon-arrow-right"></div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
