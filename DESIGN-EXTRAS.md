# Rare Skill Academy: design extras

## How to use the starter files
Copy into the project (paths match `src/`): index.css, tailwind.config.ts, the head snippet from index.head.html into index.html, then ThemeContext, ThemeToggle, Button, MotionProvider, LearningProcess, motion.ts, useReveal, useHeroIntro and site.ts.
Wrap the app: BrowserRouter > ThemeProvider > MotionProvider > routes. The `@/` alias must point at `src/` (Lovable already does this).
`npm i gsap lenis`. The code typechecks under strict TypeScript (checked with tsc, not run in a browser).
Tailwind note: the config targets Tailwind 3. If the project uses Tailwind 4, move the colour map into an `@theme` block.

## Page wireframes (text)
Home, desktop:
1. Announcement bar (only if text exists), one line, dismiss button.
2. Navbar (raised-sm): logo left; Home, Courses, About, Contact, FAQs centre; toggle, Login, Enroll right.
3. Hero: left 7 columns headline, one sentence, two buttons, one plain line "2 courses, beginner to advanced". Right 5 columns: photo or two overlapping raised course cards. Thin blue swoosh arc behind.
4. Sale banner: full-width navy panel, left big computed percent in amber, middle both prices, right Enroll button.
5. Courses: two equal raised cards. Each: visual slot, title, summary, level and duration, struck price, discounted price, two buttons.
6. Why us: left headline, right six-line numbered list with the </> marker. Flat.
7. Learning process: pinned. Left headline, right six steps; the current step sits in a pressed slot.
8. Testimonials: one big quote, avatar initials, previous and next, dots. Hidden if empty.
9. Final CTA: one pressed panel, headline, two buttons.
10. Footer: logo and one sentence, then only the link groups that have content, legal links, copyright.

Course detail:
Header (breadcrumb, title, meta row, Enroll) > overview in three short columns (who it is for, what you learn, what you can do after) > outcomes list with marker > horizontal roadmap line > structure table (flat) > benefits list > pricing raised card (sticky on desktop) > FAQ > other course link.

Mobile: single column, sticky bottom bar with the price and Enroll button on course pages, mobile menu as a Sheet.

## Component specs
| Component | Shadow tier | Notes |
| --- | --- | --- |
| Navbar | raised-sm | Sticky. 64px high. Active link underlined in blue ink. |
| Primary button | puffy | One per screen. Navy text on amber. Press swaps to pressed shadow. |
| Secondary button | raised-sm | 1px control line. |
| Input, textarea, select | pressed | Visible label above. Error text below in ink, with an icon, not colour alone. |
| Course card | raised | Hover lifts 2px, shadow stays. No glow. |
| Price block | flat inside a card | Struck original, bold discounted, computed percent as plain text. |
| Accordion item | flat closed, pressed open | Chevron rotates 180 degrees. |
| Toggle | pressed track, raised-sm knob | role=switch. |
| Portal stat tile | raised | Number in Montserrat, label in muted. |
| Table | flat | Hairline rows, sticky header on long tables. |
| Toast | raised-sm | Success and error, aria-live polite. |

States for every control: default, hover (shadow or underline, never colour only), active (pressed shadow), focus-visible (2px blue ring), disabled (50 percent, no pointer).

## Copy deck (plain voice, no hype words)
- Hero headline: Level up your skills with Rare Skill Academy
- Hero line: Learn web development and vibe coding through practical projects, a clear roadmap and feedback from your instructor.
- Buttons: Explore courses / Enroll now
- Sale banner: {computed percent}% off both courses. {Offer line only if an end date exists: Offer ends {date}.}
- Courses heading: Choose your course
- Web card: Learn HTML, CSS, JavaScript, React, Node.js and MongoDB by building real projects.
- Vibe card: Learn to build with AI coding tools, prompts and coding agents.
- Why us heading: How we teach
- Process heading: From first click to feedback, in six steps
- Testimonials heading: What students say
- Final CTA: Pick a course and start building. Buttons: Explore courses / Join the academy
- Contact heading: Talk to us. Sub: Ask about a course, a batch or payment. We reply on WhatsApp and email.
- Contact success: Thanks, we got your message. We will reply to the email you gave.
- Form errors: Enter your full name. / Enter a valid email address. / Write a short message.
- Enroll success: Your request is in. We will confirm your enrollment and fee details by email.
- Empty states: No announcements yet. / No assignments yet. / Nothing here yet.
- 404: This page does not exist. Go to the home page.
- Meta titles: Home "Rare Skill Academy | Web Development and Vibe Coding courses"; Courses "Courses | Rare Skill Academy"; each detail page "{Course} course | Rare Skill Academy".
Banned in copy: Get Started, Learn More, Unlock, Seamless, Revolutionary, Supercharge, Empower, Elevate, em dashes, emoji.

## Image and asset slots
logo-light.svg, logo-dark.svg, hero-photo.jpg (real, optional), og-image.png (1200x630, logo on navy), favicon from the R mark.
Course thumbnails are built: brand-colour panel, course name in Montserrat, one marker glyph. No stock art, no AI brain, no floating tech logos.

## QA checklist (both themes, 360px and 1280px)
- No horizontal scroll at 360px.
- Tab through every page: order is logical, focus ring always visible.
- Toggle theme on every page: no white boxes in dark, no lost shadows in light.
- Reduced motion on: no Lenis, no pin, no movement, content visible.
- Contrast: ink on bg 17:1, muted on bg 6.7:1, navy on amber 9.6:1, blue-ink on bg 5.0:1 (light); muted 8.9:1, blue-ink 7.6:1 (dark).
- Forms: empty, invalid, loading, success and error states reachable.
- Every nav link and button leads somewhere real. Search the code for TODO(backend) and list them.
- Theme persists after reload and works with storage blocked.
