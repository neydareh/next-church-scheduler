import { User } from "../shared/schema";

export function getRoles(user: User): string[] {
  if (!user) return [];
  const ns = process.env.NEXT_PUBLIC_AUTH0_NAMESPACE || "https://example.com/";
  const claim = `${ns.replace(/\/$/, "")}/roles`;
  const roles = (user as any)[claim];
  if (Array.isArray(roles)) return roles as string[];
  const maybe = Object.entries(user).find(([k]) => /roles$/i.test(k));
  return Array.isArray(maybe?.[1]) ? (maybe![1] as string[]) : [];
}

export function hasRole(user: User, role: string) {
  return getRoles(user).includes(role);
}
