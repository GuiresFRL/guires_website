function JobCard({ job }) {
    const href = `${CAREERS_BASE}/jobs/${job.slug}/`;
    return (
        <a
            href={href}
            className="cw-job-card tg-index-row group grid grid-cols-12 gap-x-4 gap-y-3 items-baseline py-7 lg:py-9"
        >
            <div className="col-span-12 lg:col-span-2 tg-eyebrow">{job.department}</div>
            <div className="col-span-12 lg:col-span-6">
                <h3 className="tg-index-title text-[clamp(1.5rem,2.6vw,2.25rem)] font-medium tracking-[-0.03em] leading-tight mb-3">{job.title}</h3>
                <p className="text-[var(--muted)] leading-relaxed max-w-xl">{job.summary}</p>
            </div>
            <ul className="col-span-10 lg:col-span-3 flex flex-wrap lg:flex-col gap-x-4 gap-y-1 text-sm text-[var(--ink)]">
                <li className="flex items-center gap-2"><span className="icon-map-pin text-xs text-[var(--accent-secondary)]"></span>{job.location}</li>
                <li className="flex items-center gap-2"><span className="icon-briefcase text-xs text-[var(--accent-secondary)]"></span>{EMPLOYMENT_TYPES[job.type]}</li>
                <li className="flex items-center gap-2"><span className="icon-layers text-xs text-[var(--accent-secondary)]"></span>{EXPERIENCE_LEVELS[job.experience]}</li>
            </ul>
            <div className="col-span-2 lg:col-span-1 text-right"><span className="tg-index-arrow icon-arrow-right text-2xl"></span></div>
        </a>
    );
}
