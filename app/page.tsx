import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

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
