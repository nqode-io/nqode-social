import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Link.module.scss';

interface LinkProps {
  to: string;
  label: string;
}

const LinkComponent: React.FC<LinkProps> = ({ to, label }) => {
  return (
    <div>
      <Link to={to} className={`${classes['c-link']}`}>
        {label}
      </Link>
    </div>
  );
};

export default LinkComponent;
