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
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo('.contact-card',
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: '#contact-grid', start: 'top 80%' } }
        );
    }, []);

    return (
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div id="contact-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                    {options.map((opt) => (
                        <div key={opt.title} className="contact-card border-t border-black/10 pt-6">
                            <h3 className="text-xl font-semibold mb-3">{opt.title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">{opt.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-gray-50 rounded-lg p-10 lg:p-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Let's start a conversation.</h2>
                        <p className="text-gray-600 max-w-lg">Tell us about your challenge, idea or opportunity and our team will be in touch.</p>
                    </div>
                    <a href="mailto:support@guires.com" className="btn-primary shrink-0">
                        Email Us <div className="icon-arrow-right"></div>
                    </a>
                </div>
            </div>
        </section>
    );
}
