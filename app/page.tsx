import Link from "next/link";
export const runtime = "edge";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link href="/user">Users</Link>
      <br />
      <Link href="/blogs">Blogs</Link>
    </>
  );
}
