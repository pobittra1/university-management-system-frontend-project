import { Button } from "antd";
import { FieldValues, useForm, useFormContext } from "react-hook-form";
import authApi from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import UNform from "../components/form/UNform";
import UNInput from "../components/form/UNInput";

const { useLoginMutation } = authApi;

function Login() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const { register, handleSubmit } = useForm({
  //   defaultValues: {
  //     userId: "A-0001",
  //     password: "admin123",
  //   },
  // });

  const [login] = useLoginMutation();

  // console.log("error=>", error);

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    // const toastId = toast.loading("Logging in");
    // try {
    //   const userInfo = {
    //     id: data.userId,
    //     password: data.password,
    //   };
    //   const res = await login(userInfo).unwrap();
    //   const user = verifyToken(res.data.accessToken) as TUser;
    //   dispatch(setUser({ user: user, token: res.data.accessToken }));
    //   toast.success("Logged in", { id: toastId, duration: 2000 });
    //   navigate(`/${user.role}/dashboard`);
    // } catch (err) {
    //   toast.error("Something went wrong", { id: toastId, duration: 2000 });
    // }
  };

  return (
    <UNform onSubmit={onSubmit}>
      <div>
        <UNInput type="text" name="userId" label="ID:"></UNInput>
      </div>
      <div>
        <UNInput type="text" name="password" label="Password"></UNInput>
      </div>
      <Button htmlType="submit">Login</Button>
    </UNform>
  );
}

export default Login;
