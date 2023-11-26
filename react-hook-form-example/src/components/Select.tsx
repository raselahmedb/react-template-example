import { forwardRef, SelectHTMLAttributes , useId } from 'react';
import { useState } from 'react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options?: Map<any, string>;
  label?: string;
  className?: string;
  error?: string,
  required?: boolean,
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, label, className, error='', required=false, ...props }, ref) => {
    const id = useId(); // Assuming you have a custom hook for generating unique IDs

    const [value, setValue] = useState<any>();

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      console.log();
      
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
          {...props}
          id={id}
          ref={ref}
          onSelect={handleChange}
          className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        >
          {options &&
            Array.from(options.entries()).map(([key, value]) => (
            <option key={key} value={key}>
              {value}
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
