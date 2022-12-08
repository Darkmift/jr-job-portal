/* see:
 * https://reactrouter.com/en/main/routers/create-hash-router
 */

import { createHashRouter } from 'react-router-dom';
import Dashboard from '@/components/pages/Dashboard';

const MainRouter = createHashRouter([
    {
        path: '/',
        element: <Dashboard name="The Dashboard" />,
    },
]);

export default MainRouter;
