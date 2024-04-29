"use client";
import style from "./style.module.css";
import { useEffect, useState } from "react";
import { AddCircleOutline } from "antd-mobile-icons";
import { Button, Checkbox, Form, Input, Toast } from "antd-mobile";
import Link from "next/link";
import { Activity, Enroll, User } from "@prisma/client";
import dayjs from "dayjs";
import { Countdown } from "./countdown";
import { SessionUser } from "@/types/user";

type EnrollFormProps = {
  activity?: Activity;
  enroll?: Enroll | null;
  user?: SessionUser | null;
};
export default function EnrollForm(props: EnrollFormProps) {
  const { activity, enroll, user } = props;
  const [form] = Form.useForm();
  const [isChecked, setIsChecked] = useState(false);
  const [isDisable, setIsDisable] = useState(false);

  const { countdown } = Countdown(activity?.enrollEndTime as unknown as string || "");
  useEffect(() => {
    if (enroll) {
      setIsDisable(true);
      form.setFieldsValue(enroll);
    }
  }, [enroll]);

  const submit = async () => {
    if (!isChecked) {
      return Toast.show("请阅读《活动公约》并勾选");
    }
    const values = await form.validateFields();
    if (enroll) {
      const res = await fetch("/api/enroll", {
        method: "PUT",
        body: JSON.stringify({
          id: enroll.id,
          activityId: activity?.id,
          ...values,
        }),
      });
      const data = await res.json();
      console.log(data);
      if (data.errNo === 0) {
        Toast.show("编辑成功");
        setIsDisable(true);
      } else {
        Toast.show("编辑失败");
      }
    } else {
      const res = await fetch("/api/enroll", {
        method: "POST",
        body: JSON.stringify({
          activityId: activity?.id,
          ...values,
        }),
      });
      const data = await res.json();

      if (data.errNo === 0) {
        Toast.show("报名成功");
        setIsDisable(true);
      } else {
        Toast.show(data.message || "报名失败");
      }
    }
  };

  return (
    <div className="pb-20">
      <div className={style.title}>我要报名</div>
      <Form
        form={form}
        layout="horizontal"
        footer={
          <>
            <div className={style.checkPolicy}>
              <Checkbox onChange={setIsChecked} />
              &nbsp;已阅读&nbsp;<Link href="/policy">《活动公约》</Link>
              且同意公约中的内容。
            </div>
            <div>
              {isDisable ? (
                <Button
                  disabled={!countdown}
                  block
                  type="submit"
                  color="primary"
                  size="middle"
                  onClick={() => setIsDisable(false)}
                >
                  编辑
                </Button>
              ) : (
                <Button
                  disabled={!countdown}
                  block
                  type="submit"
                  color="primary"
                  size="middle"
                  onClick={submit}
                >
                  保存
                </Button>
              )}
            </div>
            {!user && (
              <div className="flex justify-between mt-2">
                <span></span>
                <Link href={`/login?redirect=/activity/${activity?.id}/detail`}>
                  去登录
                </Link>
              </div>
            )}
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
              {index != 0 && (
                <a onClick={() => remove(index)} style={{ float: "right" }}>
                  删除
                </a>
              )}
            </>
          )}
          initialValue={[{ name: "", idCard: "" }]}
        >
          {(fields) =>
            fields.map(({ index }) => (
              <>
                <Form.Item
                  disabled={isDisable}
                  name={[index, "name"]}
                  label="姓名"
                  rules={[{ required: true, message: "姓名不能为空" }]}
                >
                  <Input placeholder="请输入姓名" />
                </Form.Item>
                <Form.Item
                  disabled={isDisable}
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
          disabled={isDisable}
          name="phone"
          label="手机号码："
          rules={[{ required: true, message: "手机号码不能为空" }]}
        >
          <Input placeholder="请填写您的手机号码" />
        </Form.Item>
        <Form.Item
          disabled={isDisable}
          name="remark"
          label="备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注："
          initialValue=""
        >
          <Input placeholder="请填写您的的额外诉求" />
        </Form.Item>

        <Form.Item label=" 注&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;意：">
          本活动需支付短期意外险&nbsp;
          <span className={style.alertText}>5.00元</span>
          /人(收取不退)
        </Form.Item>
        <Form.Item noStyle>
          <div className={style.alert}>收费不退！请谨慎报名！</div>

          <div className={style.enrollTime}>
            报名时间 &nbsp;
            {dayjs(activity?.enrollStartTime).format("YYYY-MM-DD HH:mm:ss")}
          </div>
          <div className={style.countdown}>
            报名倒计时：{" "}
            <span className={style.alertText}>
              {countdown ? countdown : "报名已截至!!!"}
            </span>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
}
