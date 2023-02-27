import type { Metadata } from "next";

import HomePage from "./home-page";

export const metadata: Metadata = {
  title: "Casey Murtaugh - Artist and Educator",
};

export default async function Page() {
  return <HomePage />;
}
