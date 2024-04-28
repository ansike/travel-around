"use client";

import { signup } from "@/lib/actions/auth";
import { Button, Checkbox, Input, Toast } from "antd-mobile";
import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { EyeInvisibleOutline, EyeOutline } from "antd-mobile-icons";
import styles from "./style.module.css";
import Link from "next/link";

export function SignupButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      aria-disabled={pending}
      type="submit"
      color="primary"
      className="w-full rounded-full"
      style={{ borderRadius: 20, height: 36 }}
    >
      {pending ? "注册中..." : "注册"}
    </Button>
  );
}

export function SignupForm() {
  const [visible, setVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [state, action] = useFormState(signup, undefined);
  
  return (
    <form
      action={(val) => {
        if (!isChecked) {
          Toast.show("请阅读并同意《会员服务协议与隐私政策》");
          return;
        }
        action(val);
      }}
      className="mt-10 w-72"
    >
      <Input
        autoComplete="off"
        className="peer block w-full cursor-pointer rounded-md py-2 px-4 text-sm outline-2 placeholder:text-gray-500 "
        style={{ background: "#F7F8FA", color: "#969799", letterSpacing: 2 }}
        inputMode="numeric"
        id="name"
        name="name"
        placeholder="请输入用户名"
        maxLength={20}
      />
      {state?.errors?.name && (
        <p className="text-red-400 mt-1">{state.errors.name}</p>
      )}
      <Input
        autoComplete="off"
        className="peer block w-full cursor-pointer rounded-md py-2 px-4 text-sm outline-2 placeholder:text-gray-500 mt-4"
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
      <div
        style={{ background: "#F7F8FA", color: "#969799", letterSpacing: 2 }}
        className="flex items-center peer w-full cursor-pointer rounded-md py-2 px-4 text-sm outline-2 placeholder:text-gray-500 mt-4"
      >
        <Input
          autoComplete="new-password"
          id="password"
          name="password"
          placeholder="请输入密码"
          type={visible ? "text" : "password"}
        />
        <div className={styles.eye}>
          {!visible ? (
            <EyeInvisibleOutline onClick={() => setVisible(true)} />
          ) : (
            <EyeOutline onClick={() => setVisible(false)} />
          )}
        </div>
      </div>

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
      <div className="flex items-center my-2">
        <Checkbox onChange={setIsChecked} />
        &nbsp;我已阅读并同意&nbsp;
        <Link href="/policy">《会员服务协议与隐私政策》</Link>
      </div>
      <SignupButton />
    </form>
  );
}
