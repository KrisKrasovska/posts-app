"use client";
import { logIn } from "@/nanostores/store";
import React, { useCallback } from "react";
import styles from "./Form.module.scss";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function LoginForm() {
  const router = useRouter();

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const target = e.target as HTMLFormElement;
      const emailInput = target.elements.namedItem("email") as HTMLInputElement;
      const passwordInput = target.elements.namedItem(
        "password"
      ) as HTMLInputElement;

      const newData = {
        email: emailInput.value,
        password: passwordInput.value,
      };

      const resp = await axios.post("http://localhost:3000/login", newData);
      if (resp.data.accessToken) {
        logIn(newData);
        router.push("/posts?page=1");
      }
      emailInput.value = "";
      passwordInput.value = "";
    },
    [router]
  );

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
