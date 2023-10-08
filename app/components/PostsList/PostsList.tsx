import { Post } from "@/types/types";
import styles from "./PostsList.module.scss";
import PostItem from "../PostItem/PostItem";

export default async function PostsList() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  const data = await res.json();

  return (
    <>
      <ul className={styles.list}>
        {data.map((post: Post) => (
          <PostItem post={post} key={post.id} />
        ))}
      </ul>
    </>
  );
}
