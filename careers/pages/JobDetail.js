function applyMailto(job) {
    const subject = encodeURIComponent(`Application: ${job.title}`);
    const body = encodeURIComponent(`Hi GUIRES team,\n\nI would like to apply for the ${job.title} role (${job.department}, ${job.location}).\n\nPlease find my resume attached.\n\nThanks,\n`);
    return `mailto:careers@guires.com?subject=${subject}&body=${body}`;
}

function JobDetailSection({ num, title, children }) {
    return (
        <div className="cw-jd-section tg-hairline pt-8 mb-14">
            <div className="flex items-baseline gap-5 mb-6">
                <span className="text-sm tabular-nums text-[var(--accent-secondary)]">{num}</span>
                <h2 className="text-[clamp(1.5rem,2.6vw,2.25rem)] font-medium tracking-[-0.03em]">{title}</h2>
            </div>
            <div className="lg:pl-10">{children}</div>
        </div>
    );
}

function JobDetailList({ items }) {
    return (
        <ul>
            {items.map((item, i) => (
                <li key={i} className="flex items-start gap-4 border-t border-[#01012014] first:border-t-0 py-3 text-[var(--muted)] leading-relaxed">
                    <span className="w-2 h-2 mt-2.5 bg-[var(--accent)] shrink-0"></span>
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    );
}

function JobSummaryCard({ job, sticky }) {
    const rows = [
        ['Department', job.department],
        ['Location', job.location],
        ['Employment Type', EMPLOYMENT_TYPES[job.type]],
        ['Experience Level', EXPERIENCE_LEVELS[job.experience]]
    ];
    return (
        <div className={`bg-[var(--cw-surface-2)] p-7 ${sticky ? 'lg:sticky lg:top-28' : ''}`}>
            <h3 className="tg-eyebrow mb-6">Job Summary</h3>
            <dl className="mb-8">
                {rows.map(([label, value]) => (
                    <div key={label} className="tg-hairline py-4">
                        <dt className="text-xs text-[var(--muted)] mb-1">{label}</dt>
                        <dd className="text-lg font-medium tracking-[-0.01em]">{value}</dd>
                    </div>
                ))}
            </dl>
            <a href={applyMailto(job)} className="tg-btn tg-btn--primary w-full">
                Apply Now <div className="icon-arrow-right"></div>
            </a>
        </div>
    );
}

function JobDetailPage({ slug }) {
    const job = JOBS_DATA.find((j) => j.slug === slug);
    const ref = React.useRef(null);

    React.useEffect(() => {
        if (!job || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo('.cw-jd-hero-elem', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.08, ease: 'power3.out' });
        gsap.fromTo(ref.current.querySelectorAll('.cw-jd-section'),
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power2.out', scrollTrigger: { trigger: ref.current, start: 'top 85%' } }
        );
    }, []);

    if (!job) {
        return (
            <section className="pt-40 pb-24 tg-container">
                <h1 className="tg-display !text-[clamp(2.5rem,6vw,5rem)] mb-6">Role not found</h1>
                <p className="text-[var(--muted)] mb-8 max-w-md">This role may have closed or the link is incorrect.</p>
                <a href={`${CAREERS_BASE}/jobs/`} className="tg-btn tg-btn--primary">
                    View All Jobs <div className="icon-arrow-right"></div>
                </a>
            </section>
        );
    }

    const meta = [job.location, EMPLOYMENT_TYPES[job.type], EXPERIENCE_LEVELS[job.experience]];

    return (
        <React.Fragment>
            <section className="tg-on-ink relative overflow-hidden text-white pt-32 pb-14 lg:pt-44 lg:pb-20" style={{ background: 'var(--ink-navy)' }}>
                <div className="absolute inset-0 tg-grid-bg opacity-60 pointer-events-none" style={{ WebkitMaskImage: 'linear-gradient(180deg, transparent, #000 60%)', maskImage: 'linear-gradient(180deg, transparent, #000 60%)' }}></div>
                <div className="tg-container relative z-10">
                    <div className="cw-jd-hero-elem mb-12">
                        <a href={`${CAREERS_BASE}/jobs/`} className="tg-link text-sm text-white/80 hover:text-white">
                            <span className="icon-arrow-left text-xs"></span> Back to Open Positions
                        </a>
                    </div>
                    <div className="cw-jd-hero-elem tg-eyebrow mb-6">{job.department}</div>
                    <h1 className="cw-jd-hero-elem tg-display !text-[clamp(2.5rem,6vw,5.5rem)] mb-10 max-w-[18ch]">{job.title}</h1>
                    <ul className="cw-jd-hero-elem flex flex-wrap gap-x-8 gap-y-2 text-white/85 mb-8">
                        {meta.map((m) => <li key={m} className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[var(--accent-cyan)]"></span>{m}</li>)}
                    </ul>
                    <a href={applyMailto(job)} className="cw-jd-hero-elem lg:hidden tg-btn tg-btn--primary w-full">
                        Apply Now <div className="icon-arrow-right"></div>
                    </a>
                </div>
            </section>

            <section ref={ref} className="py-16 lg:py-24 bg-white">
                <div className="tg-container grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                    <div className="lg:col-span-8">
                        <JobDetailSection num="01" title="About the Role">
                            <p className="text-[var(--muted)] leading-relaxed text-lg">{job.aboutRole}</p>
                        </JobDetailSection>

                        <JobDetailSection num="02" title="What You'll Do">
                            <JobDetailList items={job.whatYoullDo} />
                        </JobDetailSection>

                        <JobDetailSection num="03" title="Requirements">
                            <JobDetailList items={job.requirements} />
                        </JobDetailSection>

                        <JobDetailSection num="04" title="Good to Have">
                            <JobDetailList items={job.goodToHave} />
                        </JobDetailSection>

                        <JobDetailSection num="05" title="What We Offer">
                            <JobDetailList items={job.whatWeOffer} />
                        </JobDetailSection>

                        <JobDetailSection num="06" title="Application Process">
                            <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
                                {JOB_APPLICATION_PROCESS.map((s) => (
                                    <li key={s.step} className="tg-hairline py-5">
                                        <div className="text-sm tabular-nums text-[var(--accent-secondary)] mb-3">Step {s.step}</div>
                                        <h4 className="text-lg font-medium tracking-[-0.02em] mb-1.5">{s.title}</h4>
                                        <p className="text-sm text-[var(--muted)] leading-relaxed">{s.desc}</p>
                                    </li>
                                ))}
                            </ol>
                        </JobDetailSection>

                        <a href={applyMailto(job)} className="lg:hidden tg-btn tg-btn--primary w-full">
                            Apply Now <div className="icon-arrow-right"></div>
                        </a>
                    </div>

                    <div className="hidden lg:block lg:col-span-4">
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
