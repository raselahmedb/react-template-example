import React from "react";

interface TableRowsProps {
  children: React.ReactNode;
  className?: string;
}

const TableRows: React.FC<TableRowsProps> = ({ children, className = '' }) => (
  <div className={`flex flex-row ${className} sm:flex-col md:flex-row lg:flex-row-xl`}>{children}</div>

);

export default TableRows;
