import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

type TInputProps = {
  name: string;
  type: string;
  label?: string;
  disabled?:boolean;
};

const PhInput = ({ type, name, label,disabled }:TInputProps) => {
  return (
    <div className="">
     <Form.Item label={label}>
      <Controller
        //   control={control}
        name={name}
        render={({ field }) => (
          <Input
            {...field}
            type={type}
            id={name}
            disabled={disabled}
            className="rounded-md px-2 py-1"
            placeholder={`Enter Your ${name}`}
          />
        )}
      />
     </Form.Item>
    </div>
  );
};

export default PhInput;
