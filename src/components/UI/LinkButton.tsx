import { FC } from 'react';
import { Link } from 'react-router-dom';
import { linkButtonProps } from '../../types/componentsTypes/UItypes/buttons';

export const LinkButton: FC<linkButtonProps> = ({ isActive, to, label }) => {
  return (
    <Link
      className={`${
        isActive ? 'bg-primary hover:bg-primary_hover text-white' : ''
      }  px-6 py-3 rounded-full`}
      to={to}>
      {label}
    </Link>
  );
};
