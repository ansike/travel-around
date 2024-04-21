"use client";
import { Button, Image, Toast } from "antd-mobile";
import { RightOutline } from "antd-mobile-icons";

export default function Home() {
  return (
    <main className="flex w-screen flex-col items-center bg-gray-300 h-full pb-20 relative">
      <div className="flex flex-row items-center justify-start p-8 py-10 w-full bg-white">
        <div className="rounded-xl border-solid border-2 p-2 mr-5">
          <Image src="/svgs/avatar.svg" alt="avatar" width={40} />
        </div>
        <div className="flex flex-col">
          <span className="text-2xl">name</span>
          <span className="text-sm mt-1">手机号：</span>
        </div>
      </div>
      <div className="mt-6 w-full px-8 bg-white">
        <div
          onClick={() => {
            Toast.show("功能开发中");
          }}
          className="mb-1  h-10 text-base flex items-center border-b justify-between"
        >
          常用信息
          <RightOutline />
        </div>
        <div
          onClick={() => {
            Toast.show("功能开发中");
          }}
          className="mb-1  h-10 text-base flex items-center border-b justify-between"
        >
          关于我们
          <RightOutline />
        </div>
        <div
          onClick={() => {
            Toast.show("功能开发中");
          }}
          className="mb-1  h-10 text-base flex items-center border-b justify-between"
        >
          用户协议
          <RightOutline />
        </div>
        <div
          onClick={() => {
            Toast.show("功能开发中");
          }}
          className=" h-10 text-base flex items-center justify-between"
        >
          常见问题
          <RightOutline />
        </div>
      </div>
      <div className="mt-3 text-base flex items-center px-8  w-full justify-center absolute bottom-2">
        <Button style={{ height: 40 }} className="w-full " color="primary">
          退出登录
        </Button>
      </div>
    </main>
  );
}
