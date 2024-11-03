export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/play/:path*",
    "/rules/:path*",
  ],
};