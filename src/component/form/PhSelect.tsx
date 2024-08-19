import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

type TPhSelectProps = {
  label: string;
  name: string;
  options:
    | {
        key?: string;
        value: string;
        label: string;
        disabled?: boolean;
      }[]
    | undefined;
  mode?: "multiple" | undefined;
};

const PhSelect = ({ label, name, options, mode }: TPhSelectProps) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={`${label} :`}>
          <Select
            placeholder={`Select ${label}`}
            style={{ width: "100%" }}
            mode={mode}
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
