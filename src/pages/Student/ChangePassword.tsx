import React from "react";
import PhForm from "../../component/form/PhForm";
import PhInput from "../../component/form/PhInput";
import { Button } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useChangePassMutation } from "../../redux/features/auth/authApi";
import { useNavigate } from "react-router-dom";
import { TResponse } from "../../types";
import { useAppDispatch } from "../../redux/features/hooks";
import { logout } from "../../redux/features/auth/authSlice";
import { toast } from "sonner";

const ChangePassword = () => {
  const [changePassword] = useChangePassMutation();
  const navigate = useNavigate();
  const dispatch=useAppDispatch()
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    const res = await changePassword(data) as TResponse<any>;
    console.log(res);
    if (res?.data?.success) {
        toast.success("changed password")
        dispatch(logout())
      navigate("/login");
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-blue-500 py-5 px-10 rounded-md grid justify-center ">
        {/* <h1 className="text-center text-white font-bold text-2xl pb-2">
            Change Password
          </h1> */}
        <PhForm onSubmit={onSubmit}>
          <PhInput
            type={"text"}
            name={"oldPassword"}
            label={"Old Password :"}
          ></PhInput>

          <PhInput
            type={"text"}
            name={"newPassword"}
            label={"New Password : "}
          ></PhInput>

          <div className="flex justify-center mt-2">
            <Button htmlType="submit" className="text-lg font-semibold">
              submit
            </Button>
          </div>
        </PhForm>
      </div>
    </div>
  );
};

export default ChangePassword;
