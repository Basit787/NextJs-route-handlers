import { NextResponse, type NextRequest } from "next/server";

const middleware = (request: NextRequest) => {
  //   return NextResponse.redirect(new URL("/", request.url));
  if (request.nextUrl.pathname === "/profile") {
    return NextResponse.redirect(new URL("/", request.url));
  }
  const themePreference = request.cookies.get("theme"); // this is how we can set the cookies in middleware
  if (!themePreference) {
    request.cookies.set("theme", "dark");
  }
};

export default middleware;

export const config = {
  matcher: "/profile",
};
