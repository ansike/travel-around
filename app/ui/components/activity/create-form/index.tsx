"use client";

import { login } from "@/lib/actions/auth";
import { Button, Input } from "antd-mobile";
import { useFormState, useFormStatus } from "react-dom";
import Quill from "quill";
import "quill/dist/quill.core.css";
import { useEffect, useLayoutEffect } from "react";
import MyEditor from "../../my-editor";

export function LoginButton() {
  const { pending } = useFormStatus();

  useLayoutEffect(() => {
    const options = {
      debug: "info",
      modules: {
        toolbar: true,
      },
      placeholder: "Compose an epic...",
      theme: "snow",
    };
    const quill = new Quill("#editor", options);
  }, []);

  return (
    <Button
      aria-disabled={pending}
      type="submit"
      color="primary"
      className="w-full rounded-full"
      style={{ borderRadius: 20, marginTop: 20, height: 36 }}
    >
      {pending ? "登录中..." : "登录"}
    </Button>
  );
}

export function CreateActivityForm() {
  const [state, action] = useFormState(login, undefined);
  return (
    <>
      {/* <form action={action} className="mt-10 w-72">
        <Input
          autoComplete="off"
          className="peer block w-full cursor-pointer rounded-md py-2 px-4 text-sm outline-2 placeholder:text-gray-500 "
          style={{ background: "#F7F8FA", color: "#969799", letterSpacing: 2 }}
          inputMode="numeric"
          id="phone"
          name="phone"
          placeholder="请输入手机号"
          maxLength={11}
        />
        {state?.errors?.phone && (
          <p className="text-red-400 mt-1">{state.errors.phone}</p>
        )}
        <Input
          autoComplete="new-password"
          style={{ background: "#F7F8FA", color: "#969799", letterSpacing: 2 }}
          id="password"
          name="password"
          type="password"
          className="peer block w-full cursor-pointer rounded-md py-2 px-4 text-sm outline-2 placeholder:text-gray-500 mt-4"
          placeholder="请输入密码"
        />
        {state?.errors?.password && (
          <div className="text-red-400 mt-1">
            <p>密码必须满足以下条件:</p>
            <ul>
              {state.errors.password.map((error) => (
                <li key={error}>- {error}</li>
              ))}
            </ul>
          </div>
        )}
        <p className="text-red-400 mt-1">{state?.message}</p>

        <br />

        <LoginButton />
      </form> */}
      <MyEditor />
    </>
  );
}
