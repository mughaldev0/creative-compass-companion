import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms and conditions | Rare Skill Academy" },
      { name: "description", content: "Draft terms for using the Rare Skill Academy website and enrolling in a course." },
      { property: "og:title", content: "Terms and conditions | Rare Skill Academy" },
      { property: "og:description", content: "Draft terms for the site and course enrollment." },
    ],
  }),
  component: () => (
    <LegalPage title="Terms and conditions">
      <h2>Enrollment</h2>
      <p>Sending the enrollment form is a request. Enrollment is complete once the academy confirms it and payment is received.</p>
      <h2>Course content</h2>
      <p>Final topics and technologies follow the academy's approved curriculum.</p>
      <h2>Forms</h2>
      <p>The forms collect your name, email, phone number and message, as described in the privacy policy.</p>
    </LegalPage>
  ),
});
