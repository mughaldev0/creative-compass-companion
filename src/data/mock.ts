// DEMO DATA ONLY. Stands in for the backend so portal and admin screens can be built and tested.
// Every person here is a placeholder ("Demo student"), not a real student.
// TODO(backend): replace with API calls once the database and Clerk are connected.
import type { CourseSlug } from "./site";

export type Role = "guest" | "student" | "admin";
export type AccountStatus = "Active" | "Suspended" | "Restricted";
export type PaymentStatus = "Paid" | "Unpaid" | "Partially paid" | "Pending verification";
export type EnrollmentStatus = "Pending" | "Approved" | "Rejected";
export type AssignmentStatus = "Pending" | "Submitted" | "Under review" | "Reviewed" | "Resubmission required";

export interface Student {
  id: string;
  name: string;
  email: string;
  phone: string;
  course: CourseSlug;
  enrolledOn: string;
  courseStatus: "In progress" | "Completed" | "Not started";
  payment: PaymentStatus;
  paid: number;
  account: AccountStatus;
  warnings: { date: string; note: string }[];
}

export interface Enrollment {
  id: string;
  studentId: string;
  course: CourseSlug;
  date: string;
  status: EnrollmentStatus;
  payment: PaymentStatus;
  paid: number;
  method: string;
  reference: string;
  notes: string;
}

export interface ClassSession {
  id: string;
  course: CourseSlug;
  date: string;
  time: string;
  topic: string;
  link: string;
}

export interface Submission {
  id: string;
  file: string;
  date: string;
  note: string;
  review: "Not reviewed" | "Reviewed";
  remarks: string;
}

export interface Assignment {
  id: string;
  course: CourseSlug;
  studentIds: string[] | "all";
  title: string;
  description: string;
  instructions: string;
  assigned: string;
  deadline: string;
  status: Record<string, AssignmentStatus>;
  submissions: Record<string, Submission[]>;
  score: Record<string, string>;
}

export interface Announcement {
  id: string;
  title: string;
  body: string;
  date: string;
  important: boolean;
  course: CourseSlug | "all";
  readBy: string[];
}

export interface PerformanceReport {
  studentId: string;
  overall: string;
  assignments: string;
  projects: string;
  attendance: string;
  strengths: string;
  weaknesses: string;
  suggestions: string;
  remarks: string;
  published: boolean;
  updated: string;
}

export interface AdminTestimonial {
  id: string;
  name: string;
  course: CourseSlug;
  text: string;
  rating: number;
  published: boolean;
}

export interface Module {
  id: string;
  course: CourseSlug;
  title: string;
  topics: string[];
}

export interface DemoUser {
  id: string;
  name: string;
  email: string;
  password: string;
  role: Exclude<Role, "guest">;
  studentId?: string;
}

export interface DemoDB {
  students: Student[];
  enrollments: Enrollment[];
  sessions: ClassSession[];
  assignments: Assignment[];
  announcements: Announcement[];
  reports: PerformanceReport[];
  testimonials: AdminTestimonial[];
  modules: Module[];
  coursePublished: Record<CourseSlug, boolean>;
}

export const demoUsers: DemoUser[] = [
  { id: "u1", name: "Demo Student", email: "student@demo.test", password: "demo1234", role: "student", studentId: "RSA-001" },
  { id: "u2", name: "Demo Admin", email: "admin@demo.test", password: "demo1234", role: "admin" },
  { id: "u3", name: "Demo Student 3", email: "suspended@demo.test", password: "demo1234", role: "student", studentId: "RSA-003" },
];

const s = (n: number, course: CourseSlug, extra: Partial<Student> = {}): Student => ({
  id: `RSA-00${n}`,
  name: n === 1 ? "Demo Student" : `Demo Student ${n}`,
  email: n === 1 ? "student@demo.test" : n === 3 ? "suspended@demo.test" : `student${n}@demo.test`,
  phone: `0300 000000${n}`,
  course,
  enrolledOn: `2026-10-0${n}`,
  courseStatus: "In progress",
  payment: "Paid",
  paid: 2999,
  account: "Active",
  warnings: [],
  ...extra,
});

export const initialDB: DemoDB = {
  students: [
    s(1, "web-development"),
    s(2, "vibe-coding", { payment: "Partially paid", paid: 1500 }),
    s(3, "web-development", { account: "Suspended", payment: "Unpaid", paid: 0, warnings: [{ date: "2026-10-20", note: "Fee overdue." }] }),
    s(4, "vibe-coding", { payment: "Pending verification", paid: 0, courseStatus: "Not started" }),
  ],
  enrollments: [
    { id: "E1", studentId: "RSA-001", course: "web-development", date: "2026-10-01", status: "Approved", payment: "Paid", paid: 2999, method: "Bank transfer", reference: "DEMO-TX-01", notes: "" },
    { id: "E2", studentId: "RSA-002", course: "vibe-coding", date: "2026-10-02", status: "Approved", payment: "Partially paid", paid: 1500, method: "Mobile wallet", reference: "DEMO-TX-02", notes: "Second half due." },
    { id: "E3", studentId: "RSA-003", course: "web-development", date: "2026-10-03", status: "Approved", payment: "Unpaid", paid: 0, method: "", reference: "", notes: "" },
    { id: "E4", studentId: "RSA-004", course: "vibe-coding", date: "2026-10-04", status: "Pending", payment: "Pending verification", paid: 0, method: "Bank transfer", reference: "DEMO-TX-04", notes: "" },
  ],
  sessions: [
    { id: "C1", course: "web-development", date: "2026-11-10", time: "19:00", topic: "Flexbox and grid", link: "" },
    { id: "C2", course: "web-development", date: "2026-11-13", time: "19:00", topic: "JavaScript basics", link: "" },
    { id: "C3", course: "vibe-coding", date: "2026-11-11", time: "20:00", topic: "Writing a first prompt brief", link: "" },
  ],
  assignments: [
    {
      id: "A1", course: "web-development", studentIds: "all", title: "Build a personal profile page",
      description: "A single HTML and CSS page about yourself.", instructions: "Use semantic HTML. Submit a ZIP of your folder.",
      assigned: "2026-10-15", deadline: "2026-11-20",
      status: { "RSA-001": "Pending", "RSA-003": "Pending" }, submissions: {}, score: {},
    },
    {
      id: "A2", course: "web-development", studentIds: "all", title: "Responsive layout exercise",
      description: "Recreate the given layout so it works on phone and desktop.", instructions: "Submit a ZIP with index.html and styles.css.",
      assigned: "2026-10-05", deadline: "2026-10-12",
      status: { "RSA-001": "Reviewed", "RSA-003": "Pending" },
      submissions: { "RSA-001": [{ id: "S1", file: "layout.zip", date: "2026-10-11", note: "First attempt.", review: "Reviewed", remarks: "Good structure. Check spacing on small screens." }] },
      score: { "RSA-001": "Good" },
    },
    {
      id: "A3", course: "vibe-coding", studentIds: "all", title: "Prompt brief for a landing page",
      description: "Write a one-page brief an AI coding tool could build from.", instructions: "Submit as a text or markdown file.",
      assigned: "2026-10-20", deadline: "2026-11-18",
      status: { "RSA-002": "Submitted", "RSA-004": "Pending" },
      submissions: { "RSA-002": [{ id: "S2", file: "brief.md", date: "2026-10-25", note: "", review: "Not reviewed", remarks: "" }] },
      score: {},
    },
  ],
  announcements: [
    { id: "N1", title: "Class moved to Thursday", body: "This week's class moves to Thursday at the same time.", date: "2026-11-03", important: true, course: "web-development", readBy: [] },
    { id: "N2", title: "Welcome to the portal", body: "Your schedule, assignments and feedback all live here.", date: "2026-10-01", important: false, course: "all", readBy: [] },
  ],
  reports: [
    { studentId: "RSA-001", overall: "Good", assignments: "Good", projects: "Not started", attendance: "Regular", strengths: "Clean HTML structure.", weaknesses: "Spacing on small screens.", suggestions: "Practise mobile-first CSS.", remarks: "Keep going.", published: true, updated: "2026-10-28" },
  ],
  testimonials: [],
  modules: [
    { id: "M1", course: "web-development", title: "Web basics", topics: ["HTML structure", "CSS styling"] },
    { id: "M2", course: "web-development", title: "JavaScript", topics: ["Variables and functions", "DOM"] },
    { id: "M3", course: "vibe-coding", title: "AI coding tools", topics: ["Choosing a tool", "Setting up a project"] },
  ],
  coursePublished: { "web-development": true, "vibe-coding": true },
};
