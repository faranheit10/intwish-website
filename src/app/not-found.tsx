import { redirect } from "next/navigation";

/** Unknown locales are handled by the middleware; root 404 redirects home. */
export default function RootNotFound() {
  redirect("/");
}
