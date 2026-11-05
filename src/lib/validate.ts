export const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
export const isPhone = (v: string) => /^[+\d][\d\s-]{6,}$/.test(v.trim());
export const required = (v: string, label: string) => (v.trim() ? "" : `${label} is required.`);
