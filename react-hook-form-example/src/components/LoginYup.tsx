import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "./Input";
import Logo from "./Logo";
// import Button from "./Button";

interface FormValues {
  username: string;
  password: string;
}

// yup schema
const schema = yup.object().shape({
  username: yup
    .string()
    .email("Invalid email")
    .required("Username is a required!")
    .matches(
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      "Email address must be a valid address!"
    ),
  password: yup
    .string()
    .required("Password is a required!")
    .min(3, "Minimum 3 character enter!")
    .max(10, "Maximum 10 character enter!"),
  // city: yup.string().required("City is a required field"),
  // state: yup.string().required("State is a required field"),
  // phone: yup
  //   .string()
  //   .required("Phone is a required field")
  //   .matches(
  //     /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
  //     "Invalid phone number format"
  //   ),
  // zipcode: yup
  //   .string()
  //   .required("Zipcode is a required field")
  //   .matches(/^\d{5}(?:[-\s]\d{4})?$/, "Invalid zipcode format"),
});

function LoginYup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: yupResolver(schema) });
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <>
      <div
    className='flex items-center justify-center w-full'
    >
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <a
                        href="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </a>
        </p>
        <form onSubmit={onSubmit} className="mt-8">
          <div className="space-y-5">
            <Input
              label="Username: "
              placeholder="Enter your email"
              type="text"
              required={true}
              error={errors?.username?.message}
              {...register("username")}
            />
            <Input
              label="Password: "
              type="password"
              placeholder="Enter your password"
              required={true}
              forgotPassword={true}
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
      </div>
    </>
  );
}

export default LoginYup;
