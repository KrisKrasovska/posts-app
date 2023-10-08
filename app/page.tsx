import Link from "next/link";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Main Page</h1>
      <Link href="/posts">To posts</Link>
    </main>
  );
}
