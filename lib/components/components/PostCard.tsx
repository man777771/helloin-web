export default function PostCard({ post }: { post: any }) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow mb-4">
      <h3 className="font-bold">{post.user}</h3>
      <p>{post.content}</p>
      <p className="text-sm text-gray-500">❤️ {post.likes}</p>
    </div>
  );
}
