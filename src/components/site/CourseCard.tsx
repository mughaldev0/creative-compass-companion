import { Link } from "@tanstack/react-router";
import type { Course } from "@/data/site";
import { ButtonLink } from "./Button";
import { PriceBlock } from "./bits";

/** Built thumbnail from brand colours and the course name. No stock art. */
export function CourseThumb({ course }: { course: Course }) {
  const code = course.slug === "web-development" ? "</>" : "> prompt";
  return (
    <div className="relative flex aspect-[16/9] flex-col justify-between overflow-hidden rounded-control bg-navy p-5">
      <span className="font-display text-sm font-bold text-amber">{code}</span>
      <svg aria-hidden viewBox="0 0 300 120" className="absolute -right-6 bottom-0 h-28 w-auto" fill="none">
        <path d="M10 110 C 80 120, 220 100, 290 10" stroke="var(--brand-blue)" strokeWidth="3" strokeLinecap="round" />
      </svg>
      <span className="relative font-display text-2xl font-extrabold text-paper sm:text-3xl">{course.title}</span>
    </div>
  );
}

export function CourseCard({ course }: { course: Course }) {
  return (
    <article data-reveal className="theme-t flex flex-col rounded-card bg-surface-hi p-5 clay-raised sm:p-6">
      <CourseThumb course={course} />
      <h3 className="text-h3 mt-6">
        <Link to="/courses/$slug" params={{ slug: course.slug }} className="hover:text-blue-ink">
          {course.title}
        </Link>
      </h3>
      <p className="mt-2 text-muted-ink">{course.summary}</p>
      <dl className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm">
        <div className="flex gap-1.5"><dt className="text-muted-ink">Level</dt><dd className="font-semibold">{course.level}</dd></div>
        <div className="flex gap-1.5"><dt className="text-muted-ink">Duration</dt><dd className="font-semibold">{course.duration}</dd></div>
      </dl>
      <div className="mt-5"><PriceBlock price={course.price} discountPrice={course.discountPrice} /></div>
      <div className="mt-6 flex flex-wrap gap-3 pt-1">
        <ButtonLink to="/courses/$slug" params={{ slug: course.slug }} variant="secondary">View details</ButtonLink>
        <ButtonLink to="/enroll" search={{ course: course.slug }}>Enroll now</ButtonLink>
      </div>
    </article>
  );
}
