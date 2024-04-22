"use client";

import { Button, Form, Input } from "antd";
import { useFormState, useFormStatus } from "react-dom";
import Quill from "quill";
import "quill/dist/quill.core.css";
import { useLayoutEffect } from "react";
import MyEditor from "../../my-editor";
import "./style.css";

export function LoginButton() {
  const { pending } = useFormStatus();

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
  // const [state, action] = useFormState(login, undefined);
  return (
    <>
      <Form className="mt-10 w-72">
        <Form.Item label="活动标题：">
          <Input
            size="small"
            autoComplete="off"
            name="title"
            placeholder="请输入活动标题"
            maxLength={120}
          />
        </Form.Item>
        <Form.Item label="活动地点：">
          <Input
            size="small"
            autoComplete="new-password"
            name="location"
            placeholder="请输入活动地点"
          />
        </Form.Item>
        <Form.Item label="人数限制：">
          {/* <Stepper
            defaultValue={1}
            onChange={(value) => {
              console.log(value);
            }}
          /> */}
        </Form.Item>
        <Form.Item label="报名时间："></Form.Item>

        <br />

        <LoginButton />
      </Form>
      {/* <MyEditor /> */}
    </>
  );
}
