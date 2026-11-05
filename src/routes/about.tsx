import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/data/site";
import { BracketList, PageHeader, Section } from "@/components/site/bits";
import { ButtonLink } from "@/components/site/Button";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Rare Skill Academy" },
      { name: "description", content: "How Rare Skill Academy teaches: practical coding, real projects and instructor feedback." },
      { property: "og:title", content: "About Rare Skill Academy" },
      { property: "og:description", content: "Practical coding, real projects and instructor feedback." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      <PageHeader title={`About ${site.name}`} intro={`${site.tagline} That is the whole approach.`} crumbs={[{ label: "Home", to: "/" }, { label: "About" }]} />
      <Section tight>
        <div className="grid max-w-4xl gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-h3">Our story</h2>
            {/* TODO(owner): replace with the academy's real story. */}
            <p className="mt-3 text-muted-ink">Rare Skill Academy was set up to teach coding the practical way. The full story will be added by the academy.</p>
          </div>
          <div>
            <h2 className="text-h3">Mission and vision</h2>
            <p className="mt-3 text-muted-ink">Help learners gain coding skills they can use, by building real projects with guidance and feedback.</p>
          </div>
          <div>
            <h2 className="text-h3">Teaching approach</h2>
            <p className="mt-3 text-muted-ink">Classes, assignments and a final project, with each student's work evaluated and fed back by the instructor.</p>
          </div>
          <div>
            <h2 className="text-h3">Why learn with us</h2>
            <BracketList items={site.benefits} className="mt-4" />
          </div>
        </div>
      </Section>
      <Section tight>
        <div className="theme-t rounded-card bg-surface p-10 text-center clay-pressed">
          <h2 className="text-h2">See the two courses</h2>
          <ButtonLink to="/courses" size="lg" className="mt-6">Explore courses</ButtonLink>
        </div>
      </Section>
    </div>
  );
}
