"use client"; // 必須！

import { useRouter } from "next/navigation"; // next/router ではない点に注意

export default function ContactButton() {
  const router = useRouter();

  const handleClick = () => {
    // ここで送信処理などを実行...
    console.log("送信完了！");

    // トップページへ遷移
    router.push("/");
  };

  return (
    <button
      onClick={handleClick}
      className="bg-gray-800 text-white px-4 py-2 rounded mt-4 cursor-pointer"
    >
      送信して戻る
    </button>
  );
}
