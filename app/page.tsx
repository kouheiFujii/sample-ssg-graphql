import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">SSG サンプルアプリケーション</h1>
      <Link
        className="text-blue-500 hover:text-blue-700 text-xl"
        href="/pokemon"
      >
        /pokemon
      </Link>
    </div>
  );
}
