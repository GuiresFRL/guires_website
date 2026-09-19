function ContactPage() {
    const options = [
        { title: 'Business Enquiry', desc: 'General questions about GUIRES and our capabilities.' },
        { title: 'Sales Enquiry', desc: 'Talk to our team about a new engagement.' },
        { title: 'Request a Quote', desc: 'Get pricing for a specific project or scope of work.' },
        { title: 'Request a Consultation', desc: 'Schedule time with a subject-matter expert.' },
        { title: 'Support', desc: 'Support for an existing GUIRES engagement.' },
        { title: 'Global Locations', desc: 'Find where GUIRES operates around the world.' }
    ];

    React.useEffect(() => {
        tgReveal('.contact-card');
    }, []);

    return (
        <React.Fragment>
            <section className="tg-band tg-band--white tg-section">
                <div className="tg-container">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-24 items-end">
                        <div className="lg:col-span-8">
                            <div className="tg-eyebrow mb-6">How can we help</div>
                            <h2 className="tg-h2">Choose the conversation you need</h2>
                        </div>
                        <p className="lg:col-span-4 tg-lead text-[var(--muted)]">Pick a topic and it opens an email to our team with the subject already filled in.</p>
                    </div>

                    <div id="contact-grid" className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16">
                        {options.map((opt, i) => (
                            <a
                                key={opt.title}
                                href={`mailto:support@guires.com?subject=${encodeURIComponent(opt.title)}`}
                                className="contact-card tg-index-row group grid grid-cols-12 gap-x-4 items-baseline py-7"
                            >
                                <span className="col-span-2 text-sm font-medium text-[var(--muted)] tabular-nums">0{i + 1}</span>
                                <div className="col-span-8">
                                    <h3 className="tg-index-title text-[clamp(1.5rem,2.4vw,2.125rem)] font-medium tracking-[-0.03em] leading-tight mb-2">{opt.title}</h3>
                                    <p className="text-[var(--muted)] leading-relaxed">{opt.desc}</p>
                                </div>
                                <span className="tg-index-arrow col-span-2 text-right icon-arrow-right text-xl"></span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <section className="tg-band tg-band--accent tg-section overflow-hidden">
                <div className="tg-container grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
                    <h2 className="lg:col-span-8 tg-display !text-[clamp(2.75rem,7vw,6.5rem)] max-w-[14ch]">Let&rsquo;s start a conversation.</h2>
                    <div className="lg:col-span-4">
                        <p className="tg-lead text-white/90 mb-8">Tell us about your challenge, idea or opportunity and our team will be in touch.</p>
                        <a href="mailto:support@guires.com" className="tg-btn tg-btn--light !py-5 !px-8">Email Us <div className="icon-arrow-right"></div></a>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}
