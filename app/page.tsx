import Link from "next/link"; // 必ず next/link からインポート

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Home ページ</h1>

      <div className="flex gap-4">
        <Link
          href="/about"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Aboutへ
        </Link>

        <Link
          href="/blog"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Blogへ
        </Link>
      </div>
    </div>
  );
}
