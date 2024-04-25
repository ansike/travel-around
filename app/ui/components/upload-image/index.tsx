import { Upload, message } from "antd";
import ImgCrop from "antd-img-crop";
import type { GetProp, UploadProps } from "antd";
import { useState } from "react";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import Image from "next/image";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

type UploadImageProps = {
  value?: string;
  onChange?: (url: string) => void;
};

export function UploadImage(props: UploadImageProps) {
  const { value, onChange } = props;
  const [loading, setLoading] = useState(false);

  const beforeUpload = (file: FileType) => {
    const isJpgOrPng = file.type.includes("image");
    if (!isJpgOrPng) {
      message.error("只能上传图片文件");
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
    if (info.file.status === "done" && info.file.response.code) {
      console.log(info.file.response.data);
      onChange?.(info.file.response.data);
    }
  };

  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  return (
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
        {value ? (
          <Image src={value} alt="avatar" width="100" height="100" />
        ) : (
          uploadButton
        )}
      </Upload>
    </ImgCrop>
  );
}
