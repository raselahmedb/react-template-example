import React from 'react'

interface RowColumnProps {
    children: React.ReactNode;
    className?: string;
  }

  const RowColumn: React.FC<RowColumnProps> = ({ children, className='' }) => (
    <div className={`flex-1 ${className}`}>{children}</div>
  );
  
  export default RowColumn;