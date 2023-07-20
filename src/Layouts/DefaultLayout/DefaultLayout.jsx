import PropTypes from 'prop-types';

import Header from '~/Layouts/components/Header';
import Body from '~/Layouts/components/Body';
import Footer from '~/Layouts/components/Footer';

const DefaultLayout = ({ children }) => {
    return (
        <>
            <Header />
            <Body>{children}</Body>
            <Footer />
        </>
    );
};

DefaultLayout.propTypes = {
    children: PropTypes.node,
};

export default DefaultLayout;
