import Link from "next/link";
import styles from "./Pagination.module.scss";

type Props = { total: number };

export default function Pagination({ total }: Props) {
  const pages = Array.from({ length: total }, (_, index) => index + 1);

  return (
    <ul className={styles.list}>
      {pages.map((item) => (
        <li key={item} className={styles.item}>
          <Link href={`/posts?page=${item}`}>{item}</Link>
        </li>
      ))}
    </ul>
  );
}
