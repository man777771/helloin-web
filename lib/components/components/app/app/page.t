export default function Home() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl font-bold">Welcome to HelloIn 🚀</h1>
      <p className="mt-2 text-gray-600">A mini Facebook-like app</p>
      <a href="/feed" className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded">
        Go to Feed
      </a>
    </div>
  );
}
