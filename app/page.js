"use client"

import Image from "next/image";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export default function Home() {
  const {setTheme} = useTheme();
  return (
    <div>
      <h2>Welcome to Next.js!</h2>
      <Button>Click me</Button>
      <Button onClick={() => setTheme("dark")}>Dark Mode</Button>
      <Button onClick={() => setTheme("light")}>Light Mode</Button>
    </div>
  );
}
