import PostsList from "@/app/components/PostsList/PostsList";
import styles from "@/app/page.module.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Posts",
  description: "Page which consist the list of posts",
};

export default function Posts() {
  return (
    <>
      <h1 className={styles.title}>List of posts</h1>
      <PostsList />
    </>
  );
}
