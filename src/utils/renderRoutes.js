import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { Fragment } from 'react';

// Layouts
import DefaultLayout from '../Layouts';

function renderRoutes(routes) {
    if (Array.isArray(routes)) {
        return routes.map((route, index) => {
            const Page = route.component;
            let Layout = DefaultLayout;
            if (route.layout) {
                Layout = route.layout;
            } else if (route.layout === null) {
                Layout = Fragment;
            }

            return (
                <Route
                    key={index}
                    path={route.path}
                    element={
                        <Layout>
                            <Page />
                        </Layout>
                    }
                >
                    {route.children && renderRoutes(route.children)}
                </Route>
            );
        });
    }
}

renderRoutes.propTypes = {
    routes: PropTypes.array.isRequired,
};

export default renderRoutes;
