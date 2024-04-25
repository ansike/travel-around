"use client";

import { useState } from "react";
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Upload,
  message,
} from "antd";
import { useForm } from "antd/es/form/Form";
import ImgCrop from "antd-img-crop";
import { useFormStatus } from "react-dom";
import MyEditor from "../../my-editor";
import "./style.css";
import { UploadImage } from "../../upload-image";
import { title } from "process";

const { RangePicker } = DatePicker;

export function CreateActivityForm() {
  const [form] = useForm();

  const save = async () => {
    try {
      const values = await form.validateFields();
      const { title, location, activityTime, enrollTime, cover, desc } = values;
      console.log(activityTime);
      const [activityStartTime, activityEndTime] = activityTime;
      const [enrollStartTime, enrollEndTime] = enrollTime;
      const body = {
        title,
        location,
        cover,
        desc,
        activityStartTime,
        activityEndTime,
        enrollStartTime,
        enrollEndTime,
      };
      const res = await fetch("/api/activity", {
        method: "POST",
        body: JSON.stringify(body),
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Form form={form} className="mt-10">
        <Form.Item
          label="活动标题："
          name="title"
          rules={[{ required: true, message: "请输入活动标题" }]}
        >
          <Input
            size="small"
            autoComplete="off"
            placeholder="请输入活动标题"
            maxLength={120}
          />
        </Form.Item>
        <Form.Item
          label="活动地点："
          name="location"
          rules={[{ required: true, message: "请设置活动地点" }]}
        >
          <Input
            size="small"
            autoComplete="new-password"
            name="location"
            placeholder="请输入活动地点"
          />
        </Form.Item>
        <Form.Item
          label="报名时间："
          name="enrollTime"
          rules={[{ required: true, message: "请设置活动的报名时间" }]}
        >
          <RangePicker size="small" showTime />
        </Form.Item>
        <Form.Item
          label="活动时间："
          name="activityTime"
          rules={[{ required: true, message: "请设置活动时间" }]}
        >
          <RangePicker size="small" showTime />
        </Form.Item>
        <Form.Item
          label="人数限制："
          name="personLimit"
          initialValue={30}
          rules={[{ required: true, message: "请设置活动人数上限" }]}
        >
          <InputNumber size="small" min={1} />
        </Form.Item>
        <Form.Item
          label="活动封面："
          name="cover"
          rules={[{ required: true, message: "请上传封面图片" }]}
        >
          <UploadImage />
        </Form.Item>
        <Form.Item
          label="活动详情："
          name="desc"
          rules={[{ required: true, message: "请填写活动详情" }]}
        >
          <MyEditor />
        </Form.Item>
        <Form.Item className="flex justify-center">
          <Button type="primary" onClick={save}>
            保存
          </Button>
        </Form.Item>
      </Form>
      {/* <MyEditor /> */}
    </>
  );
}
