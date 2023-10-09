import styles from "@/app/page.module.scss";
import LoginForm from "@/components/Form/LoginForm";

export default function Login() {
  return (
    <>
      <h1 className={styles.title}>Login Page</h1>
      <LoginForm />
    </>
  );
}
