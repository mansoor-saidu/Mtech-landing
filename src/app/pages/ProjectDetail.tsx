import React, { useEffect } from 'react';
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react';
import { Link, useParams } from 'react-router';
import { projectsData } from '../data/projectsData';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projectsData.find(p => p.slug === slug);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <div className="mx-auto flex min-h-screen max-w-3xl items-center justify-center px-6 py-24">
          <div className="w-full rounded-2xl border border-border bg-card px-6 py-10 text-center sm:px-10 sm:py-12">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Case study unavailable
            </p>
            <h1 className="mt-4 font-serif text-4xl font-normal leading-tight tracking-[-0.03em] text-foreground sm:text-5xl">
              Page not found
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-foreground/75 sm:text-lg">
              The project you tried to open does not exist in the current index. Return to the project list to choose another case study.
            </p>
            <Link
              to="/projects"
              className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full border border-foreground/10 bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30"
            >
              Return to Index
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const projectIndex = projectsData.findIndex(p => p.slug === slug);
  const chapterNum = String(projectIndex + 1).padStart(2, '0');
  const sectionLinks = [
    { id: 'challenge', label: 'Challenge' },
    { id: 'solution', label: 'Solution' },
    { id: 'build', label: 'Build' },
  ];

  if (project.mobileImage) {
    sectionLinks.push({ id: 'mobile', label: 'Mobile' });
  }

  const summaryItems = [
    {
      label: 'Category',
      value: project.category,
    },
    {
      label: 'Coverage',
      value: project.mobileImage ? 'Desktop + mobile' : 'Desktop-first',
    },
    {
      label: 'Feature set',
      value: `${project.features.length} visible details`,
    },
  ];

  return (
    <article className="relative min-h-screen overflow-hidden bg-background text-foreground selection:bg-foreground selection:text-background dark:selection:bg-background dark:selection:text-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[36rem] bg-[radial-gradient(circle_at_top_left,rgba(15,23,42,0.08),transparent_34%),radial-gradient(circle_at_top_right,rgba(15,23,42,0.05),transparent_28%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_34%),radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent_28%)]"
      />

      <div className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 py-4">
            <Link
              to="/projects"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-foreground/10 bg-background px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-foreground hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Index</span>
            </Link>

            <div className="flex items-center gap-3">
              <span className="hidden rounded-full border border-foreground/10 bg-card px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-foreground/60 md:inline-flex">
                Chapter {chapterNum}
              </span>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-foreground/10 bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30"
                >
                  <span>Visit live site</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <main className="relative mx-auto max-w-7xl px-4 pb-24 pt-10 sm:px-6 lg:px-8 lg:pb-32 lg:pt-14">
        <section className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:items-start">
          <div className="space-y-7">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex min-h-10 items-center rounded-full border border-foreground/10 bg-card px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-foreground/60">
                {project.category}
              </span>
              <span className="inline-flex min-h-10 items-center rounded-full border border-foreground/10 bg-card px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-foreground/60">
                Ch. {chapterNum}
              </span>
              <span className="inline-flex min-h-10 items-center rounded-full border border-foreground/10 bg-card px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-foreground/60">
                {project.mobileImage ? 'Responsive case study' : 'Web case study'}
              </span>
            </div>

            <div className="space-y-5">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-foreground/50">
                Selected work
              </p>
              <h1 className="max-w-3xl font-serif text-4xl font-normal leading-[0.94] tracking-[-0.035em] [text-wrap:balance] sm:text-5xl lg:text-6xl xl:text-7xl">
                {project.title}
              </h1>
                <p className="max-w-2xl text-lg leading-8 text-foreground/75 sm:text-xl">
                {project.shortDescription}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-foreground/10 bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30"
                >
                  <span>Open live project</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
              <a
                href="#challenge"
                className="inline-flex min-h-11 items-center rounded-full border border-foreground/10 bg-background px-5 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-foreground hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30"
              >
                Read the story
              </a>
            </div>

            <nav aria-label="On-page sections" className="flex gap-2 overflow-x-auto pb-1">
              {sectionLinks.map(section => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="inline-flex min-h-11 shrink-0 items-center rounded-full border border-foreground/10 bg-card px-4 py-2 text-sm font-medium text-foreground/75 transition-colors hover:bg-foreground hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30"
                >
                  {section.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="relative lg:pt-2">
            <div className="rounded-2xl border border-border bg-card p-3">
              <div className="overflow-hidden rounded-xl border border-border bg-muted/30">
                <img
                  src={project.heroImage}
                  alt={`${project.title} desktop preview`}
                  className="aspect-[16/11] w-full object-cover object-top"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
              <div className="mt-3 flex items-center justify-between gap-3 text-[11px] font-medium uppercase tracking-[0.18em] text-foreground/50">
                <span>Desktop view</span>
                <span>{project.link ? 'Live project' : 'Case study'}</span>
              </div>
            </div>

            {project.mobileImage && (
              <div className="mt-4 rounded-2xl border border-border bg-card p-3 lg:absolute lg:-bottom-10 lg:right-4 lg:w-[44%] lg:max-w-[210px]">
                <div className="overflow-hidden rounded-xl border border-border bg-muted/30">
                  <img
                    src={project.mobileImage}
                    alt={`${project.title} mobile preview`}
                    className="aspect-[9/19] w-full object-cover object-top"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.18em] text-foreground/50">
                  Mobile view
                </p>
              </div>
            )}
          </div>
        </section>

        <section className="mt-8 grid gap-4 sm:grid-cols-3">
          {summaryItems.map(item => (
            <div key={item.label} className="border-t border-border/70 pt-4">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-foreground/45">
                {item.label}
              </p>
              <p className="mt-2 text-sm leading-6 text-foreground/80">
                {item.value}
              </p>
            </div>
          ))}
        </section>

        <section className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:gap-16">
          <div className="space-y-12">
            {project.problem && (
              <section id="challenge" className="scroll-mt-28 space-y-4">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-foreground/45">
                  Challenge
                </p>
                <h2 className="font-serif text-3xl font-normal leading-tight tracking-[-0.03em] sm:text-4xl">
                  What needed to change
                </h2>
                <p className="max-w-3xl text-base leading-8 text-foreground/80 sm:text-lg">
                  {project.problem}
                </p>
              </section>
            )}

            {project.solution && (
              <section id="solution" className="scroll-mt-28 space-y-4">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-foreground/45">
                  Solution
                </p>
                <h2 className="font-serif text-3xl font-normal leading-tight tracking-[-0.03em] sm:text-4xl">
                  How the experience was reframed
                </h2>
                <p className="max-w-3xl text-base leading-8 text-foreground/80 sm:text-lg">
                  {project.solution}
                </p>
              </section>
            )}

            <section id="build" className="scroll-mt-28 space-y-6">
              <div className="space-y-4">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-foreground/45">
                  Build
                </p>
                <h2 className="font-serif text-3xl font-normal leading-tight tracking-[-0.03em] sm:text-4xl">
                  The structure behind it
                </h2>
                <p className="max-w-3xl text-base leading-8 text-foreground/80 sm:text-lg">
                  {project.howItWasAchieved}
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
                <h3 className="text-sm font-medium uppercase tracking-[0.18em] text-foreground/45">
                  Capabilities
                </h3>
                <ul className="mt-4 divide-y divide-border/80">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex gap-3 py-4 first:pt-0 last:pb-0">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-foreground/55" />
                      <span className="text-sm leading-7 text-foreground/80 sm:text-[15px]">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {project.mobileImage && (
              <section id="mobile" className="scroll-mt-28 space-y-4">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-foreground/45">
                  Mobile
                </p>
                <h2 className="font-serif text-3xl font-normal leading-tight tracking-[-0.03em] sm:text-4xl">
                  Optimized for smaller screens
                </h2>
                <p className="max-w-3xl text-base leading-8 text-foreground/80 sm:text-lg">
                  The mobile presentation is designed for quick scanning, confident taps, and zero friction when the page is opened on the go.
                </p>
              </section>
            )}
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24">
            <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
              <h3 className="text-sm font-medium uppercase tracking-[0.18em] text-foreground/45">
                At a glance
              </h3>
              <dl className="mt-5 space-y-4">
                {summaryItems.map(item => (
                  <div key={item.label} className="border-b border-border/80 pb-4 last:border-b-0 last:pb-0">
                    <dt className="text-xs font-medium uppercase tracking-[0.18em] text-foreground/45">
                      {item.label}
                    </dt>
                    <dd className="mt-2 text-sm leading-6 text-foreground/80">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-card p-5 sm:p-6 transition-colors hover:bg-foreground hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30"
              >
                <div className="space-y-1">
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-foreground/45 group-hover:text-background/70">
                    Live publication
                  </p>
                  <p className="text-base leading-6 text-foreground/80 group-hover:text-background/90">
                    Open the finished experience in a new tab.
                  </p>
                </div>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-foreground/55 group-hover:text-background/90" />
              </a>
            )}
          </aside>
        </section>

        <section className="mt-16 lg:mt-20">
          <div className="rounded-2xl border border-border bg-card px-6 py-8 sm:px-8 sm:py-10">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl space-y-3">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-foreground/45">
                  Next step
                </p>
                <h2 className="font-serif text-3xl font-normal leading-tight tracking-[-0.03em] sm:text-4xl">
                  Ready to build something similar?
                </h2>
                <p className="text-base leading-8 text-foreground/80 sm:text-lg">
                  {project.ctaText || "Do you have an idea to build? Let's bring it to life with the same level of care and precision."}
                </p>
              </div>

              <a
                href="/#contact"
                onClick={(e) => {
                  if (window.location.pathname.startsWith('/projects/')) {
                    return;
                  }

                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-foreground/10 bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30"
              >
                Contact us
              </a>
            </div>
          </div>
        </section>
      </main>
    </article>
  );
}
