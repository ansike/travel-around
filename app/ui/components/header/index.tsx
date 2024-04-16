"use client";
import style from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isSecondPage = pathname?.includes("detail");
  const router = useRouter();
  return (
    <header
      className={`flex flex-shrink-0 justify-between items-center px-4 shadow-sm ${style.header} `}
    >
      {isSecondPage ? (
        <div
        className="flex items-center"
          onClick={() => {
            router.back();
          }}
        >
          <Image src="/svgs/back.svg" alt="back icon" width="14" height="10" />
          <span className="text-sm">

          返回
          </span>
        </div>
      ) : (
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
      )}
      {!isSecondPage && (
        <Link href="/user">
          <Image src="/svgs/user.svg" alt="user" width={20} height={20} />
        </Link>
      )}
    </header>
  );
}
