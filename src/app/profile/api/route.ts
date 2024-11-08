import { cookies, headers } from "next/headers";
import { type NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  //first method to read the headers
  const requestHeaders = new Headers(request.headers);
  console.log(requestHeaders.get("Content-Type"));

  //another method to read the headers
  const headersList = headers();
  const result = (await headersList).get("Authorization");
  console.log("result", result);

  //1st way to get the cookies using "Set-Cookie" and function request.cookie.get(key of cookie)
  const theme = request.cookies.get("theme");
  console.log(theme);

  //another way to set the cookie using cookie method
  (await cookies()).set("name", "john");

  //this is the another method top get the cookies data
  const cookieData = (await cookies()).get("name");
  console.log("cookies", cookieData);

  return new Response("<h1>This is profile data BE</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark", // used to send the cookies
    },
  });
};
