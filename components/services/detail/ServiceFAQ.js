function ServiceFAQ({ service }) {
    const [open, setOpen] = React.useState(0);
    const ref = React.useRef(null);

    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(ref.current.querySelectorAll('.svd-faq-elem'),
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.06, ease: 'power2.out', scrollTrigger: { trigger: ref.current, start: 'top 80%' } }
        );
    }, []);

    return (
        <section ref={ref} className="py-14 lg:py-16 bg-[var(--bg-soft)]">
            <div className="max-w-3xl mx-auto px-6 lg:px-12">
                <div className="svd-faq-elem max-w-2xl mb-10">
                    <h2 className="text-[clamp(1.9rem,3.6vw,2.5rem)] font-bold tracking-tight text-[var(--black)]">Frequently Asked Questions</h2>
                </div>
                <div className="divide-y divide-black/10 border-t border-b border-black/10">
                    {service.faqs.map((faq, i) => (
                        <div key={faq.q} className="svd-faq-elem">
                            <button
                                onClick={() => setOpen(open === i ? -1 : i)}
                                className="w-full flex items-center justify-between gap-6 py-6 text-left"
                                aria-expanded={open === i}
                            >
                                <span className="text-lg font-semibold text-[var(--black)]">{faq.q}</span>
                                <div className={`icon-chevron-down text-xl text-[var(--muted)] shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}></div>
                            </button>
                            <div className={`grid transition-all duration-300 ease-out ${open === i ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0'}`} style={{ overflow: 'hidden' }}>
                                <div className="min-h-0"><p className="text-[var(--muted)] leading-relaxed max-w-2xl">{faq.a}</p></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
