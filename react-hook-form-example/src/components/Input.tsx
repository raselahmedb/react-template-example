import { forwardRef, InputHTMLAttributes, useId, useState } from "react";
// import { FieldError } from 'react-hook-form';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
  error?: string;
  required?: boolean;
  forgotPassword?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    label,
    type = "text",
    className = "",
    error = "",
    required = false,
    forgotPassword = false,
    ...props
  },
  ref
) {
  const id = useId(); // Assuming `useId` is correctly implemented
  const [value, setValue] = useState<any>();

  return (
    <div className="w-full">
      {label && (
        <div className="flex items-center justify-between">
          <label
            className="block text-sm font-medium leading-6 text-gray-900"
            htmlFor={id}
          >
            {label}{" "}
            {required && <span className={`${ value && !error ? 'text-black' : 'text-red-600' } mb-1 pl-1`}> * </span>}
          </label>
          <div className="text-sm">
            {forgotPassword && (
              <a
                href="#"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Forgot password?
              </a>
            )}
          </div>
        </div>
      )}
      <input
        type={type}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        ref={ref}
        // required={required}
        {...props}
        id={id}
        onChange={(e) => setValue(e)}
      />
      {error && (
        <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
          {error}
        </span>
      )}
    </div>
  );
});

export default Input;
