import { Post } from "@/types/types";
import styles from "./PostItem.module.scss";
import Link from "next/link";

interface Props {
  post: Post;
}

export default function PostItem({ post }: Props) {
  const { id, title } = post;
  return (
    <li key={id}>
      <Link href={`/posts/${id}`} className={styles.itemText}>
        {id}. {title}
      </Link>
    </li>
  );
}
