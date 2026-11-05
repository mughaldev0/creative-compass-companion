import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy policy | Rare Skill Academy" },
      { name: "description", content: "What information Rare Skill Academy collects through its forms and how it is used." },
      { property: "og:title", content: "Privacy policy | Rare Skill Academy" },
      { property: "og:description", content: "What the site's forms collect and why." },
    ],
  }),
  component: () => (
    <LegalPage title="Privacy policy">
      <h2>What we collect</h2>
      <p>The contact form collects your name, email, phone number and message. The enrollment form collects your chosen course, name, email and phone number.</p>
      <h2>How it is used</h2>
      <p>Only to reply to you and to complete your enrollment.</p>
      <h2>Stored in your browser</h2>
      <p>The site saves your light or dark theme choice in your browser. Nothing else.</p>
    </LegalPage>
  ),
});
