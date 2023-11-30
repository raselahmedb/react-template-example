// Toast.tsx

import React, { useState, useEffect } from 'react';

interface ToastProps {
  variant: string;
  children: React.ReactNode;
}

const Toast: React.FC<ToastProps> = ({ variant, children }) => {
  const [toasts, setToasts] = useState<Array<string>>([]);
  const [show, setShow] = useState(true);

  const closeToast = () => {
    setShow(false);
    // Additional logic for closing the toast
  };

  // Add the new toast to the list when it's shown
  useEffect(() => {
    if (show) {
      setToasts((prevToasts) => [...prevToasts, variant]);
    }
  }, [show, variant]);

  return (
    <>
      {toasts.map((toastVariant, index) => (
        <div
          key={index}
          className={`fixed bottom-4 right-4 transform ${
            index * 16
          } translate-y-0 transition-transform duration-300 ${getVariantStyles(
            toastVariant
          )} z-50 max-w-xs`}
          role="alert"
        >
          <div className="flex p-4">
            {children}
            <div className="ml-auto">
              <button
                type="button"
                onClick={closeToast}
                className="inline-flex flex-shrink-0 justify-center items-center h-5 w-5 rounded-lg text-gray-800 opacity-50 hover:opacity-100 focus:outline-none focus:opacity-100 dark:text-white"
              >
                <span className="sr-only">Close</span>
                <svg
                  className="flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

const getVariantStyles = (variant: string) => {
  // Add your logic to map variant to Tailwind CSS classes
  switch (variant) {
    case 'gray':
      return 'bg-gray-100 border border-gray-200 text-sm text-gray-800 rounded-lg dark:bg-white/10 dark:border-white/20 dark:text-white';
    case 'teal':
      return 'bg-teal-100 border border-teal-200 text-sm text-teal-800 rounded-lg dark:bg-teal-800/10 dark:border-teal-900 dark:text-teal-500';
    case 'blue':
      return 'bg-blue-100 border border-blue-200 text-sm text-blue-800 rounded-lg dark:bg-blue-800/10 dark:border-blue-900 dark:text-blue-500';
    case 'red':
      return 'bg-red-100 border border-red-200 text-sm text-red-800 rounded-lg dark:bg-red-800/10 dark:border-red-900 dark:text-red-500';
    case 'yellow':
      return 'bg-yellow-100 border border-yellow-200 text-sm text-yellow-800 rounded-lg dark:bg-yellow-800/10 dark:border-yellow-900 dark:text-yellow-500';
    default:
      return '';
  }
};

export default Toast;
