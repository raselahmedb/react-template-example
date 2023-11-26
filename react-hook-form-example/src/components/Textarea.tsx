import React, { forwardRef, TextareaHTMLAttributes, useId, useState } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  className?: string;
  rows?: number;
  error?: string;
  required?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  {
    label,
    className = "",
    rows = 3,
    error = "",
    required = false,
    ...props
  },
  ref
) {
  const id = useId();

  const [value, setValue] = useState<string | undefined>("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="w-full">
      {label && (
        <div className="flex items-center justify-between">
          <label
            className="block text-sm font-medium leading-6 text-gray-900"
            htmlFor={"" + id}
          >
            {label}{" "}
            {required && <span className={`${value && !error ? 'text-black' : 'text-red-600'} mb-1 pl-1`}> * </span>}
          </label>
        </div>
      )}
      <textarea
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        ref={ref}
        rows={rows}
        {...props}
        id={"" + id}
        onChange={handleChange}
        value={value}
      />
      {error && (
        <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
          {error}
        </span>
      )}
    </div>
  );
});

export default Textarea;
