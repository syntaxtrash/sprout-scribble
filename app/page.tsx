import createPost from "@/server/actions/create-posts";
import getPosts from "@/server/actions/get-posts";

export default async function Home() {
  const posts = await getPosts();
  return (
    <main>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h1>{post.title}</h1>
          </div>
        );
      })}
      <form action={createPost}>
        <input type="text" name="title" placeholder="title"/>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
