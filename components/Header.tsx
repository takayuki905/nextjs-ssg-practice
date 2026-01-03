import Link from "next/link";

export default function Header() {
  // ← ここに "default" が必要
  return (
    <header className="p-4 bg-gray-100 border-b flex gap-6">
      <Link href="/" className="font-bold hover:text-blue-600">
        Home
      </Link>
      <Link href="/about" className="hover:text-blue-600">
        About
      </Link>
      <Link href="/blog" className="hover:text-blue-600">
        Blog
      </Link>
    </header>
  );
}
