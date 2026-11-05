export interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

// TODO(backend): send the message to the academy (email or database). Currently a stub.
export async function submitContact(_payload: ContactPayload): Promise<{ ok: true }> {
  await new Promise((r) => setTimeout(r, 700));
  return { ok: true };
}
