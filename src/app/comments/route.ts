import { NextRequest } from "next/server";
import { comments } from "./data";

//get method in next js with query parameters
export const GET = async (request: NextRequest) => {
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
    },
    status: 201,
  });
};
