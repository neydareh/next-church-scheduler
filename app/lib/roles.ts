import type { SessionData } from "@auth0/nextjs-auth0/types";

export function getRoles(
  user: SessionData["user"] | undefined | null
): string[] {
  if (!user) return [];
  const ns = process.env.NEXT_PUBLIC_AUTH0_NAMESPACE || "https://example.com/";
  const claim = `${ns.replace(/\/$/, "")}/roles`;
  const roles = (user as any)[claim];
  if (Array.isArray(roles)) return roles as string[];
  const maybe = Object.entries(user).find(([k]) => /roles$/i.test(k));
  return Array.isArray(maybe?.[1]) ? (maybe![1] as string[]) : [];
}

export function hasRole(
  user: SessionData["user"] | undefined | null,
  role: string
) {
  return getRoles(user).includes(role);
}
