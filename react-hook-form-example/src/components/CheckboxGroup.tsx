import { forwardRef, InputHTMLAttributes, useId, useState } from 'react';

interface CheckboxGroupProps extends InputHTMLAttributes<HTMLInputElement> {
  options?: string[];
  label?: string;
  name?: string;
  paragraph?: string;
  error?: string;
  required?: boolean;
  className?: string;
}

const CheckboxGroup = forwardRef<HTMLInputElement, CheckboxGroupProps>(
  ({ options, label, name, paragraph, error='',required=false, className, ...props }, ref) => {
    const id = useId(); // Assuming you have a custom hook for generating unique IDs
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const handleCheckboxChange = (option: string) => {
      // Check if the option is already selected
      const isSelected = selectedOptions.includes(option);
  
      // Update the selected options based on the checkbox change
      if (isSelected) {
        setSelectedOptions(selectedOptions.filter((item) => item !== option));
      } else {
        setSelectedOptions([...selectedOptions, option]);
      }
    };

    return (
      <div className="w-full">
        {label && <label htmlFor={id} className="text-sm font-semibold leading-6 text-gray-900">
            {label}
            {required && <span className={`${ selectedOptions.length > 0 && !error ? 'text-black' : 'text-red-600' } mb-1 pl-1`}> *</span>}
        </label>}
        {paragraph && <p className="mt-1 text-sm leading-6 text-gray-600">{paragraph}</p>}
        {options &&
          options.map((option) => (
            <div key={option} className={`flex items-center ${className}`}>
              <input
                type="checkbox"
                id={`${id}-${option}`}
                name={name}
                value={option}
                {...props}
                checked={selectedOptions.includes(option)}
                onChange={() => handleCheckboxChange(option)}
                ref={ref}
                className="mr-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 hover:text-indigo-400"
              />
              <label htmlFor={`${id}-${option}`} className='block text-sm font-medium leading-6 text-gray-900'>{option}</label>
            </div>
          ))}
      </div>
    );
  }
);

export default CheckboxGroup;
