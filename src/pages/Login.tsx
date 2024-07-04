import { Button } from "antd";
import React from "react";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utiles/verifyToken";
// import Password from "antd/es/input/Password";

const Login = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: "A-0002",
      password: "admin123",
    },
  });
  const [login, { data, error }] = useLoginMutation();
  const dispatch = useDispatch();

  const onSubmit = async (data: Record<string, string>) => {
    const userInFo = {
      id: data.id,
      password: data.password,
    };
    // console.log(userInFo);
    const res = await login(userInFo).unwrap();
    // const decoded=verifyToken(res.data.accessToken)
    // console.log(decoded);
    dispatch(
      setUser({
        user: "",
        token: res.data.accessToken,
      })
    );
    console.log(res);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="id">Id:</label>
        <input type="text" id="id" {...register("id")} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="text" id="password" {...register("password")} />
      </div>
      <Button htmlType="submit">submit</Button>
    </form>
  );
};

export default Login;
