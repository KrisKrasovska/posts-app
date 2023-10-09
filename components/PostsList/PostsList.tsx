import { Post } from "@/types/types";
import styles from "./PostsList.module.scss";
import PostItem from "../PostItem/PostItem";
import Pagination from "../Pagination/Pagination";
import axios from "axios";

type Props = {
  page: string | string[] | undefined;
};

export default async function PostsList({ page }: Props) {
  const [resAll, res] = await Promise.all([
    axios.get(`https://jsonplaceholder.typicode.com/posts`, {
      headers: {
        "Cache-Control": "no-store",
      },
    }),
    axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}`, {
      headers: {
        "Cache-Control": "no-store",
      },
    }),
  ]);
  const totalPage = Number(resAll.data.length / 10);
  const { data } = res;

  return (
    <>
      <ul className={styles.list}>
        {data.map((post: Post) => (
          <PostItem post={post} key={post.id} />
        ))}
      </ul>
      <Pagination total={totalPage} />
    </>
  );
}
