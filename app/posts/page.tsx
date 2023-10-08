import PostsList from "@/app/components/PostsList/PostsList";
import styles from "@/app/page.module.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Posts",
  description: "Page which consist the list of posts",
};

type Props = { searchParams: { [key: string]: string | string[] | undefined } };

export default function Posts({ searchParams }: Props) {
  const { page } = searchParams;

  return (
    <>
      <h1 className={styles.title}>List of posts</h1>
      <PostsList page={page} />
    </>
  );
}
