function AboutUsPage() {
    React.useEffect(() => {
        tgReveal('.reveal-el');
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

    const regions = ['North America', 'Europe', 'Asia-Pacific', 'Middle East'];

    return (
        <React.Fragment>
            {/* Company overview */}
            <section id="company-overview" className="tg-band tg-band--white tg-section">
                <div className="tg-container">
                    <div className="reveal-el tg-eyebrow mb-8">Company Overview</div>
                    <p className="reveal-el text-[clamp(1.5rem,2.8vw,2.5rem)] font-medium tracking-[-0.03em] leading-[1.12] max-w-5xl mb-20">
                        GUIRES is a research and data analytics company supporting healthcare and life sciences organizations with research, regulatory, statistical and communication expertise.
                    </p>
                    <dl className="grid grid-cols-2 lg:grid-cols-4">
                        {overviewFacts.map((f, i) => (
                            <div key={f.label} className={`reveal-el tg-hairline pt-5 pb-8 ${i > 0 ? 'lg:pl-8' : ''} ${i % 2 === 1 ? 'pl-5 lg:pl-8' : 'pr-5'}`}>
                                <dt className="tg-eyebrow mb-4">{f.label}</dt>
                                <dd className="text-xl lg:text-2xl font-medium tracking-[-0.02em] leading-snug">{f.value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </section>

            {/* Our story */}
            <section id="our-story" className="tg-on-ink tg-band tg-band--ink tg-section overflow-hidden">
                <svg className="absolute -right-24 -bottom-32 w-[560px] h-[560px] pointer-events-none" viewBox="0 0 400 400" fill="none" aria-hidden="true">
                    <circle cx="200" cy="200" r="190" stroke="#74d4fc" strokeOpacity="0.22" strokeWidth="1.5" />
                    <circle cx="200" cy="200" r="140" stroke="#74d4fc" strokeOpacity="0.18" strokeWidth="1.5" />
                    <circle cx="200" cy="200" r="90" stroke="#b89dc0" strokeOpacity="0.3" strokeWidth="1.5" />
                    <path d="M200 110 A90 90 0 0 1 290 200 L200 200 Z" fill="#da2e0f" />
                </svg>
                <div className="tg-container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
                    <div className="reveal-el lg:col-span-3"><div className="tg-eyebrow">Our Story</div></div>
                    <p className="reveal-el lg:col-span-8 text-[clamp(1.4rem,2.5vw,2.25rem)] font-normal tracking-[-0.02em] leading-[1.28] text-white">
                        GUIRES was built around a simple idea: that healthcare and life sciences organizations move faster and further when their research is rigorous, their data is trustworthy, and their science is communicated clearly. Today we support pharmaceutical, biotechnology, medical device and food science organizations across research, regulatory, statistical and communication disciplines &mdash; so our clients can focus on the outcomes that matter.
                    </p>
                </div>
            </section>

            {/* Vision & mission */}
            <section id="vision-mission" className="grid grid-cols-1 md:grid-cols-2">
                <div className="reveal-el tg-band tg-band--lilac tg-section">
                    <div className="tg-container md:!pr-12">
                        <div className="tg-eyebrow !text-[var(--ink)] mb-8">Our Vision</div>
                        <p className="text-[clamp(1.5rem,2.6vw,2.4rem)] font-medium tracking-[-0.03em] leading-[1.18]">A world where rigorous research and human expertise combine to accelerate better health and scientific outcomes.</p>
                    </div>
                </div>
                <div className="reveal-el tg-band tg-band--accent tg-section">
                    <div className="tg-container md:!pl-12">
                        <div className="tg-eyebrow !text-white mb-8">Our Mission</div>
                        <p className="text-[clamp(1.5rem,2.6vw,2.4rem)] font-medium tracking-[-0.03em] leading-[1.18]">To advance research, regulatory and scientific excellence for healthcare and life sciences organizations worldwide.</p>
                    </div>
                </div>
            </section>

            {/* Leadership */}
            <section id="leadership" className="tg-band tg-band--soft tg-section">
                <div className="tg-container">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
                        <div className="lg:col-span-8">
                            <div className="reveal-el tg-eyebrow mb-6">People</div>
                            <h2 className="reveal-el tg-h2">Leadership</h2>
                        </div>
                        <p className="reveal-el lg:col-span-4 text-[var(--muted)] leading-relaxed">Our leadership team brings decades of combined experience across research, regulatory affairs, biostatistics and healthcare communications.</p>
                    </div>
                    <div className="mb-14">
                        {leadership.map((l, i) => (
                            <div key={l.role} className="reveal-el tg-index-row grid grid-cols-12 gap-x-4 items-baseline py-7">
                                <span className="col-span-2 lg:col-span-1 text-sm font-medium text-[var(--muted)] tabular-nums">0{i + 1}</span>
                                <h3 className="tg-index-title col-span-10 lg:col-span-5 text-[clamp(1.5rem,2.6vw,2.25rem)] font-medium tracking-[-0.03em] leading-tight">{l.role}</h3>
                                <p className="col-span-10 col-start-3 lg:col-start-auto lg:col-span-6 text-[var(--muted)] leading-relaxed mt-2 lg:mt-0">{l.desc}</p>
                            </div>
                        ))}
                    </div>
                    <a href="https://guiresfrl.github.io/guires_website/about-us/meet-our-team.html" className="reveal-el tg-btn tg-btn--primary">
                        Meet Our Team <div className="icon-arrow-right"></div>
                    </a>
                </div>
            </section>

            <Testimonials />

            {/* Values */}
            <section id="values" className="tg-band tg-band--white tg-section">
                <div className="tg-container">
                    <div className="reveal-el tg-eyebrow mb-6">What guides us</div>
                    <h2 className="reveal-el tg-h2 mb-20">Our Values</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-14">
                        {values.map((val, i) => (
                            <div key={val.name} className="reveal-el border-t-2 border-[var(--ink)] pt-6">
                                <div className="tg-num !text-[clamp(2.5rem,4vw,3.5rem)] mb-10" style={{ color: i === 0 ? 'var(--accent)' : 'var(--ink)' }}>{`0${i + 1}`}</div>
                                <h3 className="text-2xl font-medium tracking-[-0.02em] mb-3">{val.name}</h3>
                                <p className="text-[var(--muted)] leading-relaxed">{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Approach */}
            <section id="our-approach" className="tg-on-ink tg-band tg-band--ink tg-section">
                <div className="tg-container">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-end">
                        <div className="lg:col-span-8">
                            <div className="reveal-el tg-eyebrow mb-6">How we work</div>
                            <h2 className="reveal-el tg-h2">Our Approach</h2>
                        </div>
                        <p className="reveal-el lg:col-span-4 text-white/75 leading-relaxed">A consistent, disciplined approach behind every engagement.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                        {approachSteps.map((s) => (
                            <div key={s.num} className="reveal-el tg-hairline pt-6 pb-10 lg:pr-8">
                                <div className="tg-num text-[var(--accent-cyan)] mb-12">{s.num}</div>
                                <h3 className="text-2xl font-medium tracking-[-0.02em] mb-3">{s.title}</h3>
                                <p className="text-white/75 leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quality & compliance */}
            <section id="quality-compliance" className="tg-band tg-band--soft tg-section">
                <div className="tg-container grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                    <div className="lg:col-span-5">
                        <div className="reveal-el tg-eyebrow mb-6">Standards</div>
                        <h2 className="reveal-el tg-h2 !text-[clamp(2rem,4vw,3.5rem)] mb-6">Quality &amp; Compliance</h2>
                        <p className="reveal-el tg-lead text-[var(--muted)]">Quality is built into every stage of our work, from study design through final delivery.</p>
                    </div>
                    <ul className="lg:col-span-7">
                        {qualityPrinciples.map((p) => (
                            <li key={p} className="reveal-el tg-hairline flex items-start gap-5 py-6 text-xl lg:text-2xl font-normal tracking-[-0.02em] leading-snug">
                                <span className="w-2.5 h-2.5 mt-3 bg-[var(--accent)] shrink-0"></span>
                                {p}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Awards */}
            <section id="awards" className="tg-band tg-band--white tg-section">
                <div className="tg-container">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 items-end">
                        <h2 className="reveal-el tg-h2 !text-[clamp(2rem,4vw,3.5rem)] lg:col-span-8">Awards &amp; Recognition</h2>
                        <p className="reveal-el lg:col-span-4 text-[var(--muted)] leading-relaxed">GUIRES's work is recognized across the research and healthcare communications industry.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="reveal-el tg-tile-dashed p-8 min-h-[12rem] flex flex-col justify-between text-[var(--muted)]">
                                <span className="text-sm tabular-nums">0{i}</span>
                                <p className="text-lg">Award / Recognition placeholder</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Associations */}
            <section id="associations" className="tg-band tg-band--soft tg-section">
                <div className="tg-container">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 items-end">
                        <h2 className="reveal-el tg-h2 !text-[clamp(2rem,4vw,3.5rem)] lg:col-span-8">Associations</h2>
                        <p className="reveal-el lg:col-span-4 text-[var(--muted)] leading-relaxed">Industry associations and memberships GUIRES participates in.</p>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="reveal-el tg-tile-dashed p-8 min-h-[10rem] flex flex-col justify-between text-[var(--muted)]">
                                <span className="text-sm tabular-nums">0{i}</span>
                                <p>Association placeholder</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Global presence */}
            <section id="global-presence" className="tg-band tg-band--lilac tg-section">
                <div className="tg-container">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 items-end">
                        <h2 className="reveal-el tg-h2 lg:col-span-8">Global Presence</h2>
                        <p className="reveal-el lg:col-span-4 leading-relaxed text-[#010120CC]">We support clients and research partners across multiple regions and markets.</p>
                    </div>
                    <ul>
                        {regions.map((r, i) => (
                            <li key={r} className="reveal-el border-t border-[#01012040] last:border-b flex items-baseline gap-6 py-6">
                                <span className="text-sm tabular-nums w-8">0{i + 1}</span>
                                <span className="text-[clamp(1.75rem,4.4vw,4rem)] font-medium tracking-[-0.04em] leading-none">{r}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Milestones */}
            <section id="milestones" className="tg-band tg-band--white tg-section">
                <div className="tg-container">
                    <div className="reveal-el tg-eyebrow mb-6">Timeline</div>
                    <h2 className="reveal-el tg-h2 mb-16">Milestones</h2>
                    <ol>
                        {milestones.map((m, i) => (
                            <li key={m.stage} className="reveal-el tg-hairline grid grid-cols-12 gap-x-4 items-baseline py-8">
                                <span className="col-span-2 lg:col-span-1 tg-num !text-[clamp(1.5rem,2.4vw,2.25rem)] text-[var(--accent-secondary)]">{`0${i + 1}`}</span>
                                <h3 className="col-span-10 lg:col-span-5 text-[clamp(1.5rem,2.6vw,2.25rem)] font-medium tracking-[-0.03em] leading-tight">{m.stage}</h3>
                                <p className="col-span-10 col-start-3 lg:col-start-auto lg:col-span-6 text-[var(--muted)] leading-relaxed mt-2 lg:mt-0">{m.desc}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            <ContactCTA />
        </React.Fragment>
    );
}
