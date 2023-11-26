import { useForm, Resolver } from "react-hook-form";
import Input from "./Input";
// import Button from "./Button";

type FormValues = {
  username: string;
  password: string;
};

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.username && values.password ? values : {},
    errors: {
      ...(values.username ? {} : {
            username: { type: "required", message: "Username is required!", pattern: {
                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                message: "Email address must be a valid address!",
              }},
          }),
      ...(values.password ? {} : { password: { type: "required", message: "Password is required!" }, }),
    },
  };
};

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver });
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <>
      <div className="flex items-center justify-center w-full"></div>
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <form onSubmit={onSubmit} className="mt-8">
          <div className="space-y-5">
            <Input
              label="Username: "
              placeholder="Enter your email"
              type="email"
              error={errors?.username?.message}
              {...register("username")}
            />
            <Input
              label="Password: "
              type="password"
              placeholder="Enter your password"
              error={errors?.password?.message}
              {...register("password")}
            />
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
