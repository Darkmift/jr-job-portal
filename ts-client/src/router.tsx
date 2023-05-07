// MainRouter.tsx

import { RouteObject } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import Home from '@/pages/Home/Home';
import Layout from '@/components/Layout/Layout';

const routes: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
];

const MainRouter = createBrowserRouter(routes);

export default MainRouter;
