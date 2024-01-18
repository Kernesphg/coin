import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';

export const MainLayout = () => {
  return (
    <div className="px-10 text-white text-lg">
      <Header />
      <main className="container w-[1200px]">
        <Outlet />
      </main>
    </div>
  );
};
