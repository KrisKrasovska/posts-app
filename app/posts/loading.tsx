"use client";

import styles from "./../page.module.scss";

import { useEffect } from "react";
import { useStore } from "@nanostores/react";
import { $profile } from "@/nanostores/store";
import { redirect } from "next/navigation";

export default function Loading() {
  const profile = useStore($profile);

  useEffect(() => {
    if (profile.token === "") {
      redirect("/login");
    }
  }, [profile]);

  return (
    <div className={styles.container}>
      <p>Loading...</p>
    </div>
  );
}
