import React, { useState } from 'react';

interface Link {
  text: string;
  href: string;
  links?: Link[];
  iconL?: React.ReactNode;
  iconR?: React.ReactNode;
}

interface AccordionProps {
  title: string;
  links: Link[];
  iconL?: React.ReactNode;
  iconR?: React.ReactNode;
}

const iconLeft = <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>;
const iconRight = <svg className="hs-accordion-active:hidden ms-auto block w-4 h-4 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"></path>
</svg>;

const Accordion: React.FC<AccordionProps> = ({ title, links, iconL=iconLeft, iconR=iconRight }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className={`hs-accordion ${isOpen ? 'hs-accordion-active' : ''}`} id="projects-accordion">
      <button
        type="button"
        className={`hs-accordion-toggle ${
          isOpen ? 'hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent' : ''
        } w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600`}
        onClick={toggleAccordion}
      >
        { iconL }

        {title}

        <svg
          className={`hs-accordion-active:block ms-auto ${isOpen ? 'hidden' : ''} w-4 h-4 text-gray-600 group-hover:text-gray-500 dark:text-gray-400`}
        >
          {  }
        </svg>

        <svg
          className={`hs-accordion-active:hidden ms-auto ${isOpen ? 'block' : ''} w-4 h-4 text-gray-600 group-hover:text-gray-500 dark:text-gray-400`}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          { (links && links.length > 0) && iconR }
        </svg>
      </button>

      {(links && links.length > 0) && links.map((link, index) => (
      <div key={index}
        id="projects-accordion"
        className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${isOpen ? '' : 'hidden'}`}
      >
        <ul key={index} className="pt-2 ps-2">
            <li key={index} >
              {!link.links && <a
                className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href={link.href}
              >
                {link.text}
              </a> }
              {link.links && <Accordion title={link.text} links={link.links} />}
            </li>
        </ul>
      </div>
          ))}
    </li>
  );
};

// Example usage
const YourComponent: React.FC = () => {
  const projects: AccordionProps[] = [
    {
      title: 'Projects 1',
      links: [
        {
          text: 'Link 1',
          href: '#',
          links: [
            { 
                text: 'L 1 1', 
                href: '#', 
                links: [
                    { text: 'L 1 1 1', href: '#' },
                    { text: 'L 1 1 2', href: '#' },
                ],
             },
            { text: 'L 1 2', href: '#' },
          ],
        },
        {
          text: 'Link 2',
          href: '#',
          links: [
            { text: 'L 1', href: '#' },
            { text: 'L 2', href: '#' },
          ],
        },
      ],
    },
    { title: 'Projects 2', links: [{ text: 'Link 3', href: '#' }, { text: 'Link 4', href: '#' }] },
    { title: 'Projects 3', links: [] },
  ];

  return (
    <ul>
      {projects.map((project, index) => (
        <Accordion key={index} title={project.title} links={project.links} />
      ))}
    </ul>
  );
};

export default YourComponent;
