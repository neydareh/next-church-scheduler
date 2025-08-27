export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/api/:path*",
    // leave home public
  ],
};
