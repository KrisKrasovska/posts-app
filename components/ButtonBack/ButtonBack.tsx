"use client";
import styles from "./ButtonBack.module.scss";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export default function ButtonBack() {
  const router = useRouter();

  const handleGoBack = useCallback(() => {
    router.back();
  }, [router]);
  return (
    <button className={styles.btn} type="button" onClick={handleGoBack}>
      Go back
    </button>
  );
}
