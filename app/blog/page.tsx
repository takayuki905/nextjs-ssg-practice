import Link from "next/link";

// 1. APIから返ってくるデータ（記事）の型定義
type Post = {
  id: number;
  title: string;
  // 必要に応じて他のプロパティを追加してください (例: createdAt, excerpt など)
};

export default async function PostsListPage() {
  // 2. APIから記事一覧を取得
  const res = await fetch(`${process.env.API_BASE_URL}/posts`, {
    // 補足: SSGにする場合は 'force-cache'、ISRにする場合は next: { revalidate: 60 } などを設定します
    cache: "force-cache",
  });

  if (!res.ok) {
    // エラーハンドリング
    return <div>記事の取得に失敗しました。</div>;
  }

  const allPosts: Post[] = await res.json();

  // 4. 一覧を描画
  return (
    <main style={{ padding: "2rem" }}>
      <h1>最新の記事</h1>
      <ul>
        {allPosts.map((post) => (
          <li key={post.id} style={{ marginBottom: "1rem" }}>
            {/* 個別記事ページ（SSGで生成したページ）へのリンク */}
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
