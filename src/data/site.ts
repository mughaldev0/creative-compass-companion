// The only place site content lives. Empty values are hidden in the UI, never invented.

export type CourseSlug = "web-development" | "vibe-coding";

export interface Course {
  slug: CourseSlug;
  title: string;
  summary: string;
  description: string;
  level: string;
  duration: string;
  language: string;
  price: number;
  discountPrice: number;
  forWhom: string;
  whatTaught: string;
  afterwards: string;
  outcomes: string[];
  roadmap: { title: string; detail?: string }[];
  structure: { label: string; value: string }[];
}

export interface Testimonial {
  id: string;
  name: string;
  course: string;
  quote: string;
  isSample: boolean;
}

export const CONFIRMED_PER_BATCH = "Confirmed per batch";

export const site = {
  name: "Rare Skill Academy",
  tagline: "Learn. Practice. Build.",
  description:
    "Rare Skill Academy teaches two practical courses, Web Development and Vibe Coding, with real projects and a clear roadmap.",
  // Empty text means the bar is not rendered.
  announcement: { text: "", href: "" },
  // TODO(owner): fill in real contact details. Empty fields are hidden.
  contact: { email: "", phone: "", whatsapp: "", city: "" },
  social: [] as { label: string; href: string }[],
  offer: {
    // Empty end date: no countdown, no "limited time" wording.
    endDate: "",
  },
  // Only real numbers. Empty means nothing is shown beyond the course count.
  stats: [] as { label: string; value: string }[],
  benefits: [
    "Practical coding",
    "Project-based learning",
    "Student support",
    "Assignment evaluation",
    "Instructor feedback",
  ],
  courses: [
    {
      slug: "web-development",
      title: "Web Development",
      summary: "Build websites and web apps with HTML, CSS, JavaScript, React and Node.js.",
      description:
        "A practical path from your first web page to a full-stack project, built step by step with assignments along the way.",
      level: "Beginner to Advanced", // TODO(owner): confirm
      duration: "8+ weeks", // TODO(owner): confirm
      language: CONFIRMED_PER_BATCH,
      price: 4999, // TODO(owner): confirm
      discountPrice: 2999, // TODO(owner): confirm
      forWhom: "Anyone who wants to build websites, from complete beginners to people who know a little code.",
      whatTaught: "Front-end and back-end web development, from page structure to working APIs and a database.",
      afterwards: "Build and ship a full-stack web project of your own.",
      outcomes: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Full-stack development",
        "Practical projects",
      ],
      roadmap: [
        { title: "Web basics", detail: "HTML, CSS" },
        { title: "JavaScript" },
        { title: "React.js" },
        { title: "Backend", detail: "Node.js and APIs" },
        { title: "Final project" },
      ],
      structure: [
        { label: "Duration", value: "8+ weeks" },
        { label: "Class schedule", value: CONFIRMED_PER_BATCH },
        { label: "Weekly classes", value: CONFIRMED_PER_BATCH },
        { label: "Practical sessions", value: CONFIRMED_PER_BATCH },
        { label: "Assignments", value: CONFIRMED_PER_BATCH },
      ],
    },
    {
      slug: "vibe-coding",
      title: "Vibe Coding",
      summary: "Build real websites faster by working with AI coding tools and agents.",
      description:
        "Learn how to plan, prompt and guide AI coding tools so you can build and ship working websites and projects.",
      level: "Beginner to Advanced", // TODO(owner): confirm
      duration: "6+ weeks", // TODO(owner): confirm
      language: CONFIRMED_PER_BATCH,
      price: 4999, // TODO(owner): confirm
      discountPrice: 2999, // TODO(owner): confirm
      forWhom: "Learners who want to build with AI tools, whether or not they have written code before.",
      whatTaught: "AI-assisted development, prompt engineering and working with AI coding agents.",
      afterwards: "Plan and build a real website with AI tools, and know how to check the result.",
      outcomes: [
        "AI-assisted development",
        "AI coding tools",
        "Prompt engineering",
        "Website development using AI",
        "Working with AI coding agents",
        "Building real-world projects",
      ],
      roadmap: [
        { title: "What vibe coding is" },
        { title: "AI coding tools" },
        { title: "Prompt engineering" },
        { title: "Building websites with AI" },
        { title: "Working with AI coding agents" },
        { title: "Final project" },
      ],
      structure: [
        { label: "Duration", value: "6+ weeks" },
        { label: "Class schedule", value: CONFIRMED_PER_BATCH },
        { label: "Weekly classes", value: CONFIRMED_PER_BATCH },
        { label: "Practical sessions", value: CONFIRMED_PER_BATCH },
        { label: "Assignments", value: CONFIRMED_PER_BATCH },
      ],
    },
  ] satisfies Course[],
  whyUs: [
    { title: "Practical learning", line: "You write code in every class, not just watch it." },
    { title: "Industry-relevant skills", line: "The tools and stacks used on real projects today." },
    { title: "Project-based learning", line: "Each stage ends with something you built." },
    { title: "Expert guidance", line: "Ask questions and get direct help while you learn." },
    { title: "Real-world assignments", line: "Tasks shaped like the work you will be paid for." },
    { title: "Student performance monitoring", line: "Your progress is reviewed and fed back to you." },
  ],
  process: [
    "Select your course",
    "Complete enrollment",
    "Get access to the student portal",
    "Attend classes",
    "Complete assignments",
    "Receive performance feedback",
  ],
  // Empty array hides the testimonials section. Samples must set isSample: true.
  testimonials: [] as Testimonial[],
};

export const courses: Course[] = site.courses;

export function getCourse(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}

/** Discount percentage, always computed from the two prices. Never typed by hand. */
export function discountPercent(price: number, discountPrice: number): number {
  if (!price || discountPrice >= price || discountPrice < 0) return 0;
  return Math.round(((price - discountPrice) / price) * 100);
}

export function formatPKR(n: number): string {
  return `PKR ${n.toLocaleString("en-PK")}`;
}

export function hasOffer(): boolean {
  return courses.some((c) => discountPercent(c.price, c.discountPrice) > 0);
}

export function whatsappHref(): string {
  const n = site.contact.whatsapp.replace(/[^\d]/g, "");
  return n ? `https://wa.me/${n}` : "";
}
