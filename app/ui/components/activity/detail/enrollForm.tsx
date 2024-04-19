"use client";
import { useFormState } from "react-dom";
// import { createEnroll } from "@/lib/actions";
import style from "./style.module.css";
import { useEffect, useState } from "react";
import { AddCircleOutline } from "antd-mobile-icons";
import ChildrenItem from "./childrenItem";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Picker,
  Selector,
  Stepper,
  TextArea,
} from "antd-mobile";
import Link from "next/link";
import { GenderOptions } from "../constant";

const options = [
  {
    value: "1",
    label: "一个儿童",
  },
  {
    value: "2",
    label: "二个儿童",
  },
  {
    value: "3",
    label: "三个儿童",
  },
];
export default function EnrollForm() {
  const [form] = Form.useForm();
  const [personNumVisible, setPersonNumVisible] = useState(false);
  const [childrenNum, setChildrenNum] = useState(1);
  const initState = {};
  const [state, dispatch] = useFormState((val) => {
    console.log({ val });
    return;
  }, null);

  const personNumChange = (val: string) => {
    console.log({ val });
    // setChildrenNum(val);
  };

  console.log(state, childrenNum);
  useEffect(() => {
    form.setFieldValue("contacts", [{ name: "", sex: "", idCard: "" }]);
  }, []);

  return (
    <>
      <div className={style.title}>我要报名</div>
      <Form
        form={form}
        layout="horizontal"
        footer={
          <Button block type="submit" color="primary" size="large">
            提交
          </Button>
        }
      >
        <Form.Array
          name="contacts"
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
        <Form.Item name="phoneNumber" label="手机号码：">
          <Input placeholder="请填写您的手机号码" />
        </Form.Item>
        <Form.Item
          name="remark"
          label="备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注："
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
          <Form.Item name="isChecked" noStyle>
            <div className={style.checkPolicy}>
              <Checkbox />
              &nbsp;请仔细阅读&nbsp;<Link href="/policy">《活动公约》</Link>并勾选
            </div>
          </Form.Item>
        </Form.Item>
      </Form>
    </>
  );
}
