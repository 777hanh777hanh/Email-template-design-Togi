import PropTypes from 'prop-types';

import Header from '~/Layouts/components/Header';
import Footer from '../components/Footer/Footer';

const DefaultLayout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

DefaultLayout.propTypes = {
    children: PropTypes.node,
};

export default DefaultLayout;
