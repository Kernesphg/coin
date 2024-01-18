import { Link, useLocation } from 'react-router-dom';
import { linkButtonArray } from '../types/componentsTypes/UItypes/buttons';
import { LinkButton } from './UI/LinkButton';
import { Logo } from '../assets/icons/Logo';

export const Header = () => {
  const { pathname } = useLocation();

  const links: linkButtonArray[] = [
    { to: '/market', label: 'Монетки' },
    { to: '/news', label: 'Новости' },
  ];
  return (
    <div className="flex justify-between py-10 align-middle">
      <Link to="/market" className="text-3xl font-medium flex gap-2 items-center">
        <div className="w-[40px]">
          <Logo />
        </div>
        <h1>ReactCryptro</h1>
      </Link>
      <ul className="flex justify-between align-middle gap-3">
        {links.map((link) => (
          <li className="flex align-middle">
            <LinkButton
              key={link.to}
              to={link.to}
              isActive={link.to === pathname}
              label={link.label}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
