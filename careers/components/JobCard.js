function JobCard({ job }) {
    const href = `${CAREERS_BASE}/jobs/${job.slug}/`;
    return (
        <a
            href={href}
            className="cw-job-card group block rounded-2xl bg-[var(--cw-surface)] border border-[var(--cw-border)] p-6 lg:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[#0C4DA266]"
        >
            <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                    <div className="text-xs font-bold tracking-wider text-[var(--cw-accent)] uppercase mb-2">{job.department}</div>
                    <h3 className="text-xl font-bold text-[var(--cw-text)] leading-snug">{job.title}</h3>
                </div>
                <div className="shrink-0 w-10 h-10 rounded-full border border-[var(--cw-border)] flex items-center justify-center text-[var(--cw-text)] transition-all duration-300 group-hover:bg-[var(--cw-accent)] group-hover:text-white group-hover:border-[var(--cw-accent)] group-hover:translate-x-1">
                    <div className="icon-arrow-right text-sm"></div>
                </div>
            </div>

            <p className="text-sm text-[var(--cw-muted)] leading-relaxed mb-5">{job.summary}</p>

            <div className="flex flex-wrap items-center gap-2 mb-5">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--cw-surface-2)] px-3 py-1.5 text-xs font-semibold text-[var(--cw-text)]">
                    <div className="icon-map-pin text-[11px]"></div> {job.location}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--cw-surface-2)] px-3 py-1.5 text-xs font-semibold text-[var(--cw-text)]">
                    <div className="icon-briefcase text-[11px]"></div> {EMPLOYMENT_TYPES[job.type]}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--cw-surface-2)] px-3 py-1.5 text-xs font-semibold text-[var(--cw-text)]">
                    <div className="icon-layers text-[11px]"></div> {EXPERIENCE_LEVELS[job.experience]}
                </span>
            </div>

            <div className="flex items-center gap-2 text-sm font-semibold text-[var(--cw-accent)]">
                View Role <div className="icon-arrow-right text-xs transition-transform duration-300 group-hover:translate-x-1"></div>
            </div>
        </a>
    );
}
