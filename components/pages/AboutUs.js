function AboutUsPage() {
    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.utils.toArray('.reveal-el').forEach((elem) => {
            gsap.fromTo(elem,
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, duration: 1, ease: 'power2.out', scrollTrigger: { trigger: elem, start: 'top 85%' } }
            );
        });
    }, []);

    const overviewFacts = [
        { label: 'Focus', value: 'Research, Regulatory & Data' },
        { label: 'Industries', value: 'Healthcare & Life Sciences' },
        { label: 'Model', value: 'Global, Research-Led' },
        { label: 'Brands', value: '5 Specialist Brands' }
    ];

    const leadership = [
        { role: 'Chairman & CEO', desc: 'Sets the long-term vision and direction for GUIRES.' },
        { role: 'Executive Leadership', desc: 'Guides strategy across research, regulatory and client engagement.' },
        { role: 'Operations Leadership', desc: 'Oversees delivery quality, process and day-to-day operations.' },
        { role: 'Advisory Board', desc: 'Independent domain experts advising on scientific and industry direction.' }
    ];

    const values = [
        { name: 'Curiosity', desc: 'We ask the questions that lead to better research.' },
        { name: 'Integrity', desc: 'Rigor and honesty guide every study, dataset and report.' },
        { name: 'Innovation', desc: 'We bring new methods and technology to research challenges.' },
        { name: 'Collaboration', desc: 'We work as an extension of every client’s team.' },
        { name: 'Impact', desc: 'We measure success by the outcomes our work enables.' }
    ];

    const approachSteps = [
        { num: '01', title: 'Understand', desc: 'We start by understanding your research question, context and objectives.' },
        { num: '02', title: 'Design', desc: 'We design a rigorous, fit-for-purpose research or regulatory approach.' },
        { num: '03', title: 'Execute', desc: 'Our domain experts execute with quality controls at every stage.' },
        { num: '04', title: 'Deliver', desc: 'We deliver clear, actionable outcomes — from data to publication-ready results.' }
    ];

    const qualityPrinciples = [
        'Adherence to recognized research, regulatory and clinical guidelines',
        'Rigorous data quality, validation and review processes',
        'Confidentiality and data security by design',
        'Continuous internal process audits and improvement'
    ];

    const milestones = [
        { stage: 'Founded', desc: 'GUIRES was established to support research and regulatory excellence.' },
        { stage: 'Expanded Services', desc: 'Grew from research support into regulatory, biostatistics and communication.' },
        { stage: 'Global Expansion', desc: 'Extended delivery to clients and partners across multiple regions.' },
        { stage: 'Today', desc: 'A family of specialist brands serving healthcare and life sciences worldwide.' }
    ];

    return (
        <React.Fragment>
            <section id="company-overview" className="py-24 border-b border-black/5">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <h2 className="reveal-el text-sm font-bold tracking-wider text-[var(--accent)] uppercase mb-6">Company Overview</h2>
                    <p className="reveal-el text-2xl lg:text-3xl font-medium leading-relaxed text-gray-800 max-w-4xl mb-16">
                        GUIRES is a research and data analytics company supporting healthcare and life sciences organizations with research, regulatory, statistical and communication expertise.
                    </p>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {overviewFacts.map((f) => (
                            <div key={f.label} className="reveal-el border-t border-black/10 pt-4">
                                <div className="text-xs font-bold tracking-wider text-gray-400 uppercase mb-2">{f.label}</div>
                                <div className="text-lg font-semibold">{f.value}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="our-story" className="py-24 bg-gray-50 border-b border-black/5">
                <div className="max-w-5xl mx-auto px-6 lg:px-12">
                    <h2 className="reveal-el text-sm font-bold tracking-wider text-[var(--accent)] uppercase mb-6">Our Story</h2>
                    <p className="reveal-el text-2xl lg:text-3xl font-medium leading-relaxed text-gray-800">
                        GUIRES was built around a simple idea: that healthcare and life sciences organizations move faster and further when their research is rigorous, their data is trustworthy, and their science is communicated clearly. Today we support pharmaceutical, biotechnology, medical device and food science organizations across research, regulatory, statistical and communication disciplines &mdash; so our clients can focus on the outcomes that matter.
                    </p>
                </div>
            </section>

            <section id="vision-mission" className="py-24 border-b border-black/5">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="reveal-el">
                        <h3 className="text-sm font-bold tracking-wider text-gray-500 uppercase mb-6">Our Vision</h3>
                        <p className="text-2xl font-medium leading-relaxed">A world where rigorous research and human expertise combine to accelerate better health and scientific outcomes.</p>
                    </div>
                    <div className="reveal-el">
                        <h3 className="text-sm font-bold tracking-wider text-gray-500 uppercase mb-6">Our Mission</h3>
                        <p className="text-2xl font-medium leading-relaxed">To advance research, regulatory and scientific excellence for healthcare and life sciences organizations worldwide.</p>
                    </div>
                </div>
            </section>

            <section id="leadership" className="py-24 bg-gray-50 border-b border-black/5">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <h2 className="reveal-el text-4xl font-bold mb-4">Leadership</h2>
                    <p className="reveal-el text-lg text-gray-600 mb-16 max-w-2xl">Our leadership team brings decades of combined experience across research, regulatory affairs, biostatistics and healthcare communications.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                        {leadership.map((l) => (
                            <div key={l.role} className="reveal-el border-t border-black/10 pt-6">
                                <div className="text-3xl font-bold text-[var(--accent)] mb-4">&#9679;</div>
                                <h3 className="text-lg font-semibold mb-2">{l.role}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{l.desc}</p>
                            </div>
                        ))}
                    </div>
                    <a href="/about-us/meet-our-team.html" className="reveal-el inline-flex items-center gap-2 text-lg font-medium text-[var(--accent)] hover:gap-4 transition-all duration-300">
                        Meet Our Team <div className="icon-arrow-right"></div>
                    </a>
                </div>
            </section>

            <section id="values" className="py-24 border-b border-black/5">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <h2 className="reveal-el text-4xl font-bold mb-16">Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                        {values.map((val, i) => (
                            <div key={val.name} className="reveal-el border-t border-black/10 pt-6">
                                <span className="text-[var(--accent)] text-sm font-mono">{`0${i + 1}`}</span>
                                <h3 className="text-xl font-semibold mt-2 mb-3">{val.name}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="our-approach" className="py-24 bg-gray-50 border-b border-black/5">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <h2 className="reveal-el text-4xl font-bold mb-4">Our Approach</h2>
                    <p className="reveal-el text-lg text-gray-600 mb-16 max-w-2xl">A consistent, disciplined approach behind every engagement.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {approachSteps.map((s) => (
                            <div key={s.num} className="reveal-el border-t border-black/10 pt-6">
                                <div className="text-gray-400 text-sm mb-4 font-mono">{s.num}</div>
                                <h3 className="text-lg font-semibold mb-3">{s.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="quality-compliance" className="py-24 border-b border-black/5">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="reveal-el text-4xl font-bold mb-6">Quality &amp; Compliance</h2>
                        <p className="reveal-el text-lg text-gray-600 leading-relaxed">Quality is built into every stage of our work, from study design through final delivery.</p>
                    </div>
                    <ul className="flex flex-col gap-4">
                        {qualityPrinciples.map((p) => (
                            <li key={p} className="reveal-el flex items-start gap-4 text-lg text-gray-700">
                                <div className="icon-check text-[var(--accent)] mt-1 shrink-0"></div>
                                {p}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section id="awards" className="py-24 bg-gray-50 border-b border-black/5">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <h2 className="reveal-el text-4xl font-bold mb-4">Awards &amp; Recognition</h2>
                    <p className="reveal-el text-lg text-gray-600 mb-16 max-w-2xl">GUIRES's work is recognized across the research and healthcare communications industry.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="reveal-el border border-dashed border-black/15 rounded-lg p-8 text-center text-gray-400">
                                <div className="icon-award text-3xl mb-4"></div>
                                <p className="text-sm">Award / Recognition placeholder</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="associations" className="py-24 border-b border-black/5">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <h2 className="reveal-el text-4xl font-bold mb-4">Associations</h2>
                    <p className="reveal-el text-lg text-gray-600 mb-16 max-w-2xl">Industry associations and memberships GUIRES participates in.</p>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="reveal-el border border-dashed border-black/15 rounded-lg p-8 text-center text-gray-400">
                                <div className="icon-link text-3xl mb-4"></div>
                                <p className="text-sm">Association placeholder</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="global-presence" className="py-24 bg-gray-50 border-b border-black/5">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <h2 className="reveal-el text-4xl font-bold mb-6">Global Presence</h2>
                    <p className="reveal-el text-lg text-gray-600 mb-10 max-w-2xl">We support clients and research partners across multiple regions and markets.</p>
                    <div className="reveal-el flex flex-wrap gap-4">
                        {['North America', 'Europe', 'Asia-Pacific', 'Middle East'].map((region) => (
                            <span key={region} className="px-5 py-2 border border-black/10 rounded-full text-sm font-medium text-gray-700">{region}</span>
                        ))}
                    </div>
                </div>
            </section>

            <section id="milestones" className="py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <h2 className="reveal-el text-4xl font-bold mb-16">Milestones</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {milestones.map((m, i) => (
                            <div key={m.stage} className="reveal-el border-t border-black/10 pt-6">
                                <span className="text-[var(--accent)] text-sm font-mono">{`0${i + 1}`}</span>
                                <h3 className="text-xl font-semibold mt-2 mb-3">{m.stage}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{m.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}
