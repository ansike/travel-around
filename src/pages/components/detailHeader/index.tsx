"use client";
import style from "./style.module.css";
import Image from "next/image";
import Link from "next/link";

export default function DetailHeader() {
  return (
    <header
      className={`flex flex-shrink-0 justify-between items-center px-4 shadow-sm ${style.header} `}
    >
      <Link href="/home">
        <div className="flex items-center">
          <Image src="/svgs/icon.svg" alt="logo" width={20} height={20} />
          <Image
            className="ml-2"
            src="/imgs/zhoubianwan.png"
            alt="name"
            width={50}
            height={20}
          />
        </div>
      </Link>
      <Link href="/user">
        <Image src="/svgs/user.svg" alt="user" width={20} height={20} />
      </Link>
    </header>
  );
}
