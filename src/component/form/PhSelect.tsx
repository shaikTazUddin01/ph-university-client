import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

type TPhSelectProps = {
  label: string;
  name: string;
  options: {
    value: string;
    label: string;
    disabled?: boolean;
  }[];
};

const PhSelect = ({ label, name, options }: TPhSelectProps)=> {
  return (
    <Controller
      name={name}
      render={({ field }) => (
        <Form.Item label={`${label} :`}>
          <Select
            defaultValue={`--- Select ${label} ---`}
            style={{ width: "100%" }}
            {...field}
            options={options}
          />
        </Form.Item>
      )}
    />
  );
};

export default PhSelect;
