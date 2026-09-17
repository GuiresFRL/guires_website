function applyMailto(job) {
    const subject = encodeURIComponent(`Application: ${job.title}`);
    const body = encodeURIComponent(`Hi GUIRES team,\n\nI would like to apply for the ${job.title} role (${job.department}, ${job.location}).\n\nPlease find my resume attached.\n\nThanks,\n`);
    return `mailto:careers@guires.com?subject=${subject}&body=${body}`;
}

function JobDetailSection({ title, children }) {
    return (
        <div className="cw-jd-section mb-12">
            <h2 className="text-2xl font-bold text-[var(--cw-text)] mb-5">{title}</h2>
            {children}
        </div>
    );
}

function JobDetailList({ items }) {
    return (
        <ul className="space-y-3">
            {items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[var(--cw-muted)] leading-relaxed">
                    <div className="icon-check text-[var(--cw-accent)] mt-1 shrink-0"></div>
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    );
}

function JobSummaryCard({ job, sticky }) {
    return (
        <div className={`rounded-2xl border border-[var(--cw-border)] bg-[var(--cw-surface)] p-6 lg:p-7 ${sticky ? 'lg:sticky lg:top-28' : ''}`}>
            <h3 className="text-sm font-bold tracking-wider text-[var(--cw-muted)] uppercase mb-5">Job Summary</h3>
            <dl className="space-y-4 mb-7">
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#0C4DA21A] text-[var(--cw-accent)] flex items-center justify-center shrink-0"><div className="icon-building-2 text-sm"></div></div>
                    <div><dt className="text-xs text-[var(--cw-muted)]">Department</dt><dd className="text-sm font-semibold text-[var(--cw-text)]">{job.department}</dd></div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#0C4DA21A] text-[var(--cw-accent)] flex items-center justify-center shrink-0"><div className="icon-map-pin text-sm"></div></div>
                    <div><dt className="text-xs text-[var(--cw-muted)]">Location</dt><dd className="text-sm font-semibold text-[var(--cw-text)]">{job.location}</dd></div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#0C4DA21A] text-[var(--cw-accent)] flex items-center justify-center shrink-0"><div className="icon-briefcase text-sm"></div></div>
                    <div><dt className="text-xs text-[var(--cw-muted)]">Employment Type</dt><dd className="text-sm font-semibold text-[var(--cw-text)]">{EMPLOYMENT_TYPES[job.type]}</dd></div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#0C4DA21A] text-[var(--cw-accent)] flex items-center justify-center shrink-0"><div className="icon-layers text-sm"></div></div>
                    <div><dt className="text-xs text-[var(--cw-muted)]">Experience Level</dt><dd className="text-sm font-semibold text-[var(--cw-text)]">{EXPERIENCE_LEVELS[job.experience]}</dd></div>
                </div>
            </dl>
            <a
                href={applyMailto(job)}
                className="cw-btn-arrow w-full inline-flex items-center justify-center gap-2 rounded-full bg-[var(--cw-accent)] text-white text-sm font-semibold px-6 py-3.5 hover:bg-[var(--cw-accent-dark)] transition-colors duration-300"
            >
                Apply Now <div className="icon-arrow-right transition-transform duration-300"></div>
            </a>
        </div>
    );
}

function JobDetailPage({ slug }) {
    const job = JOBS_DATA.find((j) => j.slug === slug);
    const ref = React.useRef(null);

    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo('.cw-jd-hero-elem', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.08, ease: 'power3.out' });
        gsap.fromTo(ref.current.querySelectorAll('.cw-jd-section'),
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power2.out', scrollTrigger: { trigger: ref.current, start: 'top 80%' } }
        );
    }, []);

    if (!job) {
        return (
            <section className="pt-40 pb-24 text-center max-w-xl mx-auto px-6">
                <h1 className="text-3xl font-extrabold text-[var(--cw-text)] mb-4">Role not found</h1>
                <p className="text-[var(--cw-muted)] mb-8">This role may have closed or the link is incorrect.</p>
                <a href={`${CAREERS_BASE}/jobs/`} className="inline-flex items-center gap-2 rounded-full bg-[var(--cw-accent)] text-white text-sm font-semibold px-6 py-3">
                    View All Jobs <div className="icon-arrow-right"></div>
                </a>
            </section>
        );
    }

    return (
        <React.Fragment>
            <section className="pt-32 pb-10 lg:pt-40 lg:pb-14 bg-[var(--cw-surface-2)] border-b border-[var(--cw-border)]">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <a href={`${CAREERS_BASE}/jobs/`} className="cw-jd-hero-elem inline-flex items-center gap-2 text-sm font-semibold text-[var(--cw-muted)] hover:text-[var(--cw-accent)] transition-colors mb-6">
                        <div className="icon-arrow-left text-xs"></div> Back to Open Positions
                    </a>
                    <div className="cw-jd-hero-elem text-xs font-bold tracking-[0.2em] text-[var(--cw-accent)] uppercase mb-4">{job.department}</div>
                    <h1 className="cw-jd-hero-elem text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--cw-text)] mb-6 max-w-3xl">{job.title}</h1>
                    <div className="cw-jd-hero-elem flex flex-wrap items-center gap-3 mb-8">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--cw-surface)] border border-[var(--cw-border)] px-3.5 py-2 text-xs font-semibold text-[var(--cw-text)]"><div className="icon-map-pin text-[11px]"></div> {job.location}</span>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--cw-surface)] border border-[var(--cw-border)] px-3.5 py-2 text-xs font-semibold text-[var(--cw-text)]"><div className="icon-briefcase text-[11px]"></div> {EMPLOYMENT_TYPES[job.type]}</span>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--cw-surface)] border border-[var(--cw-border)] px-3.5 py-2 text-xs font-semibold text-[var(--cw-text)]"><div className="icon-layers text-[11px]"></div> {EXPERIENCE_LEVELS[job.experience]}</span>
                    </div>
                    {/* Mobile: Apply Now near top */}
                    <a
                        href={applyMailto(job)}
                        className="cw-jd-hero-elem lg:hidden cw-btn-arrow w-full inline-flex items-center justify-center gap-2 rounded-full bg-[var(--cw-accent)] text-white text-sm font-semibold px-6 py-3.5 hover:bg-[var(--cw-accent-dark)] transition-colors duration-300"
                    >
                        Apply Now <div className="icon-arrow-right transition-transform duration-300"></div>
                    </a>
                </div>
            </section>

            <section ref={ref} className="py-16 lg:py-24 bg-[var(--cw-bg)]">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
                    <div className="lg:col-span-2">
                        <JobDetailSection title="About the Role">
                            <p className="text-[var(--cw-muted)] leading-relaxed">{job.aboutRole}</p>
                        </JobDetailSection>

                        <JobDetailSection title="What You'll Do">
                            <JobDetailList items={job.whatYoullDo} />
                        </JobDetailSection>

                        <JobDetailSection title="Requirements">
                            <JobDetailList items={job.requirements} />
                        </JobDetailSection>

                        <JobDetailSection title="Good to Have">
                            <JobDetailList items={job.goodToHave} />
                        </JobDetailSection>

                        <JobDetailSection title="What We Offer">
                            <JobDetailList items={job.whatWeOffer} />
                        </JobDetailSection>

                        <JobDetailSection title="Application Process">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {JOB_APPLICATION_PROCESS.map((s) => (
                                    <div key={s.step} className="rounded-xl border border-[var(--cw-border)] p-5">
                                        <div className="w-8 h-8 rounded-full bg-[var(--cw-accent)] text-white text-sm font-bold flex items-center justify-center mb-3">{s.step}</div>
                                        <h4 className="text-sm font-bold text-[var(--cw-text)] mb-1.5">{s.title}</h4>
                                        <p className="text-xs text-[var(--cw-muted)] leading-relaxed">{s.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </JobDetailSection>

                        {/* Mobile: Apply Now near bottom */}
                        <a
                            href={applyMailto(job)}
                            className="lg:hidden cw-btn-arrow w-full inline-flex items-center justify-center gap-2 rounded-full bg-[var(--cw-accent)] text-white text-sm font-semibold px-6 py-3.5 hover:bg-[var(--cw-accent-dark)] transition-colors duration-300"
                        >
                            Apply Now <div className="icon-arrow-right transition-transform duration-300"></div>
                        </a>
                    </div>

                    <div className="hidden lg:block">
                        <JobSummaryCard job={job} sticky />
                    </div>
                </div>
            </section>

            <CareersCTA
                eyebrow="Take the Next Step"
                heading="Ready to Join Us?"
                subtext={`Apply for the ${job.title} role today — we’d love to hear from you.`}
                buttonLabel="Apply Now"
                buttonHref={applyMailto(job)}
            />
        </React.Fragment>
    );
}
