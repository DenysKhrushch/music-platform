import React from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/sign-in");
  }, [router]);
  return <></>;
}
