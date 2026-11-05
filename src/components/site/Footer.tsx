import { Link } from "@tanstack/react-router";
import { courses, site, whatsappHref } from "@/data/site";
import { Logo } from "./bits";

export function Footer() {
  const { email, phone, city } = site.contact;
  const wa = whatsappHref();
  const hasContact = email || phone || city || wa;
  return (
    <footer className="border-t mt-12">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr_auto]">
        <div className="max-w-xs">
          <Logo />
          <p className="mt-4 text-sm text-muted-ink">{site.description}</p>
        </div>
        <FooterGroup title="Academy">
          <Link to="/courses">Courses</Link>
          <Link to="/about">About us</Link>
          <Link to="/faqs">FAQs</Link>
          <Link to="/contact">Contact</Link>
        </FooterGroup>
        <FooterGroup title="Courses">
          {courses.map((c) => (
            <Link key={c.slug} to="/courses/$slug" params={{ slug: c.slug }}>
              {c.title}
            </Link>
          ))}
        </FooterGroup>
        {hasContact ? (
          <FooterGroup title="Contact">
            {email && <a href={`mailto:${email}`}>{email}</a>}
            {phone && <a href={`tel:${phone}`}>{phone}</a>}
            {wa && <a href={wa} target="_blank" rel="noreferrer">WhatsApp</a>}
            {city && <span>{city}</span>}
          </FooterGroup>
        ) : null}
        {site.social.length > 0 && (
          <FooterGroup title="Follow">
            {site.social.map((s) => (
              <a key={s.href} href={s.href} target="_blank" rel="noreferrer">{s.label}</a>
            ))}
          </FooterGroup>
        )}
      </div>
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 border-t px-4 py-6 text-sm text-muted-ink sm:px-6">
        <p>© {new Date().getFullYear()} {site.name}. {site.tagline}</p>
        <div className="flex gap-5">
          <Link to="/privacy" className="hover:text-blue-ink hover:underline">Privacy policy</Link>
          <Link to="/terms" className="hover:text-blue-ink hover:underline">Terms and conditions</Link>
        </div>
      </div>
    </footer>
  );
}

function FooterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-sm font-bold">{title}</h2>
      <div className="mt-4 flex flex-col gap-2.5 text-sm text-muted-ink [&_a:hover]:text-blue-ink [&_a:hover]:underline">
        {children}
      </div>
    </div>
  );
}
