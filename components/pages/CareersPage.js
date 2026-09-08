function CareersPage() {
    const roleCategories = [
        { name: 'Research', desc: 'Study design, execution and analysis across research disciplines.' },
        { name: 'Data & Analytics', desc: 'Data science, engineering and analytics for research and operations.' },
        { name: 'Regulatory', desc: 'Regulatory affairs and pharmacovigilance across global markets.' },
        { name: 'Communications', desc: 'Scientific writing, publications and brand communication.' },
        { name: 'Operations', desc: 'Client engagement, quality and internal operations.' }
    ];

    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.utils.toArray('.reveal-el').forEach((elem) => {
            gsap.fromTo(elem,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: elem, start: 'top 85%' } }
            );
        });
    }, []);

    return (
        <React.Fragment>
            <section className="py-24 border-b border-black/5">
                <div className="max-w-5xl mx-auto px-6 lg:px-12">
                    <h2 className="reveal-el text-sm font-bold tracking-wider text-[var(--accent)] uppercase mb-6">Why GUIRES</h2>
                    <p className="reveal-el text-2xl lg:text-3xl font-medium leading-relaxed text-gray-800">
                        We work at the intersection of research, data and science &mdash; solving problems that genuinely matter for healthcare and life sciences organizations. Our people bring deep domain expertise and a shared commitment to rigor, curiosity and impact.
                    </p>
                </div>
            </section>

            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <h2 className="reveal-el text-4xl font-bold mb-4">Explore Opportunities</h2>
                    <p className="reveal-el text-lg text-gray-600 mb-16 max-w-2xl">Current openings are listed by team. Reach out via Contact Us to learn more about opportunities at GUIRES.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {roleCategories.map((role) => (
                            <div key={role.name} className="reveal-el border-t border-black/10 pt-6">
                                <h3 className="text-xl font-semibold mb-3">{role.name}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{role.desc}</p>
                            </div>
                        ))}
                    </div>
                    <a href="/contact-us.html" className="reveal-el btn-primary mt-16 inline-flex">
                        Get in Touch <div className="icon-arrow-right"></div>
                    </a>
                </div>
            </section>
        </React.Fragment>
    );
}
