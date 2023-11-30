import React, { forwardRef, OptionHTMLAttributes } from 'react';

interface OptionProps extends OptionHTMLAttributes<HTMLOptionElement> {
  children: React.ReactNode;
  value?: any;
}

const Option = forwardRef<HTMLOptionElement, OptionProps>(
  ({ children, value, ...props }, ref) => {
    return (
      <option ref={ref} value={value} {...props}>
        {children}
      </option>
    );
  }
);

export default Option;
