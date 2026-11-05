import { useState } from "react";
import { X } from "lucide-react";
import { site } from "@/data/site";

export function AnnouncementBar() {
  const [hidden, setHidden] = useState(false);
  const { text, href } = site.announcement;
  if (!text || hidden) return null;
  return (
    <div className="bg-navy text-amber">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2 text-sm sm:px-6">
        {href ? <a href={href} className="underline">{text}</a> : <p>{text}</p>}
        <button type="button" aria-label="Dismiss announcement" onClick={() => setHidden(true)} className="rounded-control p-1">
          <X className="h-4 w-4" aria-hidden />
        </button>
      </div>
    </div>
  );
}
