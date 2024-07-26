import { Form, Select } from "antd";

const PhSelect = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <Form.Item>
      <Select
        defaultValue="lucy"
        style={{ width: "100%" }}
        onChange={handleChange}
        options={[
          { value: "jack", label: "Jack" },
          { value: "lucy", label: "Lucy" },
          { value: "Yiminghe", label: "yiminghe" },
     
        ]}
      />
    </Form.Item>
  );
};

export default PhSelect;
