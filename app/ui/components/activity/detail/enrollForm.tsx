"use client";
import { useFormState } from "react-dom";
// import { createEnroll } from "@/lib/actions";
import style from "./style.module.css";
import { useState } from "react";
import ChildrenItem from "./childrenItem";
import { Form, Picker, Selector } from "antd-mobile";

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
  return (
    <Form className={style.enroll}>
      <div className={style.title}>我要报名</div>
      <Form.Item name="personNum" label="选择人数：">
        <div
          onClick={() => {
            setPersonNumVisible(true);
          }}
        >
          aaa
        </div>
        <Picker
          columns={[options]}
          visible={personNumVisible}
          onClose={() => {
            setPersonNumVisible(false);
          }}

          // onSelect={(v) => {
          //   console.log(v);
          //   setChildrenNum(v);
          // }}

          onConfirm={(v) => {
            console.log(v);
            setChildrenNum(v[0]);
          }}
          onConfirm={(v) => {
            setPersonNumVisible(v);
          }}
        />
        {/* <Selector
          className={style.borderSolid}
          onChange={personNumChange}
          options={options}
        ></Selector> */}
      </Form.Item>
      {new Array(+childrenNum).fill(0).map((_, idx) => {
        return <ChildrenItem key={idx} />;
      })}
      <div className={style.formItem}>
        <label className={style.label}>手机号码：</label>
        <input
          className={style.borderSolid}
          name="phoneNumber"
          placeholder="请填写您的手机号码"
        />
      </div>
      <div className={style.formItem}>
        <label className={style.label}>
          备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注：
        </label>
        <textarea
          className={style.borderSolid}
          name="remark"
          placeholder="如有特殊诉求请备注"
        />
      </div>
      <div className={style.formItem}>
        <label className={style.label}>报名公约：</label>
      </div>
      <div className={style.formItem}>
        <label className={style.label}>
          注&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;意：
        </label>
        <div>
          本活动需支付短期意外险<span className={style.alertText}>5.00元</span>
          /人(只需儿童投保，收取不退，积分不能抵用)
        </div>
      </div>
      <div className={style.alert}>收费不退！请谨慎报名！</div>
      <div>报名时间 2024-04-18 10:00:00 报名倒计时 2天1小时21分49秒</div>
      <button className={style.submit} type="submit">
        提交
      </button>
    </Form>
  );
}
