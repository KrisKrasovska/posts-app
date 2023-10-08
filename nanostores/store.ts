import { ProfileValue } from "@/types/types";
import { map } from "nanostores";

export const $profile = map<ProfileValue>({
  email: "",
  password: "",
});

export function logIn({ email, password }: ProfileValue) {
  $profile.set({ email, password });
}
