import { ProfileValue } from "@/types/types";
import { map } from "nanostores";

export const $profile = map<ProfileValue>({
  email: "",
  token: "",
});

export function logIn({ email, token }: ProfileValue) {
  $profile.set({ email, token });
}
