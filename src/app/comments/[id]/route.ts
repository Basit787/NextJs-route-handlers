import { redirect } from "next/navigation";
import { comments } from "../data";

//get single method in next js
export const GET = async (
  _request: Request,
  { params }: { params: { id: string } }
) => {
  if (parseInt(params.id) > comments.length) {
    //this is known as redirect of routes, though we can redirect the route handlers for better ux instead of error W
    redirect("/comments");
  }
  const comment = comments.find(
    (comment) => comment.id === parseInt(params.id)
  );
  return Response.json(comment);
};

//update method in next js
export const PATCH = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const { text } = await request.json();

  const updateIndex = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );
  comments[updateIndex].text = text;
  return Response.json(comments[updateIndex]);
};

//delete method in next js
export const DELETE = async (
  _request: Request,
  { params }: { params: { id: string } }
) => {
  const index = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );
  const deleteComment = comments[index];
  comments.splice(index, 1);
  return Response.json(deleteComment);
};
