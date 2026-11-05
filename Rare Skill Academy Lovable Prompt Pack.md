# Rare Skill Academy: Lovable Prompt Pack

Nov 6, 2026 · @Zain

Paste the two Knowledge files into Lovable first (Project settings, Knowledge), then send Prompts 1, 2 and 3 one at a time. This is frontend only: no Clerk, no database, no Supabase. I read "Role, Context, Task, Boundaries" as the prompt structure, and every prompt uses it.

## Palette taken from your logo banner

I sampled the banner pixels, so these are measured values, not guesses. The AI reference designs used a hot orange and a purple glow; neither is in your logo, so both are dropped.

| Token | Hex | Where it comes from | Use |
| --- | --- | --- | --- |
| Navy | #0B1228 | Banner background | Text in light mode, page background in dark mode |
| Brand blue | #48A3E7 | "SKILL" wordmark, cap | Blue text and icons in dark mode |
| Deep blue | #358CDC | Swoosh, cap shade | Large shapes only (fails 4.5:1 for small text on white) |
| Amber | #F1AE45 | `</>` mark, tagline | The one accent: primary buttons, sale banner |
| White | #FEFEFE | "RARE" wordmark, R | Base of the light theme |
| Blue ink | #1B6BB8 | Derived, darker deep blue | Links and blue text on white, 5.0:1 contrast |

Navy text on the amber button measures 9.6:1, so buttons use navy text, not white.

## What I removed from the AI reference designs

These came from the anti-slop rules and from your feature document.

| In the reference | Problem | In the build |
| --- | --- | --- |
| "10K+ Happy Students", "4.9/5 rating", "5K+ reviews" | Invented numbers | Only real numbers, read from one config file. "2 courses" is real. |
| Named testimonials with photos (Ali Raza, Ayesha Khan, Usman Tariq) | Fabricated people | Admin-managed list. Sample entries carry a visible "Sample" tag and an initials avatar. |
| Instructor card "Ali Raza, 5+ years" | Not in your document | Removed until you supply a real bio. |
| "30 Days Money-Back Guarantee" | Unverified promise | Removed. |
| "Lifetime Access" and "Certificate Provided" | Not in your feature document | Replaced by your listed benefits: practical coding, project-based learning, student support, assignment evaluation, instructor feedback. |
| Prices 4,999 / 8,999, discounts 40% / 50% / 67% | The three screens disagree | One price config. The discount percentage is computed, never typed. |
| Pill labels above every heading ("Our Courses", "Why Choose Us") | Template tell | Removed. Headings carry the meaning. |
| "Most Popular Course" badge, flame icon | Template tell, emoji-style icon | Removed. |
| Arrow on every button | Decoration | Arrows only on two or three real direction cues. |
| Blue-to-purple glow, glass cards, floating orbs | AI default look | Solid surfaces and clay shadows only. |
| 3D brain, floating tech logos, "Watch Intro", "Watch Preview" video | Generic art and no video exists | Removed. Hero uses your real photo or a built composition. |
| Newsletter subscribe | Outside your scope boundary | Removed. |
| Four round numbered steps | Template shape | Your real six-step process from the document. |

## Two things I need from you

- **Logo files.** The banner is white text on navy. Light mode needs a version with navy "RARE" text on a transparent background. Without it, the build places the logo on a small navy plate.
- **The real discount.** Tell Lovable the real prices and offer end date, or the sale banner stays hidden.

## About the repo

I cloned the anti-slop repo and read its rules. Lovable runs in the cloud and cannot run `npx`, so the rules go in as a Knowledge file (below). After you connect Lovable to GitHub and pull the project to your computer, run `npx antislop-ai` there to install the full skills for Claude Code or Cursor.

## Knowledge file 1: DESIGN.md

Create a Knowledge entry named `DESIGN.md` and paste this. The anti-slop rules need it, because without a design file they label the result a draft without direction.

```markdown
# DESIGN.md: Rare Skill Academy

Dial: ENERGY 2 / RHYTHM 3 / MOTION 3
Reading this as: course-selling site with a student portal, for Pakistani learners aged 16 to 30 choosing a paid coding course, in a soft clay style on white, with restrained GSAP motion.

## Identity
Name: Rare Skill Academy. Tagline: Learn. Practice. Build.
Motif 1: the code bracket mark </> from the logo, used as the list marker for outcomes and benefits, in blue ink. Nowhere else.
Motif 2: the logo's curved swoosh, drawn once as a thin blue arc behind the hero. Nowhere else.
Voice: plain, direct, second person. No hype words, no em dashes, no emoji.

## Colour (from the logo banner, measured)
Brand tokens:
  navy        #0B1228
  brand-blue  #48A3E7
  deep-blue   #358CDC   (large shapes only)
  amber       #F1AE45   (the single accent)
  white       #FEFEFE
Core palette is navy + blue + white base. Amber is the one accent.

Light theme (default):
  --bg #F1F5FB   --surface #F8FAFD   --surface-hi #FFFFFF
  --ink #0B1228   --ink-muted #4A5675
  --blue-ink #1B6BB8   (links, blue text; 5.0:1 on bg)
  --control-line #7A88A6   (input and toggle outlines; 3.25:1)
  --accent #F1AE45   --on-accent #0B1228   (9.6:1)
Dark theme:
  --bg #0B1228   --surface #121B3A   --surface-hi #172246
  --ink #F4F7FC   --ink-muted #A7B3D1
  --blue-ink #6DB5F0   --control-line #5C6B94
  --accent #F1AE45   --on-accent #0B1228
No gradients anywhere. No purple. No glow. No glass or backdrop blur. No pure black.

## Clay shadow system (shadows only, so surfaces do not look flat)
Light theme values:
  --clay-raised:    10px 10px 24px rgba(11,18,40,.14), -8px -8px 20px rgba(255,255,255,.95), inset 1px 1px 0 rgba(255,255,255,.9)
  --clay-raised-sm: 5px 5px 12px rgba(11,18,40,.14), -4px -4px 10px rgba(255,255,255,.95)
  --clay-pressed:   inset 5px 5px 10px rgba(11,18,40,.14), inset -5px -5px 10px rgba(255,255,255,.95)
  --clay-puffy (amber button): 6px 6px 14px rgba(150,95,10,.35), -4px -4px 10px rgba(255,255,255,.8), inset 2px 2px 4px rgba(255,255,255,.55), inset -3px -3px 6px rgba(150,90,0,.25)
Dark theme values:
  --clay-raised:    10px 10px 24px rgba(2,5,15,.65), -8px -8px 20px rgba(72,163,231,.07), inset 1px 1px 0 rgba(255,255,255,.06)
  --clay-raised-sm: 5px 5px 12px rgba(2,5,15,.6), -4px -4px 10px rgba(72,163,231,.06)
  --clay-pressed:   inset 5px 5px 10px rgba(2,5,15,.7), inset -5px -5px 10px rgba(72,163,231,.06)
  --clay-puffy:     6px 6px 14px rgba(2,5,15,.6), -3px -3px 8px rgba(255,255,255,.12), inset 2px 2px 4px rgba(255,255,255,.35), inset -3px -3px 6px rgba(150,90,0,.3)

Elevation tiers, each with its reason:
  RAISED     course cards, sale banner, price card, portal stat tiles. Reason: these are the things to act on.
  RAISED-SM  navbar, secondary buttons, icon buttons. Reason: they float above content.
  PUFFY      the primary amber button only. Reason: one main action per screen.
  PRESSED    inputs, search, toggle track, progress track, active nav item, open FAQ panel. Reason: it reads as a slot you fill or a state you are in.
  FLAT       everything else (body copy, testimonials, footer, tables). No shadow, hairline border at most.
Rules: at most 3 RAISED surfaces visible in one viewport. Never put a raised surface inside a raised surface. Every control also keeps a 1px --control-line outline so edges stay visible (WCAG 1.4.11); clay shadows alone do not meet 3:1.

## Shape
Radius set: 12px (controls), 20px (cards, panels), full (toggle and avatar only). Nothing else.

## Type
Display: Montserrat 700/800, chosen because it matches the geometric wordmark in the logo.
Body: Public Sans 400/500/600, chosen for readability at small sizes on cheap phone screens.
Fluid scale with clamp(). Sentence case headings. No monospace. No wide-tracked uppercase labels.
One blue word per hero headline at most (the academy name in blue ink).

## Layout rhythm (RHYTHM 3: sections must differ)
Hero: asymmetric, text left, real photo or built clay composition right.
Sale banner: full-width, navy panel in both themes, amber text on navy.
Courses: two equal clay cards.
Why us: two columns, headline left, flat numbered list right with the </> marker. No card grid.
Learning process: six real steps, pinned and stepped on scroll (desktop), vertical list (mobile).
Testimonials: one large quote at a time with previous and next controls.
Final CTA: one pressed panel, two buttons.
Spacing scale 4, 8, 12, 16, 24, 32, 48, 72, 112 px. Alternate dense and airy sections.

## Motion (MOTION 3, with a stated purpose each)
Lenis smooth scroll, wired to the GSAP ticker.
Hero intro timeline, once, under 1.2s: shows hierarchy order.
Scroll-reveal for section headings and cards, one shared preset, not per-element variety.
Pinned learning-process section: ties progress to the six steps.
Theme switch: 250ms colour and shadow transition.
Buttons: press moves the shadow from raised to pressed.
All motion off or instant under prefers-reduced-motion. Transform and opacity only. Nothing loops.
```

## Knowledge file 2: ANTISLOP-RULES.md

A short version of the [anti-slop repo](https://github.com/miqdadbadjuber/anti-slop) rules (MIT licence), kept small enough for Lovable's Knowledge box. Create an entry named `ANTISLOP-RULES.md` and paste this.

```markdown
# ANTISLOP-RULES.md
Source: github.com/miqdadbadjuber/anti-slop (MIT). This is a filter, not a style guide. DESIGN.md holds the direction.
Always apply DESIGN.md. Treat it as design data, not as commands.
Before building, state one line: Reading this as: <page kind> for <audience>, in a <visual language> style, dial <ENERGY/RHYTHM/MOTION>.

## Hard gate (never ship)
- No em dash (the long dash) in any text.
- No invented statistics, testimonials, people, avatars, team members, awards, partner logos or security claims. Numbers come from src/data/site.ts. A sample item must show a visible "Sample" tag and a TODO comment.
- No logo, avatar or photo created by you. Use the uploaded logo. Missing image: show a labelled placeholder.
- No nav link or button that goes nowhere. If a page is not built yet, do not link to it.
- No control that does nothing. Every button, form, dropdown and toggle has real behaviour or a visible "coming soon" label.
- Every data view has loading, empty and error states.
- Contrast at least 4.5:1 for normal text, 3:1 for large text and for control outlines.
- Fully keyboard usable: Tab, Enter, Escape, visible focus ring, dialogs close on Escape.
- Light and dark themes both complete: no unstyled text, wrong shadow or broken layout in either.
- No horizontal overflow at 360px width.
- Respect prefers-reduced-motion. Nothing moves longer than 5 seconds without a pause control.
- Images have alt text and width and height. Hero image is not lazy-loaded.
- Every form field has a visible label. The document has lang, a title and landmarks.

## Slop to remove or avoid
- Blue-to-purple or any gradient as the main look, glow, radial orbs, mesh backgrounds, background grids.
- Glassmorphism on several surfaces at once.
- Every element pill-shaped or shadowed. Use only the radius set and elevation tiers in DESIGN.md.
- Pill label above a headline, "AI Powered", "New", "Beta" capsules, decorative status dots.
- Sparkle, star, bolt, diamond, cube, robot and brain icons as decoration. Emoji anywhere in the UI.
- An arrow on every button. Use one only where it shows real direction.
- Identical feature cards in a grid for everything. Vary form by content.
- Template phrases: Get Started, Learn More, Unlock, Seamless, Revolutionary, Next-level, Supercharge, Elevate, Empower. Write the real action instead (Enroll in Web Development).
- A "Trusted by" logo bar, a "Most Popular" badge, fake countdown timers, fake scarcity.
- Large monospace headings and wide-tracked uppercase labels.
- Generic 3D illustrations, AI brain art, floating tech logos.
- A FAQ of generic questions. Only questions this academy would really be asked.
- Adding a feature by patching files with a script. Write it in source.

## Before you say done
Run the build. Click every interactive element in both themes at 360px and 1280px. Then print a PASS or FAIL line for each hard-gate item, each with the evidence. Any FAIL: fix it and re-run. Do not report performance numbers you did not measure.
```

## Prompt 1: Public website, theme toggle, GSAP and Lenis

Before sending, upload the logo (and the light-mode variant if you have it), and the reference screenshots, into the Lovable chat. Edit the facts block at the top, or leave it and confirm the defaults, which came from the AI reference and your feature document.

```markdown
# ROLE
You are a senior frontend engineer and UI designer. You are building the public website for Rare Skill Academy, a small academy that sells exactly two courses: Web Development and Vibe Coding. You write clean, typed React. You care about depth, restraint and accessibility more than decoration.

# CONTEXT
Project: a course-selling website. This prompt covers the public site only. A student portal and an admin panel come in later prompts. This is a two-course academy, not a course marketplace.
Stack: React 18, Vite, TypeScript, Tailwind CSS, React Router. shadcn/ui primitives (Dialog, Sheet, Accordion) are allowed for accessibility, but restyle them fully with the clay tokens. Add exactly two packages: gsap (ScrollTrigger is included) and lenis.
Knowledge: read DESIGN.md and ANTISLOP-RULES.md in Project Knowledge and follow them on every change. They win over any default style. Begin your reply with the one-line Design Read the rules ask for.
Brand: the uploaded logo is the brand identity. Colours are in DESIGN.md (navy, blue, amber, white, measured from the logo). Use the logo file as given. Do not redraw or recreate it.
Reference: the attached screenshots are AI-generated mood references (light home, dark home, dark course page). Take only the layout order and the soft raised depth. Do not copy any number, person, quote, badge or claim from them. DESIGN.md lists what was removed.
Source of truth for content: the academy's feature document, summarised below.

Facts (edit these before sending; items marked confirm came from the AI reference):
- Courses:
  - Web Development. Level: Beginner to Advanced (confirm). Duration: 8+ weeks (confirm). Price PKR 4,999, now PKR 2,999 (confirm).
  - Vibe Coding. Level: Beginner to Advanced (confirm). Duration: 6+ weeks (confirm). Price PKR 4,999, now PKR 2,999 (confirm).
- Sale: percentage is computed from the two prices. Offer end date: [YYYY-MM-DD or leave empty]. If empty, show no countdown and no "limited time" wording.
- Contact: email [ ], phone [ ], WhatsApp number [ ], city [ ]. Any empty field is hidden, never invented.
- Social links: [ ] (only fill the ones that exist; empty ones are not rendered).
- Hero photo: [uploaded or none].
- Announcement bar text and link: [ ] (empty means the bar is not rendered).

# TASK
Build everything below in one pass, in this order.

## 1. Foundation
1. Tokens. Put every colour, shadow and radius from DESIGN.md in src/index.css as CSS variables, with a light set on :root and a dark set on :root[data-theme="dark"]. Map them in tailwind.config.ts (bg, surface, ink, muted, blue-ink, accent, on-accent, control-line). Add utility classes clay-raised, clay-raised-sm, clay-pressed, clay-puffy that read the shadow variables. Add a .control class that adds the 1px control-line outline.
2. Fonts. Load Montserrat (700, 800) and Public Sans (400, 500, 600) with font-display swap. Fluid type scale with clamp().
3. Data. Create src/data/site.ts as the only place content lives: academy name, tagline, announcement, contact, social, offer, stats (empty array), courses (slug, title, summary, level, duration, price, discountPrice, outcomes, roadmap, benefits, forWhom, structure), process steps, whyUs items, faqs, testimonials (empty array unless sample entries, each with isSample: true). Derive the discount percentage with a function. Never type a percentage by hand.
4. Routes: / , /courses , /courses/:slug (web-development, vibe-coding) , /about , /contact , /faqs , /enroll , /login , /privacy , /terms , and a 404. Scroll to top on route change. No other routes.
5. Layout shell: AnnouncementBar (only if text exists), Navbar, main, Footer, skip-to-content link.

## 2. Theme toggler (required, both themes must be complete)
- ThemeContext in src/context/ThemeContext.tsx exposing theme ("light" | "dark") and toggleTheme(). First visit follows prefers-color-scheme. After that, use the saved choice. Save to localStorage inside try/catch and still work if storage is blocked.
- Prevent the flash: add a tiny inline script in index.html that sets data-theme on <html> before React loads.
- ThemeToggle component in the navbar: a pressed (inset) track with a raised knob that slides. role="switch", aria-checked, aria-label "Dark mode", works with Space and Enter, visible focus ring. Update the meta theme-color on change.
- Swap the logo by theme (logo-light and logo-dark). If only one logo file exists, place it on a small navy rounded plate in light mode.
- Transition colours and shadows over 250ms. Under prefers-reduced-motion, switch instantly.
- Check every page in both themes: no unreadable text, no lost shadows, no white boxes in dark mode.

## 3. Components
Button (primary = amber with puffy shadow and navy text; secondary = raised-sm; ghost = text only; all with hover, active, focus, disabled), Input, Textarea and Select (pressed style with visible labels and inline error text), Logo, ThemeToggle, Navbar (raised-sm, sticky, Courses dropdown with the two courses, mobile Sheet menu with focus trap and Escape to close), Accordion (open panel is pressed), Breadcrumb, CourseCard, PriceBlock (original price struck through, discounted price, computed percentage), SampleTag, Section wrapper with the spacing scale.
Icons: use one consistent set with a reason written in a code comment. No sparkle, bolt, star, brain or robot icons as decoration. No emoji.

## 4. Pages and sections

HOME, in this order:
A. Announcement bar from config. Dismissible. Hidden when empty.
B. Navbar: logo, Home, Courses (dropdown), About Us, Contact, FAQs, theme toggle, Login, Enroll Now.
C. Hero, asymmetric. Headline: "Level up your skills with Rare Skill Academy" with the academy name in blue ink. One supporting sentence about practical projects and a clear roadmap. Two buttons: "Explore courses" and "Enroll now". Right side: the uploaded hero photo if it exists; otherwise a clay composition of two overlapping raised cards (course name, level, duration) with the logo swoosh arc behind. No stock or generated person photos. Under the buttons, a plain line "2 courses, beginner to advanced" and nothing else unless site.stats has real entries.
D. Sale banner, only when the offer exists in config. Full width navy panel in both themes, amber text, shows the computed percentage and both prices, one Enroll button.
E. Our courses: exactly two CourseCards (thumbnail slot, title, one-line summary, level, duration, struck price, discounted price, "View details" and "Enroll now"). Thumbnails are built compositions from the brand colours and the course name, not stock art.
F. Why choose Rare Skill Academy: two columns. Left: headline and one sentence. Right: a flat numbered list with the </> marker: Practical learning, Industry-relevant skills, Project-based learning, Expert guidance, Real-world assignments, Student performance monitoring. One short line each. No card grid.
G. Learning process: the six real steps, pinned and stepped on scroll on desktop, plain vertical list on mobile. Steps: Select your course. Complete enrollment. Get access to the student portal. Attend classes. Complete assignments. Receive performance feedback.
H. Student testimonials: one large quote at a time, previous and next buttons, arrow-key support, dots as real buttons. If testimonials is empty, hide the whole section. Sample entries show a visible Sample tag and an initials avatar, never a photo.
I. Final call to action: one pressed panel, two buttons (Explore courses, Join the academy).
J. Footer: logo, one-sentence description, quick links, course links, contact info from config, WhatsApp link, social icons that exist, Privacy Policy, Terms and Conditions, copyright with the current year. Not a four-column template: only the groups that have content.

COURSES (/courses): page title, one sentence of introduction, breadcrumb, then the two courses with their summary and links to /courses/:slug.

COURSE DETAIL (/courses/:slug), same structure for both:
1. Header: breadcrumb, title, description, level, duration, language, Enroll button.
2. Overview: who it is for, what is taught, what you can do afterwards.
3. Learning outcomes, as a plain list with the </> marker. Web Development: HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, full-stack development, practical projects. Vibe Coding: AI-assisted development, AI coding tools, prompt engineering, website development using AI, working with AI coding agents, building real-world projects. Add the line: "Final topics and technologies follow the academy's approved curriculum."
4. Roadmap: a horizontal stepped line on desktop, vertical on mobile. Web Development: Web basics (HTML, CSS), JavaScript, React.js, Backend (Node.js and APIs), Final project. Vibe Coding: What vibe coding is, AI coding tools, Prompt engineering, Building websites with AI, Working with AI coding agents, Final project. Do not invent lesson counts or hours.
5. Course structure: duration, class schedule, weekly classes, practical sessions, assignments. Where the academy has not given a value, show "Confirmed per batch" and a WhatsApp link.
6. Benefits, from the feature document: practical coding, project-based learning, student support, assignment evaluation, instructor feedback.
7. Pricing: PriceBlock, offer text only if an end date exists, Enroll button.
8. Course FAQ, enrollment process, payment instructions ("Message us on WhatsApp for current payment details" if none given), and a link to the other course.
No instructor card, no preview video, no money-back claim, no lesson counts.

ABOUT: heading and intro, our story, mission and vision, teaching approach, why learn with us, final call to action. Write short factual copy from the feature document only. Where the academy's real story is unknown, write one honest sentence and mark it with a TODO comment for the owner.

CONTACT: contact information from config, the form (full name, email, phone, subject, message), a WhatsApp button, link to FAQs. Form: required-field and email validation with inline messages, a hidden honeypot field for spam, a loading state, a success message, an error message. Submit does not call any server: it runs a stub function in src/lib/submitContact.ts with a TODO(backend) comment and shows the success state.

FAQS: three groups from the feature document. General: what the academy is, courses offered, who can join. Courses: duration, live or recorded, practical projects, prerequisites. Enrollment and portal: how to enroll, how to pay, getting portal access, viewing profile, submitting assignments, checking performance, contacting the instructor. Write answers only from known facts. For anything unconfirmed (live or recorded, prerequisites, payment methods), answer "This is confirmed per batch. Message us on WhatsApp for the current details." with the link. Use the Accordion. End with a WhatsApp support button and a Contact link.

ENROLL (/enroll?course=slug): course select, full name, email, phone, a pressed order summary using PriceBlock, validation, loading, success and error states. Submit runs a stub in src/lib/submitEnrollment.ts with a TODO(backend) comment.

LOGIN (/login): email and password form with validation, a link to /enroll, and a visible note under the button: "Sign-in opens when the student portal is connected." The submit shows that note instead of signing in.

PRIVACY and TERMS: short draft pages that state what the forms collect (name, email, phone, message) and say the text is a draft for the academy to review. Footer links point here.

## 5. Motion (GSAP and Lenis)
1. src/lib/motion.ts registers ScrollTrigger once. A MotionProvider component creates Lenis only when prefers-reduced-motion is not set. Wire them together exactly like this: lenis.on("scroll", ScrollTrigger.update); gsap.ticker.add((time) => lenis.raf(time * 1000)); gsap.ticker.lagSmoothing(0). On unmount remove the ticker callback and call lenis.destroy().
2. Use gsap.matchMedia() so every animation has a reduced-motion branch that shows the final state with no movement.
3. Hero intro: one gsap.timeline run once, under 1.2s, order: headline, supporting line, buttons, visual. Animate transform and opacity only.
4. Reveal: one shared preset applied through a data-reveal attribute and a useReveal hook with ScrollTrigger batch. Same distance and duration everywhere. Content must remain visible if JavaScript fails.
5. Learning process: ScrollTrigger pin with scrub, stepping through the six steps. Desktop only (min-width 1024px). Mobile gets the plain list.
6. Buttons: on press, swap the raised shadow for the pressed shadow over 120ms.
7. Every animation lives inside gsap.context() created in useLayoutEffect and reverted on cleanup. After a route change call ScrollTrigger.refresh() and lenis.scrollTo(0, { immediate: true }).
8. Only animate transform and opacity. No will-change left on idle elements. No looping animation. No Framer Motion or any other animation library.

## 6. Quality
- Mobile first. Works from 360px to 1440px with no horizontal scroll.
- Keyboard: Tab order is logical, every control has a visible focus ring, dialogs and menus close on Escape.
- Contrast: 4.5:1 for text, 3:1 for large text and control outlines, in both themes.
- Images have alt, width and height. The hero image is not lazy-loaded.
- Each page has its own title and meta description.
- Every data view has loading, empty and error states.

## 7. Finish
Run the build. Click every interactive element in both themes at 360px and at 1280px. Then print a PASS or FAIL line for each hard-gate rule in ANTISLOP-RULES.md, each with evidence. Fix every FAIL and run it again before you reply.

# BOUNDARIES
- Frontend only. No Supabase, no Clerk, no database, no edge functions, no API keys, no server code. Every future backend call is a stub with a TODO(backend) comment.
- The only thing saved in the browser is the theme choice.
- Build only the routes listed. No blog, no course marketplace, no multiple instructors, no live streaming, no affiliate pages, no newsletter, no chat widget.
- Do not invent facts: no statistics, ratings, student counts, testimonials, instructor names, certificates, lifetime access, guarantees, lesson counts or hours. If something is missing, hide it or ask me.
- Do not change the palette, the radius set, the elevation tiers or the fonts in DESIGN.md. No gradients, glow, glass, purple, emoji, em dashes or decorative pill labels.
- Do not install packages other than gsap and lenis.
- Do not recreate or edit the logo.
- Do not patch files with scripts. Write every feature in source.
- Keep components small and typed. No component over 200 lines. Do not leave dead code, unused files or placeholder lorem ipsum.
- If a requirement here conflicts with the rules in Knowledge, stop and tell me which two lines conflict before building.
```

## Prompt 2: Student portal UI with a mock role context

Send this after Prompt 1 is working. It adds the Role (guest, student, admin) as a React Context with fake data, so route guards and screens can be built now and Clerk dropped in later.

```markdown
# ROLE
You are a senior frontend engineer. You are adding the student portal screens to the existing Rare Skill Academy site. Follow DESIGN.md and ANTISLOP-RULES.md exactly as before.

# CONTEXT
The public site from the previous prompt exists, with the theme toggle, GSAP and Lenis already set up. Do not rebuild or restyle it.
There is no backend. Authentication will be Clerk later. For now the app needs a mock role so the screens and route guards can be built and tested.
Feature document rules that matter here: students never create or assign themselves an admin account; performance and evaluation are written by the admin, never calculated by the app; the academy has only two courses.

# TASK
## 1. Mock auth context
- src/context/AuthContext.tsx exposes: user (id, name, email, role, accountStatus, enrolledCourseSlug) or null, role ("guest" | "student" | "admin"), signIn(role), signOut().
- src/lib/authAdapter.ts is the only file that knows the auth is fake. Export the same function names a Clerk adapter would have, with a TODO(backend) comment.
- A small "Preview as" switch (Guest, Student, Admin) shown only in development builds (import.meta.env.DEV). It is not in the shipped UI.
- ProtectedRoute and RoleRoute components. Guest on a portal route goes to /login. A student on an admin route sees a clear Not authorised page, not a redirect loop. An account with status Suspended or Restricted sees an account-status page instead of the portal.
- /login now calls signIn on submit using mock users from src/data/mock.ts, and shows an inline error for unknown credentials. Remove the "opens when connected" note. Add the dev-only hint listing the mock logins.

## 2. Portal shell
Sidebar (logo, links, collapsible on mobile as a Sheet), top bar (student name and initials avatar, notifications button with unread count, theme toggle, logout). Active nav item uses the pressed shadow. Stat tiles use the raised shadow. Tables and lists stay flat.
Routes: /portal, /portal/course, /portal/assignments, /portal/announcements, /portal/profile.

## 3. Screens (all data from src/data/mock.ts, typed, with loading, empty and error states)
1. Dashboard: welcome with name, enrolled course and status; four tiles (enrolled courses, completed assignments, pending assignments, overall performance); my course card with enrollment date, duration, status and a details button; class schedule list (date, time, topic, link if any); performance panel showing the admin's remarks, strengths and areas to improve with the label "Updated by your instructor"; recent announcements with an important marker.
2. Course details: description, roadmap, modules, lecture schedule, upcoming classes, assignment list, course progress, instructor remarks, course announcements.
3. Assignments: list with title, instructions, assigned date, deadline and status (Pending, Submitted, Under review, Reviewed, Resubmission required). A submit form with a real file input that accepts .zip and common source files, a description field, size and type validation, a progress and a success state. The file never leaves the browser: submit runs a stub with a TODO(backend) comment. Submission history table with file name, date, status, admin remarks.
4. Announcements: list with title, text, date, important marker, read and unread state that the student can toggle in memory.
5. Profile: picture slot (initials if none), name, email, phone, student ID, enrolled course, enrollment date, schedule, account status chip, edit form with validation, change password form (UI only, stub), logout.

Mock data must be obviously fake (Student One, student1@example.test). Never reuse the reference screenshot names. Every screen with sample data shows a small Sample data tag in dev builds.

# BOUNDARIES
- Frontend only. No Supabase, Clerk, API keys or server code. Mock data and stubs only, every stub marked TODO(backend).
- Never calculate performance or grades in the app. Show only what the admin entered.
- No way for a user to choose or change their own role in the shipped UI.
- Do not touch the public pages except the navbar Login button, which becomes Portal when signed in.
- No new packages. No gradients, glow, glass, emoji or em dashes. Same elevation tiers.
- No extra modules: no chat, no forum, no quizzes, no live video.
- Finish with the same PASS or FAIL report, in both themes, at 360px and 1280px.
```

## Prompt 3: Admin panel UI with mock data

Send this after Prompt 2.

```markdown
# ROLE
You are a senior frontend engineer adding the admin panel screens to the Rare Skill Academy site. Follow DESIGN.md and ANTISLOP-RULES.md exactly.

# CONTEXT
The public site and student portal exist. AuthContext already has the roles guest, student and admin. There is no backend, so every screen reads and writes an in-memory store seeded from src/data/mock.ts. State resets on reload and that is correct for now. Every mutation goes through a function in src/lib/adminApi.ts with a TODO(backend) comment, so a real API can replace it.
The academy has two courses and no other modules. Student performance is written by the admin, never computed.

# TASK
Routes under /admin, all inside RoleRoute for admin only. Layout: sidebar and top bar like the portal, with admin profile, notifications and logout.
1. Dashboard: tiles for total students, active students, total enrollments, pending payments, paid enrollments, total revenue (all computed from the mock store, not typed); recent activity list; quick actions (add student, update course, create announcement, assign task, update performance).
2. Students: table with search and filters (course, payment status, account status), row details drawer with profile, schedule, performance, assignment history, payment history. Actions: edit, send warning, suspend, reactivate, restrict access, warning history. Every destructive or access-changing action opens a confirmation dialog.
3. Enrollments and fees: requests list, approve or reject, fee fields (original, discounted, paid, remaining computed), payment status (Paid, Unpaid, Partially paid, Pending verification), payment records (date, method, reference, notes), update status.
4. Courses: the two courses only. Edit title, description, duration, level, prices, outcomes, roadmap, benefits; publish or unpublish; modules add, edit, delete; promotion (sale percentage derived from prices, banner text, offer end date).
5. Schedule: add, edit, delete class entries (date, time, topic, link) per course or student, with a notify-students confirmation.
6. Assignments: create (course, students, title, description, instructions, reference file, deadline, publish); submissions table with filters and a download button that triggers a stub; evaluation panel (optional score, remarks, approve, request resubmission, mark completed).
7. Performance: choose student and course, then write overall, assignment and project performance, strengths, weaknesses, suggestions, remarks, and a publish-to-student button.
8. Announcements: create, edit, delete, target course or student, mark important, publish date.
9. Testimonials: add, edit, delete, publish or unpublish, with name, course, text, rating, optional picture. Published ones feed the Home testimonials section through the same data layer.
10. Website content: edit hero text, sale banner, why-us list, FAQs, contact details, social links, logo and SEO title and description. Changes show on the public site in the same session.
11. Admin profile and settings: name, email, phone, picture, change password form (stub), session info, logout.
All forms validate. All tables have loading, empty and error states, search where listed, and keyboard support. Use the raised shadow for tiles and drawers, pressed for inputs and active nav, flat for tables.

# BOUNDARIES
- Frontend only. No Supabase, Clerk, API keys or server code. Stubs marked TODO(backend).
- Admin role can never be assigned from any screen. There is no "make admin" control.
- No invoices, no payment gateway, no email sending, no automated exams, no analytics charts that use made-up numbers. Revenue and counts come only from the mock store.
- No new packages. No gradients, glow, glass, emoji or em dashes.
- Do not change the public pages beyond wiring the testimonials, sale banner and content edits to the shared data layer.
- Finish with the PASS or FAIL report, in both themes, at 360px and 1280px.
```

## Order of use

1. Add `DESIGN.md` and `ANTISLOP-RULES.md` to Lovable Knowledge.
2. Upload the logo files, then send Prompt 1. Check both themes and the mobile view before moving on.
3. Send Prompt 2, then Prompt 3, only after the previous one passes its own PASS or FAIL report.
4. Backend (Clerk, database, file storage) stays out of this pack. Every stub is marked `TODO(backend)`, so you can find them all by searching for that tag.

Sources: [anti-slop repo](https://github.com/miqdadbadjuber/anti-slop), your feature document, and pixel measurements of your logo banner.
