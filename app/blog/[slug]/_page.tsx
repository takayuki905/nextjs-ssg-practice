import { prisma } from "@/lib/prisma"; // Prismaクライアントのインポート
import { notFound } from "next/navigation";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

// 1. 記事を取得する関数の定義
async function getPost(slug: string) {
  // Prismaを使って、URLのslugと一致する記事を1件取得
  const post = await prisma.post.findUnique({
    where: {
      slug: slug,
    },
  });

  // 記事が見つからない場合は、Next.js専用の404ページを表示させる
  if (!post) {
    notFound();
  }

  return post;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
