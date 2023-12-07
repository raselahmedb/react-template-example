import { ReactNode, CSSProperties } from 'react';
import { NavLink } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  activeClassName?: string;
  children?: ReactNode;
  style?: CSSProperties;
  className?: string;
  svg?: ReactNode;
}

function _NavLink({ to, activeClassName='bg-gray-200', children, style, className, svg }: NavLinkProps) {
  return (
    <NavLink
      to={to}
      style={style}
      className={({isActive}) =>
       `flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 ${isActive ? activeClassName : ''} rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 ${className}`}
    >
      {svg && svg }
      {children}
    </NavLink>
  );
}

export default _NavLink;
