import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

// --- 1. SSG する対象のリストを API から取得 ---
export async function generateStaticParams() {
  // API から記事一覧を取得
  const res = await fetch(`${process.env.API_BASE_URL}/posts`);
  const posts = await res.json();

  // URL（slug）の配列を返すことで、ビルド時にこれらのページが生成される
  return posts.map((post: { id: number | string }) => ({
    slug: String(post.id),
  }));
}

// --- 2. 各ページの中身を API から取得 ---
async function getPost(slug: string) {
  const res = await fetch(`${process.env.API_BASE_URL}/posts/${slug}`, {
    // SSG なので基本は cache: 'force-cache' (デフォルト)
    // 頻繁に更新したいなら next: { revalidate: 3600 } などを指定
    // cache: "no-store",
  });

  if (!res.ok) return null;
  return res.json();
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) notFound();

  return (
    <main>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.body }} />
    </main>
  );
}
