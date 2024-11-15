import { NextRequest } from "next/server";
import { comments } from "./data";
// import { cookies } from "next/headers";

//get method in next js with query parameters
export const GET = async (request: NextRequest) => {
  /*  
  * // log for getting the cookie using request
  const name = request.cookies.get("name");
  console.log("name", name);

  * // another way to set the cookies using cookies() from 'next/headers'
  (await cookies()).set("name", "boss");

  * // another way to get the cookies from tghe cookies store
  const nameBoss = (await cookies()).get("name");
  console.log(nameBoss); 
  */

  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const filteredComments = query
    ? comments.filter((comment) => comment.text.includes(query))
    : comments;
  return Response.json(filteredComments);
};

//post method in next js
export const POST = async (req: Request) => {
  const { text } = await req.json();

  const newComment = {
    id: comments.length + 1,
    text: text,
  };

  comments.push(newComment);

  return new Response(JSON.stringify(newComment), {
    headers: {
      "Content-Type": "application/json",
      /* 
      // way to set the cookies in the cookie store  
      "Set-Cookie": "name=Basit", 
      */
    },
    status: 201,
  });
};
