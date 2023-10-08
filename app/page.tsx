import styles from "./page.module.scss";
import Form from "./components/Form/Form";

export default function Home() {
  return (
    <>
      <h1 className={styles.title}>Main Page</h1>
      <Form />
    </>
  );
}
