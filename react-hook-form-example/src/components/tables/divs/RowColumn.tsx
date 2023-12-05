import React from 'react'

interface RowColumnProps {
    children: React.ReactNode;
    className?: string;
  }

  const RowColumn: React.FC<RowColumnProps> = ({ children, className='' }) => (
    <div className={`flex-1 ${className} sm:flex-2 lg:flex-3 xl:flex-4`}>{children}</div>
  );
  
  export default RowColumn;