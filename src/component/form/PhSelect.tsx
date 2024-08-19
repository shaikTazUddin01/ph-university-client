import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

type TPhSelectProps = {
  label: string;
  name: string;
  options: {
    key?:string;
    value: string;
    label: string;
    disabled?: boolean;
  }[] | undefined;
};

const PhSelect = ({ label, name, options }: TPhSelectProps)=> {
  return (
    <Controller
      name={name}
      render={({ field ,fieldState:{error}}) => (
        <Form.Item label={`${label} :`}>
          <Select
            defaultValue={`--- Select ${label} ---`}
            style={{ width: "100%" }}
            {...field}
            options={options}
          />
          {error && <small className="text-red-600">{error?.message}</small>}
        </Form.Item>
      )}
    />
  );
};

export default PhSelect;
