import PropTypes from 'prop-types';
import './GlobalStyles.scss';

const GlobalStyles = ({ children }) => {
    return children;
};

GlobalStyles.propTypes = {
    children: PropTypes.node,
};

export default GlobalStyles;
