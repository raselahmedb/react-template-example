import { forwardRef, SelectHTMLAttributes , useId, useState, ReactNode } from 'react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  children?: ReactNode
  options?: string[];
  label?: string;
  className?: string;
  error?: string,
  required?: boolean,
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, children, options, className, error='', required=false, ...props }, ref) => {
    const id = useId(); // Assuming you have a custom hook for generating unique IDs

    const [value, setValue] = useState<any>();

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      console.log(e.target.value);
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
        <select
          id={id}
          {...props}
          value={value}
          onChange={handleChange}
          className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
          ref={ref}
        >
          { children }
          {options &&
            options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      {error && (
        <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
          {error}
        </span>
      )}
      </div>
    );
  }
);

export default Select;
