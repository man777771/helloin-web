type Post = { id: number; user: string; content: string; likes: number };

export default function PostCard({ post }: { post: Post }) {
  return (
    <div className="bg-white/5 rounded-xl p-4 mb-3">
      <div className="font-medium">{post.user}</div>
      <p className="mt-2">{post.content}</p>
      <div className="text-sm opacity-70 mt-2">❤️ {post.likes}</div>
    </div>
  );
}
