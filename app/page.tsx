'use client'

import Image from "next/image";
import About from "./sample";
import { redirect } from "next/navigation";


export default function Home() {
  return redirect('/dashboard');
}
