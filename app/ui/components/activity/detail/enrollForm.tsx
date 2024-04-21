"use client";
import style from "./style.module.css";
import { useEffect, useState } from "react";
import { AddCircleOutline } from "antd-mobile-icons";
import { Button, Checkbox, Footer, Form, Input, Toast } from "antd-mobile";
import Link from "next/link";
import { createEnroll } from "@/lib/data";

type EnrollFormProps = {
  activityId: number;
};
export default function EnrollForm(props: EnrollFormProps) {
  const { activityId } = props;
  const [form] = Form.useForm();
  const [isChecked, setIsChecked] = useState(false);

  const submit = async (values: any) => {
    if (!isChecked) {
      Toast.show("请阅读《活动公约》并勾选");
    }
    const res = await fetch("/api/enroll", {
      method: "POST",
      body: JSON.stringify({
        activityId,
        userId: 2,
        ...values,
      }),
    });
    const data = await res.json();
    console.log(data);
  };
  return (
    <>
      <div className={style.title}>我要报名</div>
      <Form
        onFinish={submit}
        form={form}
        layout="horizontal"
        footer={
          <>
            <div className={style.checkPolicy}>
              <Checkbox onChange={setIsChecked} />
              &nbsp;已阅读&nbsp;<Link href="/policy">《活动公约》</Link>
              且同意公约中的内容。
            </div>
            <Button block type="submit" color="primary" size="middle">
              提交
            </Button>
          </>
        }
      >
        <Form.Array
          name="participants"
          onAdd={(operation) =>
            operation.add({ name: "", sex: "", idCard: "" })
          }
          renderAdd={() => (
            <span className={style.addBtn}>
              <AddCircleOutline /> &nbsp;&nbsp;添加出行人
            </span>
          )}
          renderHeader={({ index }, { remove }) => (
            <>
              <span>联系人{index + 1}</span>
              <a onClick={() => remove(index)} style={{ float: "right" }}>
                删除
              </a>
            </>
          )}
          initialValue={[{ name: "", idCard: "" }]}
        >
          {(fields) =>
            fields.map(({ index }) => (
              <>
                <Form.Item
                  name={[index, "name"]}
                  label="姓名"
                  rules={[{ required: true, message: "姓名不能为空" }]}
                >
                  <Input placeholder="请输入姓名" />
                </Form.Item>
                <Form.Item
                  name={[index, "idCard"]}
                  label="身份证"
                  rules={[{ required: true, message: "身份证号不能为空" }]}
                >
                  <Input placeholder="请输入身份证号" />
                </Form.Item>
              </>
            ))
          }
        </Form.Array>
        <Form.Item
          name="phone"
          label="手机号码："
          rules={[{ required: true, message: "手机号码不能为空" }]}
        >
          <Input placeholder="请填写您的手机号码" />
        </Form.Item>
        <Form.Item
          name="remark"
          label="备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注："
          initialValue=""
        >
          <Input placeholder="请填写您的的额外诉求" />
        </Form.Item>

        <Form.Item label=" 注&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;意：">
          本活动需支付短期意外险&nbsp;
          <span className={style.alertText}>5.00元</span>
          /人(只需儿童投保，收取不退)
        </Form.Item>
        <Form.Item noStyle>
          <div className={style.alert}>收费不退！请谨慎报名！</div>

          <div className={style.enrollTime}>报名时间 2024-04-18 10:00:00</div>
          <div className={style.countdown}>
            报名倒计时 <span className={style.alertText}>2天1小时21分49秒</span>
          </div>
        </Form.Item>
      </Form>
      <Footer content="@ 2024-2030 cddwlp.cn All rights reserved" />
    </>
  );
}
