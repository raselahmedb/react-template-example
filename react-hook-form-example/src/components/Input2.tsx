import { forwardRef, InputHTMLAttributes, useId, useImperativeHandle, useRef, useState } from "react";
// import { FieldError } from 'react-hook-form';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
  error?: string;
  required?: boolean;
  forgotPassword?: boolean;
}

interface InputFieldRef {
  focus: () => void;
  getValue: () => any;
}

const Input2 = forwardRef<InputFieldRef, InputProps>(function Input2(
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

  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    },
    getValue: () => {
      return inputRef.current?.value;
    },
  }));

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
        ref={inputRef}
        // required={required}
        {...props}
        id={id}
        onChange={(e) => { 
          // console.log(e.target.value);
          setValue(e.target.value)
        }}
      />
      {error && (
        <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
          {error}
        </span>
      )}
    </div>
  );
});

export default Input2;
