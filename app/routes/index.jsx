import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import connectDb from "~/db/dbConnection.server";

export async function loader() {
  const db = connectDb()
  const posts = await db.models.Post.find()
  return json(posts)
}

export default function Index() {
  const posts = useLoaderData()
  console.log(posts[0])

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1 className="text-3xl font-bold underline">Welcome</h1>
      <p>POSTS: { posts[0].starredBy[0] }</p>
    </div>
  );
}