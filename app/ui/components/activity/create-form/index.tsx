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
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { useForm } from "antd/es/form/Form";
import type { GetProp, UploadProps } from "antd";
import ImgCrop from 'antd-img-crop';
import { useFormStatus } from "react-dom";
import MyEditor from "../../my-editor";
import "./style.css";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];
const { RangePicker } = DatePicker;

const getBase64 = (img: FileType, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

export function CreateActivityForm() {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();
  const [form] = useForm();

  const save = async () => {
    const values = await form.validateFields();
    const { activityTime, enrollTime } = values;
    const [activityStartTime, activityEndTime] = activityTime;
    const [enrollStartTime, enrollEndTime] = enrollTime;
    console.log(values);
    // const res = await fetch("/api/activity", {
    //   method: "POST",
    //   body: values
    // });
    // const data = await res.json();
    // console.log(data);
  };

  const beforeUpload = (file: FileType) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };

  const handleChange: UploadProps["onChange"] = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as FileType, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  return (
    <>
      <Form form={form} className="mt-10">
        <Form.Item label="活动标题：" name="title">
          <Input
            size="small"
            autoComplete="off"
            placeholder="请输入活动标题"
            maxLength={120}
          />
        </Form.Item>
        <Form.Item label="活动地点：" name="location">
          <Input
            size="small"
            autoComplete="new-password"
            name="location"
            placeholder="请输入活动地点"
          />
        </Form.Item>
        <Form.Item label="报名时间：" name="enrollTime">
          <RangePicker size="small" showTime />
        </Form.Item>
        <Form.Item label="活动时间：" name="activityTime">
          <RangePicker size="small" showTime />
        </Form.Item>
        <Form.Item label="人数限制：" name="personLimit" initialValue={30}>
          <InputNumber size="small" min={1} />
        </Form.Item>
        <Form.Item label="活动封面：" name="cover">
          <ImgCrop rotationSlider showReset aspect={1.5}>
            <Upload
              name="file"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action="/api/upload/image"
              beforeUpload={beforeUpload}
              onChange={handleChange}
            >
              {imageUrl ? (
                <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
              ) : (
                uploadButton
              )}
            </Upload>
          </ImgCrop>
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
