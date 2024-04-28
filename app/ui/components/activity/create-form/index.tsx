"use client";

import { useCallback, useEffect, useState } from "react";
import { Button, DatePicker, Form, Input, InputNumber, message } from "antd";
import { useForm } from "antd/es/form/Form";
import { UploadImage } from "../../upload-image";
// import MyEditor from "../../my-editor";
import "./style.css";
import dayjs from "dayjs";
import dynamic from "next/dynamic";

const MyEditor = dynamic(
  // 引入对应的组件 设置的组件参考上面的wangEditor react使用文档
  () => import("../../my-editor"),
  { ssr: false }
);

const { RangePicker } = DatePicker;

type CreateActivityFormProps = {
  id?: string;
};
export function CreateActivityForm(props: CreateActivityFormProps) {
  const { id } = props;
  const [form] = useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const getActivity = useCallback(async (id: string) => {
    const res = await fetch(`/api/activity?id=${id}`);
    const data = await res.json();

    const activityTime = [
      dayjs(data.activityEndTime),
      dayjs(data.activityEndTime),
    ];
    const enrollTime = [dayjs(data.enrollStartTime), dayjs(data.enrollEndTime)];

    form.setFieldsValue({ ...data, activityTime, enrollTime });
  }, []);

  useEffect(() => {
    if (id) {
      getActivity(id);
    }
  }, [id]);

  const save = async () => {
    try {
      const values = await form.validateFields();
      const {
        title,
        location,
        activityTime,
        enrollTime,
        cover,
        desc,
        personLimit,
      } = values;
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
        personLimit,
      };
      if (id) {
        const res = await fetch("/api/activity", {
          method: "PUT",
          body: JSON.stringify({
            id: +id,
            ...body,
          }),
        });
        const data = await res.json();
        console.log(data);
        messageApi.success("编辑成功");
      } else {
        const res = await fetch("/api/activity", {
          method: "POST",
          body: JSON.stringify(body),
        });
        const data = await res.json();
        console.log(data);
        messageApi.success("创建成功");
      }
    } catch (error) {
      console.error(error);
      messageApi.success("失败");
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
      {contextHolder}
      {/* <MyEditor /> */}
    </>
  );
}
