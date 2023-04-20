/* see:
 * https://reactrouter.com/en/main/routers/create-hash-router
 */

import { createHashRouter } from 'react-router-dom';
import Home from '@/pages/Home';

const MainRouter = createHashRouter([
    {
        path: '/',
        element: <Home />,
    },
]);

export default MainRouter;
