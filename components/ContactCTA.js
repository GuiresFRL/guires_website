function ContactCTA() {
    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo('.contact-cta-elem',
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power2.out', scrollTrigger: { trigger: '#contact-cta', start: 'top 80%' } }
        );
    }, []);

    return (
        <section id="contact-cta" className="py-28 bg-white border-t border-black/5" data-name="contact-cta" data-file="components/ContactCTA.js">
            <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
                <h2 className="contact-cta-elem text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
                    Let&rsquo;s Talk About Your Research.
                </h2>
                <p className="contact-cta-elem text-lg text-gray-600 mb-10 max-w-xl mx-auto">
                    Tell us about your challenge, idea or opportunity and our team will be in touch.
                </p>
                <a href="/contact-us.html" className="contact-cta-elem btn-primary text-base px-8 py-4 inline-flex">
                    Request a Consultation <div className="icon-arrow-right"></div>
                </a>
            </div>
        </section>
    );
}
