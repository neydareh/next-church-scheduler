export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/api/(?!auth).*"], // match all API routes except NextAuth's
};
