function ContactCTA() {
    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo('.contact-cta-elem',
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power2.out', scrollTrigger: { trigger: '#contact-cta', start: 'top 80%' } }
        );
    }, []);

    return (
        <section id="contact-cta" className="relative py-28 bg-[#081B33] border-t border-black/5 overflow-hidden" data-name="contact-cta" data-file="components/ContactCTA.js">
            <svg className="absolute left-1/2 -translate-x-1/2 -bottom-40 w-[560px] h-[560px] text-white/5 pointer-events-none" viewBox="0 0 400 400" fill="none">
                <circle cx="200" cy="200" r="190" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="200" cy="200" r="140" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="200" cy="200" r="90" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
                <h2 className="contact-cta-elem text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-white">
                    Let&rsquo;s Talk About Your Research.
                </h2>
                <p className="contact-cta-elem text-lg text-white/60 mb-10 max-w-xl mx-auto">
                    Tell us about your challenge, idea or opportunity and our team will be in touch.
                </p>
                <a href="https://guiresfrl.github.io/guires_website/contact-us.html" className="contact-cta-elem btn-primary text-base px-8 py-4 inline-flex">
                    Request a Consultation <div className="icon-arrow-right"></div>
                </a>
            </div>
        </section>
    );
}
