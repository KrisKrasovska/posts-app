import Link from "next/link";
import styles from "./Pagination.module.scss";

export default function Pagination() {
  return (
    <ul className={styles.list}>
      {[1, 2, 3].map((item) => (
        <li key={item} className={styles.item}>
          <Link href={`/posts?page=${item}`}>{item}</Link>
        </li>
      ))}
    </ul>
  );
}
