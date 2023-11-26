import { forwardRef, InputHTMLAttributes, useId, useState } from 'react';

interface RadioGroupProps extends InputHTMLAttributes<HTMLInputElement> {
  options?: Map<any, string>;
  label?: string;
  name?: string;
  paragraph?: string;
  error?: string;
  required?: boolean;
  className?: string;
}

const RadioGroup = forwardRef<HTMLInputElement, RadioGroupProps>(
  ({ options, label, name, paragraph, error='',required=false, className, ...props }, ref) => {
    const id = useId(); // Assuming you have a custom hook for generating unique IDs
    const [value, setValue] = useState<any>();
    if(!name) name = id;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return (
      <div className="w-full">
        {label && <label htmlFor={id} className="text-sm font-semibold leading-6 text-gray-900">
            {label}
            {required && <span className={`${ value && !error ? 'text-black' : 'text-red-600' } mb-1 pl-1`}> *</span>}
        </label>}
        {paragraph && <p className="mt-1 text-sm leading-6 text-gray-600">{paragraph}</p>}
        {options &&
          Array.from(options.entries()).map(([key, value]) => (
            <div key={key} className={`flex items-center ${className}`}>
              <input
                {...props}
                type="radio"
                id={`${id}-${key}`}
                name={name}
                value={key}
                onChange={handleChange}
                ref={ref}
                className="mr-2 h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 hover:text-indigo-400"
              />
              <label htmlFor={`${id}-${key}`} className='block text-sm font-medium leading-6 text-gray-900'>{value}</label>
            </div>
          ))}
      </div>
    );
  }
);

export default RadioGroup;
