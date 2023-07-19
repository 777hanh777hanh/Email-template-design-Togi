import PropTypes from 'prop-types';

const NonHeaderLayout = ({ children }) => {
    return (
        <>
            <h2>Non-HeaderLayout</h2>
            {children}
        </>
    );
};

NonHeaderLayout.propTypes = {
    children: PropTypes.node,
};

export default NonHeaderLayout;
