import { useState } from "react";
import DatePicker from "react-mobile-datepicker";

type FormItemDatePickerProps = {
  value?: string;
  onChange?: (str: string) => void;
};

export default function FormItemDatePicker(props: FormItemDatePickerProps) {
  const [dateVisible, setDateVisible] = useState(false);

  const { value, onChange } = props;

  return (
    <>
      <span onClick={() => setDateVisible(true)}>选择日期</span>
      <DatePicker
        dateConfig={{
          year: {
            format: "YYYY",
            caption: "Year",
            step: 1,
          },
          month: {
            format: "M",
            caption: "Mon",
            step: 1,
          },
          date: {
            format: "D",
            caption: "Day",
            step: 1,
          },
        }}
        showCaption
        showHeader
        value={new Date(value ?? new Date())}
        theme="ios"
        isOpen={dateVisible}
        onCancel={() => {
          setDateVisible(false);
        }}
        onSelect={(a) => {
          console.log(a)
          onChange?.(a);
          setDateVisible(false);
        }}
        // onCancel={this.handleToggle(false)}
      />
    </>
  );
}
