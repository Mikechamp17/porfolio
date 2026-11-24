export type EmailLink = {
  label: "Email";
  href: string;
  value: string;
};

const PLACEHOLDER = /example\.com|replace|todo|your_/i;

export function resolveEmail(
  raw: string | undefined = process.env.NEXT_PUBLIC_CONTACT_EMAIL,
): EmailLink | null {
  const value = (raw ?? "").trim();
  if (!value || PLACEHOLDER.test(value) || /\s/.test(value)) return null;
  const [local, domain, extra] = value.split("@");
  if (extra !== undefined || !local || !domain) return null;
  return { label: "Email", href: `mailto:${value}`, value };
}
