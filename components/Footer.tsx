import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* サイト名やロゴ */}
          <div>
            <Link href="/" className="text-xl font-bold text-gray-800">
              My Blog
            </Link>
            <p className="text-sm text-gray-500 mt-1">
              日々の学びを記録するブログ
            </p>
          </div>

          {/* シンプルなナビゲーション */}
          <nav>
            <ul className="flex gap-6 text-sm text-gray-600">
              <li>
                <Link href="/" className="hover:text-blue-600 transition">
                  ホーム
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-blue-600 transition">
                  記事一覧
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* コピーライト */}
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-xs text-gray-400">
            &copy; {currentYear} My Blog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
