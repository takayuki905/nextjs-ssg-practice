// app/error.tsx の例
"use client"; // エラーコンポーネントは必ずクライアントコンポーネント

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // エラーログサービスに送信するなどの処理
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>予期せぬエラーが発生しました！</h2>
      <button onClick={() => reset()}>再試行する</button>
    </div>
  );
}
