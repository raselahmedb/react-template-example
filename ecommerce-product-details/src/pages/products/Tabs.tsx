import { useState } from 'react';

interface Props {
  name: string;
  content: string;
}

const props: Props[] =[
  {name: "Product Details", content: "Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!."},
  {name: "Additional Information", content: "Additional Information"},
  {name: "Customer Reviews", content: "Customer Reviews"},
];

function Tabs  () {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabNumber: number) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <nav className="-mb-0.5 flex justify-center space-x-6" aria-label="Tabs" role="tablist">
      {/* text-heading pr-2 text-sm font-semibold leading-relaxed md:text-base lg:text-lg */}
        {props.map((prop, index) => (
          <button
            key={prop.name}
            type="button"
            className={`${
              activeTab === index
                ? 'font-semibold border-blue-600 text-blue-600'
                : 'text-gray-500 hover:text-blue-600'
            } py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap focus:outline-none focus:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500`}
            id={`horizontal-alignment-item-${index}`}
            data-hs-tab={`#horizontal-alignment-${index}`}
            aria-controls={`horizontal-alignment-${index}`}
            role="tab"
            onClick={() => handleTabClick(index)}
          >
            {prop.name}
          </button>
        ))}
      </nav>

      <div className="mt-3">
        {props.map((prop, index) => (
          <div
            key={prop.name}
            id={`horizontal-alignment-${index}`}
            role="tabpanel"
            aria-labelledby={`horizontal-alignment-item-${index}`}
            className={activeTab === index ? '' : 'hidden'}
          >
            <p className="text-gray-500 dark:text-gray-400">
              { prop.content }
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
