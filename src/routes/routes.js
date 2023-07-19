// set routes for website
import config from '../configs';

// Components for public routes
import HomePage from '../Pages/Home';

// Layout

const publicRoutes = [
    {
        path: config.routes.home,
        component: HomePage,
    },
];

export { publicRoutes };
