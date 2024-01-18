import { FC } from 'react';
import { ButtonProps } from '../../types/componentsTypes/UItypes/buttons';

export const Button: FC<ButtonProps> = ({ label, isActive, click }) => {
  return (
    <button
      onClick={click ? () => click() : () => {}}
      className={`px-5 py-3 rounded-full ${
        isActive
          ? 'transition-all bg-primary hover:bg-primary_hover text-white'
          : 'bg-secondary opacity-80 hover:bg-primary_hover text-icon px-5'
      }`}>
      {label && label}
    </button>
  );
};
