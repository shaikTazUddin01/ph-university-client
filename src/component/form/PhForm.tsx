import { Form } from "antd";
import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TFormConfig = {
  defaultValues?: Record<string, any>;
  resolver?:any;
};
type TFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
} & TFormConfig;

const PhForm = ({ onSubmit, children, defaultValues,resolver }: TFormProps) => {
  // const methods = useForm();
  // console.log(resolver);
  // console.log(defaultValues);
  const formConfig: TFormConfig = {};
  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }
  if (resolver) {
    formConfig["resolver"] = resolver;
  }
  // console.log(formConfig);
  const methods = useForm(formConfig);

  const submit:SubmitHandler<FieldValues>=(data)=>{
    onSubmit(data);
    methods.reset()
  }
  return (
    <FormProvider {...methods}>
      <Form onFinish={methods.handleSubmit(submit)} layout="vertical">{children}</Form>
    </FormProvider>
  );
};

export default PhForm;
