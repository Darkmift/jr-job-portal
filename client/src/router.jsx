/* see:
 * https://reactrouter.com/en/main/routers/create-hash-router
 */

import { createHashRouter } from 'react-router-dom';
import Home from '@/pages/Home';
import Layout from '@/components/Layout';
import AboutPage from './pages/About/AboutPage';

const MainRouter = createHashRouter([
    {
        path: '/',
        element: <Layout />,
        exact: true,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: 'about',
                element: <AboutPage />,
            },
        ],
    },
]);

export default MainRouter;
