import PostsList from "@/app/components/PostsList/PostsList";
import styles from "@/app/page.module.scss";

export default function Posts() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>List of posts</h1>
      <PostsList />
    </main>
  );
}
