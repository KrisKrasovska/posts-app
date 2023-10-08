"use client";
import { $profile, logIn } from "@/nanostores/store";
import { useStore } from "@nanostores/react";
import React, { useCallback, useEffect, useMemo } from "react";
import styles from "./Form.module.scss";
import { useRouter } from "next/navigation";

export default function Form() {
  const profile = useStore($profile);
  const router = useRouter();

  const shouldRedirect = useMemo(() => {
    return profile.email !== "" && profile.password !== "";
  }, [profile.email, profile.password]);

  useEffect(() => {
    if (shouldRedirect) {
      router.push("/posts?page=1");
    }
  }, [shouldRedirect, router]);

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const emailInput = target.elements.namedItem("email") as HTMLInputElement;
    const passwordInput = target.elements.namedItem(
      "password"
    ) as HTMLInputElement;

    const newData = { email: emailInput.value, password: passwordInput.value };
    logIn(newData);
    emailInput.value = "";
    passwordInput.value = "";
  }, []);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="email"
        name="email"
        placeholder="Email"
      />
      <input
        className={styles.input}
        type="password"
        name="password"
        placeholder="Password"
        required
      />
      <button type="submit" className={styles.btn}>
        Log in
      </button>
    </form>
  );
}
