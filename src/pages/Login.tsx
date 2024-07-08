import { Button } from "antd";
import React from "react";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useDispatch } from "react-redux";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utiles/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
// import Password from "antd/es/input/Password";

const Login = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: "A-0002",
      password: "admin123",
    },
  });
  const [login] = useLoginMutation();
  const dispatch = useDispatch();
  //navigate

  const navigate = useNavigate();
  const onSubmit = async (data: Record<string, string>) => {
    const toastId = toast.loading("Loading...");
    try {
      const userInFo = {
        id: data.id,
        password: data.password,
      };
      // console.log(userInFo);
      const res = await login(userInFo).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;
      // console.log(user);
      dispatch(
        setUser({
          user: user,
          token: res.data.accessToken,
        })
      );
      toast.success("login success", { id: toastId });
      navigate(`/${user.role}/dashboard`);
    } catch (error) {
      toast.error("something is wrong", { id: toastId });
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-blue-500 py-5 px-10 rounded-md grid justify-center ">
        <h1 className="text-center text-white font-bold text-2xl pb-2">
          Login
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div className="flex">
            {/* <label htmlFor="id"className="flex-1">Id:</label> */}
            <input
              type="text"
              id="id"
              {...register("id")}
              placeholder="Enter Your Id"
              className="rounded-md px-2 py-1"
            />
          </div>
          <div className="flex">
            {/* <label htmlFor="password" className="flex-1">Password:</label> */}
            <input
              type="text"
              id="password"
              {...register("password")}
              placeholder="Enter Your Id"
              className="rounded-md px-2 py-1"
            />
          </div>

          <div className="flex justify-center">
            <Button htmlType="submit" className="text-lg font-semibold">
              submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
