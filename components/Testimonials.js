const TESTIMONIAL_PLACEHOLDERS = [
    { role: 'VP, Regulatory Affairs', org: 'Pharmaceutical Client' },
    { role: 'Director of Biostatistics', org: 'Healthcare Client' },
    { role: 'Head of R&D', org: 'Diagnostics Client' }
];

function Testimonials() {
    React.useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo('.testimonial-card',
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power2.out', scrollTrigger: { trigger: '#testimonials', start: 'top 75%' } }
        );
    }, []);

    return (
        <section id="testimonials" className="relative py-24 lg:py-36 text-white overflow-hidden" style={{ background: 'var(--purple)' }} data-name="testimonials" data-file="components/Testimonials.js">
            <div className="tg-container">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-20 items-end">
                    <div className="lg:col-span-8">
                        <div className="tg-eyebrow !text-white mb-6">Testimonials</div>
                        <h2 className="tg-h2">Trusted by research &amp; healthcare leaders</h2>
                    </div>
                    <p className="lg:col-span-4 text-white/85 leading-relaxed">What our clients say about working with GUIRES.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12">
                    {TESTIMONIAL_PLACEHOLDERS.map((t, i) => (
                        <figure key={i} className="testimonial-card flex flex-col border-t border-white/40 pt-6">
                            <div className="text-6xl leading-none text-[var(--lilac)] mb-4" aria-hidden="true">&ldquo;</div>
                            <blockquote className="text-white/85 text-lg leading-relaxed mb-10 flex-1">
                                Client testimonial placeholder &mdash; to be replaced with real feedback from GUIRES clients.
                            </blockquote>
                            <figcaption>
                                <div className="text-white font-medium">{t.role}</div>
                                <div className="text-white/75 text-sm">{t.org} &mdash; placeholder</div>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}
