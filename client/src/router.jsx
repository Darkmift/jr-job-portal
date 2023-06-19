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
        children: [
            {
                index: true,
                element: <Home />,
                exact: true,
            },
            {
                path: 'about',
                element: <AboutPage />,
                exact: true,
            },
        ],
    },
]);
export default MainRouter;
