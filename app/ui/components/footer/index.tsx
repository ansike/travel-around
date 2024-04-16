'use client'
import Link from "next/link";
import style from "./style.module.css";

export default function Footer() {
  return (
    <footer className={`flex flex-shrink-0 border-t items-center justify-around px-5 ${style.footer}`}>
      <Link href="/home">集锦</Link><br />
      <Link href="/activity">活动</Link><br />
      <Link href="/user">我的</Link>
    </footer>
  );
}
