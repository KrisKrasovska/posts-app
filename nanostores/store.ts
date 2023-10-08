import { ProfileValue } from "@/types/types";
import { map } from "nanostores";

export const $profile = map<ProfileValue>({
  name: "admin",
  email: "admin@com",
  password: "admin",
});
