import { Post } from "@/types/types";
import styles from "./PostsList.module.scss";
import PostItem from "../PostItem/PostItem";
import Pagination from "../Pagination/Pagination";

type Props = {
	page: string | string[] | undefined ;
}

export default async function PostsList({page}:Props) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?page=${page}`, {
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
      <Pagination />
    </>
  );
}
