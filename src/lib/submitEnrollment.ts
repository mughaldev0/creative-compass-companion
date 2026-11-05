import type { CourseSlug } from "@/data/site";

export interface EnrollmentPayload {
  course: CourseSlug;
  name: string;
  email: string;
  phone: string;
}

// TODO(backend): save the enrollment request and notify the academy. Currently a stub.
export async function submitEnrollment(_payload: EnrollmentPayload): Promise<{ ok: true }> {
  await new Promise((r) => setTimeout(r, 700));
  return { ok: true };
}
