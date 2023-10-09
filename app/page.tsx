import Link from "next/link";
import styles from "./page.module.scss";
import RegisterForm from "@/components/Form/RegisterForm";

export default function Home() {
  return (
    <>
      <h1 className={styles.title}>Main Page</h1>
      <RegisterForm />
      <Link className={styles.link} href="/login">
        To Login Page
      </Link>
    </>
  );
}
