import { useState, type KeyboardEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { site } from "@/data/site";
import { SampleTag } from "@/components/site/bits";
import { cn } from "@/lib/utils";

/** Hidden entirely when there are no testimonials. */
export function Testimonials() {
  const list = site.testimonials;
  const [i, setI] = useState(0);
  if (list.length === 0) return null;
  const t = list[i];
  if (!t) return null;
  const go = (d: number) => setI((p) => (p + d + list.length) % list.length);
  const onKey = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") go(-1);
    if (e.key === "ArrowRight") go(1);
  };
  const initials = t.name.split(" ").map((w) => w[0]).join("").slice(0, 2);

  return (
    <section aria-labelledby="t-title" className="py-[72px]" onKeyDown={onKey}>
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 id="t-title" className="text-h2">What students say</h2>
        <figure aria-live="polite" className="mt-10">
          <blockquote className="font-display text-2xl font-bold leading-snug sm:text-3xl">"{t.quote}"</blockquote>
          <figcaption className="mt-6 flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy font-semibold text-amber">{initials}</span>
            <span><span className="font-semibold">{t.name}</span><span className="block text-sm text-muted-ink">{t.course}</span></span>
            {t.isSample && <SampleTag />}
          </figcaption>
        </figure>
        {list.length > 1 && (
          <div className="mt-8 flex items-center gap-4">
            <button type="button" aria-label="Previous testimonial" onClick={() => go(-1)} className="flex h-10 w-10 items-center justify-center rounded-control bg-surface-hi clay-raised-sm control"><ChevronLeft className="h-5 w-5" /></button>
            <button type="button" aria-label="Next testimonial" onClick={() => go(1)} className="flex h-10 w-10 items-center justify-center rounded-control bg-surface-hi clay-raised-sm control"><ChevronRight className="h-5 w-5" /></button>
            <div className="flex gap-2">
              {list.map((x, k) => (
                <button key={x.id} type="button" aria-label={`Show testimonial ${k + 1}`} aria-current={k === i} onClick={() => setI(k)} className={cn("h-3 w-3 rounded-full control", k === i ? "bg-blue-ink" : "bg-surface")} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
