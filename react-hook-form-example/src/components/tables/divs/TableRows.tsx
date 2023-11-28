import React from "react";

interface TableRowsProps {
  children: React.ReactNode;
  className?: string;
}

const TableRows: React.FC<TableRowsProps> = ({ children, className = '' }) => (
  <div className={`flex flex-row ${className}`} >{children}</div>
);

export default TableRows;
