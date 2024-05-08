"use client";

import { useCallback, useEffect } from "react";
import { Button, DatePicker, Form, Input, InputNumber, message } from "antd";
import { useForm } from "antd/es/form/Form";
import { UploadImage } from "../../upload-image";
import dayjs from "dayjs";
import dynamic from "next/dynamic";
import "./style.css";

const MyEditor = dynamic(
  // 引入对应的组件 设置的组件参考上面的wangEditor react使用文档
  () => import("../../my-editor"),
  { ssr: false }
);

const { RangePicker } = DatePicker;

type CreateActivityFormProps = {
  id?: string;
  callback?: () => void;
};
export function CreateActivityForm(props: CreateActivityFormProps) {
  const { id, callback } = props;
  const [form] = useForm();

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
        message.success("编辑成功");

      } else {
        const res = await fetch("/api/activity", {
          method: "POST",
          body: JSON.stringify(body),
        });
        const data = await res.json();
        message.success("创建成功");
      }
      callback?.();
    } catch (error) {
      console.error(error);
      message.error("失败");
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
            autoComplete="off"
            placeholder="请输入活动标题"
            maxLength={120}
            style={{ width: 352 }}
          />
        </Form.Item>
        <Form.Item
          label="活动地点："
          name="location"
          rules={[{ required: true, message: "请设置活动地点" }]}
        >
          <Input
            autoComplete="new-password"
            name="location"
            placeholder="请输入活动地点"
            style={{ width: 352 }}
          />
        </Form.Item>
        <Form.Item
          label="报名时间："
          name="enrollTime"
          rules={[{ required: true, message: "请设置活动的报名时间" }]}
        >
          <RangePicker showTime />
        </Form.Item>
        <Form.Item
          label="活动时间："
          name="activityTime"
          rules={[{ required: true, message: "请设置活动时间" }]}
        >
          <RangePicker showTime />
        </Form.Item>
        <Form.Item
          label="人数限制："
          name="personLimit"
          initialValue={30}
          rules={[{ required: true, message: "请设置活动人数上限" }]}
        >
          <InputNumber min={1} />
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
        <div className="flex justify-center">
          <Button
            style={{ margin: "auto", width: 100 }}
            size="large"
            type="primary"
            onClick={save}
          >
            保存
          </Button>
        </div>
      </Form>
    </>
  );
}
