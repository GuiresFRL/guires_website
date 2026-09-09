const TESTIMONIAL_PLACEHOLDERS = [
    { role: 'VP, Regulatory Affairs', org: 'Pharmaceutical Client' },
    { role: 'Director of Biostatistics', org: 'Healthcare Client' },
    { role: 'Head of R&D', org: 'Diagnostics Client' }
];

function Testimonials() {
    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo('.testimonial-card',
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power2.out', scrollTrigger: { trigger: '#testimonials', start: 'top 75%' } }
        );
    }, []);

    return (
        <section id="testimonials" className="relative py-24 lg:py-32 bg-[#081B33] border-t border-black/5 overflow-hidden" data-name="testimonials" data-file="components/Testimonials.js">
            <svg className="absolute -right-24 -top-24 w-[420px] h-[420px] text-white/5 pointer-events-none" viewBox="0 0 400 400" fill="none">
                <circle cx="200" cy="200" r="190" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="200" cy="200" r="140" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="200" cy="200" r="90" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <svg className="absolute -left-32 bottom-0 w-[360px] h-[360px] text-white/5 pointer-events-none" viewBox="0 0 400 400" fill="none">
                <circle cx="200" cy="200" r="190" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="200" cy="200" r="140" stroke="currentColor" strokeWidth="1.5" />
            </svg>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
                <div className="max-w-2xl mb-16">
                    <div className="text-sm font-bold tracking-wider text-blue-300 uppercase mb-4">Testimonials</div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Trusted by research &amp; healthcare leaders</h2>
                    <p className="text-lg text-white/60">What our clients say about working with GUIRES.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {TESTIMONIAL_PLACEHOLDERS.map((t, i) => (
                        <div key={i} className="testimonial-card border border-dashed border-white/20 rounded-lg p-8 flex flex-col">
                            <div className="text-4xl font-serif text-blue-300/70 leading-none mb-4">&ldquo;</div>
                            <p className="text-white/50 text-sm leading-relaxed mb-8 flex-1">
                                Client testimonial placeholder &mdash; to be replaced with real feedback from GUIRES clients.
                            </p>
                            <div className="border-t border-white/10 pt-4">
                                <div className="text-white text-sm font-semibold">{t.role}</div>
                                <div className="text-white/40 text-xs">{t.org} &mdash; placeholder</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
