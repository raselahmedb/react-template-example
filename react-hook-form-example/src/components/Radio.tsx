import React, { forwardRef, InputHTMLAttributes, useId } from 'react';

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;
  value?: any;
  name: string;
  option: string;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ children, value, name, option, className='', onChange, ...props }, ref) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(event);
      }
      // Additional logic if needed
    };

    const id = useId;

    return (
      <div className={`flex items-center ${className}`}>
        <input
          {...props}
          type="radio"
          id={`${id}-${option}`}
          name={name}
          value={option}
          onChange={handleChange}
          ref={ref}
          className="mr-2 h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 hover:text-indigo-400"
        />
        <label htmlFor={`${id}-${option}`} className='block text-sm font-medium leading-6 text-gray-900'>
          {children}
        </label>
      </div>
    );
  }
);

export default Radio;
