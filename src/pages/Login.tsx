import { Button } from "antd";

import { useLoginMutation } from "../redux/features/auth/authApi";
import { useDispatch } from "react-redux";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utiles/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import PhForm from "../component/form/PhForm";
import PhInput from "../component/form/PhInput";
// import Password from "antd/es/input/Password";

const Login = () => {
  const defaultValues = {
    id: "2030010001",
    password: "student123",
  };

  const [login] = useLoginMutation();
  const dispatch = useDispatch();
  //navigate

  const navigate = useNavigate();
  const onSubmit = async (data: Record<string, string>) => {
    // console.log(data);
    // const toastId = toast.loading("Loading...");
    try {
      const userInFo = {
        id: data.id,
        password: data.password,
      };
      const res = await login(userInFo).unwrap();
      console.log(res.data);
      const user = verifyToken(res.data.accessToken) as TUser;
      console.log(user);
      dispatch(
        setUser({
          user: user,
          token: res.data.accessToken,
        })
      );
      if (res.data.needsPasswordChange) {
        return navigate("/change-pass");
      } else {
        toast.success("login success", { duration: 2000 });
        navigate(`/${user.role}/dashboard`);
      }
    } catch (error) {
      toast.error("something is wrong");
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-blue-500 py-5 px-10 rounded-md grid justify-center ">
        <h1 className="text-center text-white font-bold text-2xl pb-2">
          Login
        </h1>
        <PhForm onSubmit={onSubmit} defaultValues={defaultValues}>
          <PhInput type={"text"} name={"id"} label={"Id : "}></PhInput>

          <PhInput
            type={"text"}
            name={"password"}
            label={"password : "}
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

export default Login;
