import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { useRef } from "react";
import { CONFIRMED_PER_BATCH, courses, getCourse, site, whatsappHref, type Course } from "@/data/site";
import { useReveal } from "@/hooks/use-reveal";
import { BracketList, Crumbs, PriceBlock, Section } from "@/components/site/bits";
import { ButtonLink } from "@/components/site/Button";
import { CourseThumb } from "@/components/site/CourseCard";
import { CourseRoadmap } from "@/components/course/CourseRoadmap";

export const Route = createFileRoute("/courses/$slug")({
  loader: ({ params }) => {
    const course = getCourse(params.slug);
    if (!course) throw notFound();
    return { course };
  },
  head: ({ loaderData }) => {
    const c = loaderData?.course;
    if (!c) return { meta: [{ title: "Course not found | Rare Skill Academy" }, { name: "robots", content: "noindex" }] };
    const title = `${c.title} course | Rare Skill Academy`;
    return {
      meta: [
        { title },
        { name: "description", content: c.description },
        { property: "og:title", content: title },
        { property: "og:description", content: c.summary },
      ],
    };
  },
  component: CoursePage,
});

function CoursePage() {
  const { course } = Route.useLoaderData();
  const ref = useRef<HTMLDivElement>(null);
  useReveal(ref);
  const other = courses.find((c) => c.slug !== course.slug)!;
  const wa = whatsappHref();

  return (
    <div ref={ref}>
      <header className="mx-auto grid max-w-6xl gap-10 px-4 pt-10 pb-6 sm:px-6 md:pt-16 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <Crumbs items={[{ label: "Home", to: "/" }, { label: "Courses", to: "/courses" }, { label: course.title }]} />
          <h1 className="text-display mt-6">{course.title}</h1>
          <p className="text-lead mt-5 max-w-xl text-muted-ink">{course.description}</p>
          <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm">
            {[["Level", course.level], ["Duration", course.duration], ["Language", course.language]].map(([k, v]) => (
              <div key={k}><dt className="text-muted-ink">{k}</dt><dd className="font-semibold">{v}</dd></div>
            ))}
          </dl>
          <ButtonLink to="/enroll" search={{ course: course.slug }} size="lg" className="mt-8">Enroll in {course.title}</ButtonLink>
        </div>
        <CourseThumb course={course} />
      </header>

      <Section tight label="Overview">
        <div className="grid gap-8 md:grid-cols-3">
          {[["Who it is for", course.forWhom], ["What is taught", course.whatTaught], ["What you can do afterwards", course.afterwards]].map(([k, v]) => (
            <div key={k} data-reveal>
              <h2 className="text-h3">{k}</h2>
              <p className="mt-3 text-muted-ink">{v}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tight label="Learning outcomes" className="border-y">
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
          <h2 data-reveal className="text-h2">What you will learn</h2>
          <div data-reveal>
            <BracketList items={course.outcomes} className="sm:grid-cols-2" />
            <p className="mt-6 text-sm text-muted-ink">Final topics and technologies follow the academy's approved curriculum.</p>
          </div>
        </div>
      </Section>

      <CourseRoadmap course={course} />

      <Section tight label="Structure and benefits">
        <div className="grid gap-12 md:grid-cols-2">
          <Structure course={course} wa={wa} />
          <div data-reveal>
            <h2 className="text-h3">What you get</h2>
            <BracketList items={site.benefits} className="mt-5" />
          </div>
        </div>
      </Section>

      <Section tight label="Pricing">
        <div data-reveal className="theme-t grid gap-6 rounded-card bg-surface-hi p-6 clay-raised sm:p-10 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="text-h3">Price</h2>
            <div className="mt-3"><PriceBlock price={course.price} discountPrice={course.discountPrice} size="lg" /></div>
            {site.offer.endDate && <p className="mt-2 text-sm text-muted-ink">Offer ends {site.offer.endDate}.</p>}
          </div>
          <ButtonLink to="/enroll" search={{ course: course.slug }} size="lg">Enroll in {course.title}</ButtonLink>
        </div>
      </Section>

      <Section tight label="Enrollment">
        <div className="grid gap-10 md:grid-cols-2">
          <div data-reveal>
            <h2 className="text-h3">How enrollment works</h2>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-muted-ink">
              <li>Fill in the enrollment form for this course.</li>
              <li>The academy contacts you with payment details.</li>
              <li>After payment you get access to the student portal.</li>
            </ol>
          </div>
          <div data-reveal>
            <h2 className="text-h3">Payment</h2>
            <p className="mt-4 text-muted-ink">
              {wa ? <>Message us on <a className="text-blue-ink underline" href={wa} target="_blank" rel="noreferrer">WhatsApp</a> for current payment details.</> : <>Contact us for current payment details through the <Link to="/contact" className="text-blue-ink underline">contact page</Link>.</>}
            </p>
            <p className="mt-6 text-muted-ink">Questions? Read the <Link to="/faqs" className="text-blue-ink underline">FAQs</Link>, or look at the <Link to="/courses/$slug" params={{ slug: other.slug }} className="text-blue-ink underline">{other.title} course</Link>.</p>
          </div>
        </div>
      </Section>
    </div>
  );
}

function Structure({ course, wa }: { course: Course; wa: string }) {
  return (
    <div data-reveal>
      <h2 className="text-h3">Course structure</h2>
      <dl className="mt-5 divide-y border-y">
        {course.structure.map((s) => (
          <div key={s.label} className="flex justify-between gap-4 py-3">
            <dt className="text-muted-ink">{s.label}</dt>
            <dd className="text-right font-semibold">
              {s.value}
              {s.value === CONFIRMED_PER_BATCH && wa && <a href={wa} target="_blank" rel="noreferrer" className="ml-2 text-sm font-medium text-blue-ink underline">Ask on WhatsApp</a>}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
