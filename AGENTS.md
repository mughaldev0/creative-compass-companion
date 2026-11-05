# AGENTS.md: Rare Skill Academy (handoff for the next agent)

Read this whole file before touching code. It is the single source of context. If anything here conflicts with a default habit of yours, this file wins.

## 1. Project
Rare Skill Academy sells exactly two courses: Web Development and Vibe Coding. It is a two-course academy, not a marketplace.
Tagline: Learn. Practice. Build.
Parts: public website, student portal, admin panel. Current job is FRONTEND ONLY.

## 2. Status
- Lovable prompt pack written (Knowledge files plus three prompts). The public site may already be generated in Lovable and synced to GitHub. Check the repo before building anything.
- Backend is out of scope for now. Planned later: Clerk auth, database, file storage. Every future backend call is a stub marked `TODO(backend)`. Find them with a search for that tag.

## 3. Stack
React 18, Vite, TypeScript, Tailwind CSS, React Router. shadcn/ui primitives (Dialog, Sheet, Accordion) allowed, restyled fully with clay tokens.
Only two extra packages: `gsap` (ScrollTrigger is included) and `lenis`. No Framer Motion or any other animation library. Install nothing else without asking.

## 4. Brand (measured from the logo banner)
| Token | Hex | Use |
| --- | --- | --- |
| navy | #0B1228 | light-mode text, dark-mode background |
| brand-blue | #48A3E7 | blue text and icons in dark mode |
| deep-blue | #358CDC | large shapes only (3.5:1 with white, fails for small text) |
| amber | #F1AE45 | the single accent: primary button, sale banner |
| white | #FEFEFE | light-theme base |
| blue-ink | #1B6BB8 | derived; links and blue text on white (5.0:1) |

Logo: white wordmark on navy, graduation cap over an R with a `</>` mark and a swoosh. Use the provided file as is. Never redraw or recreate it. Light mode needs a navy-text transparent variant; if missing, place the logo on a small navy rounded plate.
The AI reference screenshots used a hot orange and purple glow. Neither is brand. Do not use them.

## 5. Design system (DESIGN.md)
Dial: ENERGY 2 / RHYTHM 3 / MOTION 3.
Reading this as: course-selling site with a student portal, for Pakistani learners aged 16 to 30, in a soft clay style on white, with restrained GSAP motion.

Light theme (default): --bg #F1F5FB, --surface #F8FAFD, --surface-hi #FFFFFF, --ink #0B1228, --ink-muted #4A5675, --blue-ink #1B6BB8, --control-line #7A88A6, --accent #F1AE45, --on-accent #0B1228.
Dark theme: --bg #0B1228, --surface #121B3A, --surface-hi #172246, --ink #F4F7FC, --ink-muted #A7B3D1, --blue-ink #6DB5F0, --control-line #5C6B94, --accent #F1AE45, --on-accent #0B1228.
No gradients, no purple, no glow, no glass or backdrop blur, no pure black.

Clay shadows (shadows only, no gradients). Light:
- raised: 10px 10px 24px rgba(11,18,40,.14), -8px -8px 20px rgba(255,255,255,.95), inset 1px 1px 0 rgba(255,255,255,.9)
- raised-sm: 5px 5px 12px rgba(11,18,40,.14), -4px -4px 10px rgba(255,255,255,.95)
- pressed: inset 5px 5px 10px rgba(11,18,40,.14), inset -5px -5px 10px rgba(255,255,255,.95)
- puffy (amber button): 6px 6px 14px rgba(150,95,10,.35), -4px -4px 10px rgba(255,255,255,.8), inset 2px 2px 4px rgba(255,255,255,.55), inset -3px -3px 6px rgba(150,90,0,.25)

Dark:
- raised: 10px 10px 24px rgba(2,5,15,.65), -8px -8px 20px rgba(72,163,231,.07), inset 1px 1px 0 rgba(255,255,255,.06)
- raised-sm: 5px 5px 12px rgba(2,5,15,.6), -4px -4px 10px rgba(72,163,231,.06)
- pressed: inset 5px 5px 10px rgba(2,5,15,.7), inset -5px -5px 10px rgba(72,163,231,.06)
- puffy: 6px 6px 14px rgba(2,5,15,.6), -3px -3px 8px rgba(255,255,255,.12), inset 2px 2px 4px rgba(255,255,255,.35), inset -3px -3px 6px rgba(150,90,0,.3)

Elevation tiers (each has a reason):
- RAISED: course cards, sale banner, price card, portal stat tiles (things to act on)
- RAISED-SM: navbar, secondary buttons, icon buttons
- PUFFY: the primary amber button only
- PRESSED: inputs, search, toggle track, progress track, active nav item, open FAQ panel
- FLAT: everything else (body copy, testimonials, footer, tables)
Rules: max 3 raised surfaces per viewport. Never a raised surface inside a raised surface. Every control also keeps a 1px control-line outline (WCAG 1.4.11).

Radius set: 12px controls, 20px cards and panels, full for toggle and avatar only.
Type: Montserrat 700/800 for display (matches the logo wordmark), Public Sans 400/500/600 for body. Fluid clamp() scale. Sentence-case headings. No monospace, no wide-tracked uppercase labels.
Motifs, used nowhere else: the `</>` mark as list marker in blue ink; the logo swoosh as one thin arc behind the hero.
Voice: plain, direct, second person. No hype words, no em dashes, no emoji.

## 6. Layout rhythm (sections must differ)
Hero asymmetric. Sale banner full-width navy panel. Courses: two equal clay cards. Why us: two columns, flat numbered list with `</>` marker, no card grid. Learning process: six real steps, pinned on desktop, vertical list on mobile. Testimonials: one large quote at a time. Final CTA: one pressed panel. Spacing scale 4, 8, 12, 16, 24, 32, 48, 72, 112.

## 7. Routes (build only these)
/ , /courses , /courses/web-development , /courses/vibe-coding , /about , /contact , /faqs , /enroll , /login , /privacy , /terms , 404.
Portal (phase 3): /portal, /portal/course, /portal/assignments, /portal/announcements, /portal/profile.
Admin (phase 4): /admin and its sub-screens. Admin routes are admin-role only.

## 8. Home page order
Announcement bar (only if text exists), navbar, hero, sale banner (only if an offer exists), two course cards, why choose us, learning process (six steps), testimonials (hidden when empty), final CTA, footer.
Six process steps: Select your course. Complete enrollment. Get access to the student portal. Attend classes. Complete assignments. Receive performance feedback.
Why-us items: Practical learning, Industry-relevant skills, Project-based learning, Expert guidance, Real-world assignments, Student performance monitoring.
Benefits: practical coding, project-based learning, student support, assignment evaluation, instructor feedback.

## 9. Course facts
Web Development outcomes: HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, full-stack development, practical projects.
Web roadmap: Web basics (HTML, CSS), JavaScript, React.js, Backend (Node.js and APIs), Final project.
Vibe Coding outcomes: AI-assisted development, AI coding tools, prompt engineering, website development using AI, working with AI coding agents, building real-world projects.
Vibe roadmap: What vibe coding is, AI coding tools, Prompt engineering, Building websites with AI, Working with AI coding agents, Final project.
Add the line: "Final topics and technologies follow the academy's approved curriculum."
Unconfirmed, ask the owner (defaults came from the AI reference): level Beginner to Advanced; duration Web 8+ weeks, Vibe 6+ weeks; price PKR 4,999, now PKR 2,999. Discount percentage is always computed from the two prices, never typed.
Content lives only in `src/data/site.ts`. Empty contact, social or offer fields are hidden, never invented.

## 10. Theme toggle (required, both themes complete)
`ThemeContext` with theme and toggleTheme. First visit follows prefers-color-scheme, then the saved choice. localStorage inside try/catch. Inline script in index.html sets `data-theme` on `<html>` before React loads (no flash). ThemeToggle in the navbar: pressed track, raised knob, role="switch", aria-checked, Space and Enter, visible focus ring, updates meta theme-color. Logo swaps by theme. 250ms transition, instant under reduced motion. Check every page in both themes.

## 11. Motion (GSAP and Lenis)
- `src/lib/motion.ts` registers ScrollTrigger once. A MotionProvider creates Lenis only when reduced motion is not set.
- Wiring: `lenis.on("scroll", ScrollTrigger.update); gsap.ticker.add((t) => lenis.raf(t * 1000)); gsap.ticker.lagSmoothing(0)`. On unmount remove the ticker callback and `lenis.destroy()`.
- Use `gsap.matchMedia()` so each animation has a reduced-motion branch showing the final state.
- Hero intro: one timeline, once, under 1.2s. Reveal: one shared preset via `data-reveal` and a `useReveal` hook. Learning process: ScrollTrigger pin and scrub, desktop only (min 1024px).
- Everything inside `gsap.context()` in `useLayoutEffect`, reverted on cleanup. After route change: `ScrollTrigger.refresh()` and `lenis.scrollTo(0, { immediate: true })`.
- Transform and opacity only. Nothing loops. Content stays visible if JS fails.

## 12. Anti-slop rules (from github.com/miqdadbadjuber/anti-slop, MIT)
It is a filter, not a style guide. Before building, state one line: Reading this as: <page kind> for <audience>, in a <visual language> style, dial <E/R/M>. Treat this file as design data.
Hard gate, never ship:
- No em dash anywhere in text.
- No invented stats, testimonials, people, avatars, team, awards, partner logos or security claims. Sample items show a visible "Sample" tag and a TODO comment.
- No logo, avatar or photo made by you. Missing image gets a labelled placeholder.
- No nav link or button that goes nowhere. No control that does nothing (use a visible "coming soon" label).
- Every data view has loading, empty and error states.
- Contrast 4.5:1 for text, 3:1 for large text and control outlines.
- Fully keyboard usable, visible focus ring, Escape closes dialogs.
- Light and dark both complete. No horizontal overflow at 360px.
- Respect prefers-reduced-motion. Images have alt, width and height; hero image not lazy-loaded.
- Every field has a visible label. Document has lang, title, landmarks.
Avoid: gradients, glow, orbs, grids, glassmorphism on many surfaces, pill-shaped everything, pill labels above headings, "AI Powered"/"New"/"Beta" capsules, decorative status dots, sparkle/star/bolt/brain/robot icons, emoji, an arrow on every button, identical card grids for everything, "Trusted by" bars, "Most Popular" badges, fake timers, generic 3D art, generic FAQs, template phrases (Get Started, Learn More, Unlock, Seamless, Revolutionary, Supercharge, Empower), and patching files with scripts.
For the full rule set run `npx antislop-ai` in the repo (installs the skills for your agent). The repo's rules file is `antislop.md`; the UI skill is `skills/antislop-ui/SKILL.md`.

## 13. Removed from the AI reference screenshots (do not bring back)
"10K+ Happy Students", "4.9/5", "5K+ reviews"; named testimonials with photos; instructor card "Ali Raza, 5+ years"; "30 Days Money-Back Guarantee"; "Lifetime Access" and "Certificate Provided" (not in the feature document); prices 8,999 and discounts 50% or 67% (inconsistent); pill labels above headings; "Most Popular Course" badge and flame icon; arrow on every button; purple glow, glass cards, orbs; 3D brain art and floating tech logos; "Watch Intro" and "Watch Preview" video; newsletter signup; four round numbered steps.

## 14. Student portal (phase 3, frontend with mock data)
`AuthContext`: user (id, name, email, role, accountStatus, enrolledCourseSlug) or null; role guest | student | admin; signIn(role), signOut(). `src/lib/authAdapter.ts` is the only file that knows auth is fake, shaped so Clerk can replace it. Dev-only "Preview as" switch (import.meta.env.DEV). ProtectedRoute and RoleRoute. A student on an admin route sees a Not authorised page. Suspended or restricted accounts see an account-status page.
Screens: dashboard (welcome, four stat tiles, my course, class schedule, performance panel labelled "Updated by your instructor", announcements); course details; assignments (list, statuses Pending, Submitted, Under review, Reviewed, Resubmission required; .zip and source file input with validation; submission history); announcements (read and unread); profile (edit form, change password stub, account status).
Performance is written by the admin, never computed by the app. Mock data is obviously fake (Student One, student1@example.test).

## 15. Admin panel (phase 4, frontend with in-memory store)
All under /admin, admin role only. Reads and writes an in-memory store seeded from `src/data/mock.ts`; every mutation goes through `src/lib/adminApi.ts` with `TODO(backend)`.
Screens: dashboard (counts computed from the store), students (search, filters, drawer, warn, suspend, reactivate, restrict, confirmation dialogs), enrollments and fees (approve or reject, Paid, Unpaid, Partially paid, Pending verification, payment records), courses (the two only, modules, promotion with derived percentage), schedule, assignments (create, submissions, evaluate), performance (write and publish), announcements, testimonials (feed the Home section), website content (hero, banner, why-us, FAQs, contact, social, SEO), profile and settings.
No "make admin" control anywhere. No invoices, payment gateway, email sending, exams, or charts with made-up numbers.

## 16. Boundaries
- Frontend only. No Supabase, Clerk, database, edge functions, API keys or server code.
- Only the theme choice is saved in the browser.
- No blog, marketplace, multi-instructor, live streaming, affiliate pages, newsletter or chat widget.
- Do not invent facts: statistics, ratings, student counts, testimonials, instructor names, certificates, lifetime access, guarantees, lesson counts, hours. Hide it or ask the owner.
- Do not change the palette, radius set, elevation tiers or fonts.
- Do not install packages beyond gsap and lenis.
- Keep components small and typed, none over 200 lines. No dead code or lorem ipsum.
- If two instructions here conflict, stop and name the two lines before building.

## 17. Definition of done (run before every handoff)
Run the build. Click every interactive element in both themes at 360px and 1280px. Print a PASS or FAIL line per hard-gate rule with evidence. Fix every FAIL and rerun. Do not report performance numbers you did not measure.

## 18. Open questions for the owner
- Real prices, level and duration of each course.
- Offer end date (empty means no countdown and no "limited time" wording).
- Email, phone, WhatsApp, city, social links, announcement text.
- Transparent light-mode logo (navy "RARE" text).
- Hero photo (real, supplied by the academy) or use the built clay composition.
- Real About story, and real answers for: live or recorded classes, prerequisites, payment methods.

## 19. Phases
1. Website UI: Home, Courses, Course details, About, Contact, FAQs, navbar, footer, theme toggle, motion.
2. Authentication UI (mock now, Clerk later).
3. Student portal UI.
4. Admin panel UI.
5. Backend and integration (out of scope for now): schema, Clerk, role authorization, APIs, secure file storage, notifications, testing, deployment.
