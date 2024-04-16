"use client";
import { useFormState } from "react-dom";
import style from "./style.module.css";


export default function ChildrenItem() {
  // const initState = {

  // };
  // const [state, dispatch] = useFormState((val) => {
  //   console.log({ val });
  //   return 
  // }, null);

  // console.log(state);

  return (
    <div className={`${style.enroll} ${style.childrenItem}`}>
      <div className={style.formItem}>
        <label>儿童姓名：</label>
        <input name="name" placeholder="请填写儿童姓名" />
      </div>
      <div className={style.formItem}>
        <label>儿童性别：</label>
        <input name="name" placeholder="请填写儿童姓名" />
      </div>
      <div className={style.formItem}>
        <label>儿童年龄：</label>
        <input name="name" placeholder="请填写儿童姓名" />
      </div>
    </div>
  );
}
