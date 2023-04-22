/* see:
 * https://reactrouter.com/en/main/routers/create-hash-router
 */

import { createHashRouter } from 'react-router-dom';
import Home from '@/pages/Home';
import Layout from '@/components/Layout';

const MainRouter = createHashRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
        ],
    },
]);

export default MainRouter;
