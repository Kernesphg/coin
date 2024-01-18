import { createBrowserRouter } from 'react-router-dom';
import { MarketPage } from '../pages/Market/MarketPage';
import { MainLayout } from '../layouts/MainLayout';
import { NewsPage } from '../pages/NewsPage';
import { CoinPage } from '../pages/Market/CoinPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/market',
        element: <MarketPage />,
      },
      {
        path: '/market/:id',
        element: <CoinPage />,
      },
      {
        path: '/news',
        element: <NewsPage />,
      },
    ],
  },
]);
