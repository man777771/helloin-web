import { getPosts } from "@/lib/api";
import NewPost from "@/components/NewPost";
import PostCard from "@/components/PostCard";

export default async function FeedPage() {
  const posts = await getPosts();

  return (
    <div>
      <NewPost />
      {posts.map((p: any) => (
        <PostCard key={p.id} post={p} />
      ))}
    </div>
  );
}
