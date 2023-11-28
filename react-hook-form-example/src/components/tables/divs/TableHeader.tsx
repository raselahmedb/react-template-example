import React from "react";

interface TableHeaderProps {
  children: React.ReactNode;
  className?: string;
}

const TableHeader: React.FC<TableHeaderProps> = ({ children, className = '' }) => (
  <div className={`flex flex-row bg-gray-300 p-2 ${className}`} >{children}</div>
);

export default TableHeader;
