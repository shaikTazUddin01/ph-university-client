import { Form } from "antd";
import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TFormConfig = {
  defaultValues?: Record<string, FieldValues>;
  resolver?:any;
};
type TFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
} & TFormConfig;

const PhForm = ({ onSubmit, children, defaultValues,resolver }: TFormProps) => {
  // const methods = useForm();
  // console.log(resolver);
  const formConfig: TFormConfig = {};
  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }
  if (resolver) {
    formConfig["resolver"] = resolver;
  }
  // console.log(formConfig);
  const methods = useForm(formConfig);
  return (
    <FormProvider {...methods}>
      <Form onFinish={methods.handleSubmit(onSubmit)} layout="vertical">{children}</Form>
    </FormProvider>
  );
};

export default PhForm;
