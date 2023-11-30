import React from 'react'

interface TableRowsProps {
  children: React.ReactNode;
  className?: string;
}

const Table: React.FC<TableRowsProps> = ({ children, className = '' }) => (
  <div className={`flex flex-col ${className}`} >{children}</div>
);

export default Table