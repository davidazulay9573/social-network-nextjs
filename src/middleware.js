export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/posts/:path*", "/users/:path*", "/personal/:path*"],

};
