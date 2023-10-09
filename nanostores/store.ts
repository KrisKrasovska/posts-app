import { ProfileValue } from "@/types/types";
import { map } from "nanostores";

export const $profile = map<ProfileValue>({
  email: "",
  password: "",
  token: "",
});

export function logIn({ email, token, password }: ProfileValue) {
  $profile.set({ email, token, password });
}
