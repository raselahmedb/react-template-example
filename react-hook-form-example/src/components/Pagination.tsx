import React, { useState } from 'react';

interface PaginationProps {
  totalPages: number;
  itemsPerPageOptions?: number[];
  defaultItemsPerPage?: number;
  handlePagination: (page: number, itemsPerPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  itemsPerPageOptions = [2, 3, 5],
  defaultItemsPerPage = 2,
  handlePagination,
}) => {
  const [itemsPerPage, setItemsPerPage] = useState(defaultItemsPerPage);
  const [selectedPage, setSelectedPage] = useState(1);

  const handleOnClick = (page: number, itemsPerPage: number) => {
    setSelectedPage(page);
    handlePagination(page, itemsPerPage);
  }

  const renderPageLinks = () => {
    const pageLinks = [];
    const maxPagesToShow = 3;
  
    const startPage = Math.max(1, Math.min(selectedPage - Math.floor(maxPagesToShow / 2), totalPages - maxPagesToShow + 1));
    const endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);
  
    if (startPage > 1) {
      // Render the first page link
      pageLinks.push(
        <a
          key={1}
          onClick={() => handleOnClick(1, itemsPerPage)}
          href="#"
          className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
            1 === selectedPage
              ? 'bg-indigo-600 text-white'
              : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
          } focus:z-20 focus:outline-offset-0`}
        >
          1
        </a>
      );
  
      // Render ellipsis if there are more pages before the current startPage
      if (startPage > 2) {
        pageLinks.push(
          <span key="ellipsis-start" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold">
            ...
          </span>
        );
      }
    }
  
    for (let page = startPage; page <= endPage; page++) {
      // Render the current page link
      pageLinks.push(
        <a
          key={page}
          onClick={() => handleOnClick(page, itemsPerPage)}
          href="#"
          className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
            page === selectedPage
              ? 'bg-indigo-600 text-white'
              : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
          } focus:z-20 focus:outline-offset-0`}
        >
          {page}
        </a>
      );
    }
  
    if (endPage < totalPages) {
      // Render ellipsis if there are more pages after the current endPage
      if (endPage < totalPages - 1) {
        pageLinks.push(
          <span key="ellipsis-end" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold">
            ...
          </span>
        );
      }
  
      // Render the last page link
      pageLinks.push(
        <a
          key={totalPages}
          onClick={() => handleOnClick(totalPages, itemsPerPage)}
          href="#"
          className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
            totalPages === selectedPage
              ? 'bg-indigo-600 text-white'
              : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
          } focus:z-20 focus:outline-offset-0`}
        >
          {totalPages}
        </a>
      );
    }
  
    return pageLinks;
  };
  
  
  
  

  return (
    <div>
      <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
        {/* Previous button */}
        <a
          onClick={() => handlePagination(1, itemsPerPage)}
          href="#"
          className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
        >
          <span className="sr-only">Previous</span>
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
              clipRule="evenodd"
            />
          </svg>
        </a>

        {/* Page links */}
        {renderPageLinks()}

        {/* Next button */}
        <a
          onClick={() => handlePagination(totalPages, itemsPerPage)}
          href="#"
          className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
        >
          <span className="sr-only">Next</span>
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
              clipRule="evenodd"
            />
          </svg>
        </a>

        {/* Items per page dropdown */}
        <select
          onChange={(e) => {
            const selectedItemsPerPage = parseInt(e.target.value, 10);
            setItemsPerPage(selectedItemsPerPage);
            handlePagination(1, selectedItemsPerPage);
          }}
          value={itemsPerPage}
          className="px-3 py-2 text-sm font-semibold bg-white border border-gray-300 rounded-md focus:outline-none"
        >
          {itemsPerPageOptions.map((option) => (
            <option key={option} value={option}>
              {option} per page
            </option>
          ))}
        </select>
      </nav>
    </div>
  );
};

export default Pagination;
