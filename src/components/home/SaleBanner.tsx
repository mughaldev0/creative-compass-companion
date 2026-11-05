import { courses, discountPercent, formatPKR, hasOffer, site } from "@/data/site";
import { ButtonLink } from "@/components/site/Button";

export function SaleBanner() {
  if (!hasOffer()) return null;
  const c = courses[0];
  if (!c) return null;
  const pct = discountPercent(c.price, c.discountPrice);
  const samePrice = courses.every((x) => x.price === c.price && x.discountPrice === c.discountPrice);
  return (
    <section aria-label="Current offer" className="px-3 sm:px-6">
      <div data-reveal className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 rounded-card bg-navy px-6 py-8 text-amber clay-raised md:flex-row md:items-center md:px-10">
        <div>
          <p className="font-display text-2xl font-extrabold sm:text-3xl">
            {pct}% off {samePrice ? "both courses" : c.title}
          </p>
          <p className="mt-2 text-base">
            <s className="opacity-80">{formatPKR(c.price)}</s> <span className="font-bold">now {formatPKR(c.discountPrice)}</span>
            {site.offer.endDate && <> until {new Date(site.offer.endDate).toLocaleDateString("en-PK", { dateStyle: "long" })}</>}
          </p>
        </div>
        <ButtonLink to="/enroll" size="lg">Enroll at {formatPKR(c.discountPrice)}</ButtonLink>
      </div>
    </section>
  );
}
