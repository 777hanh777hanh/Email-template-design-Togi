import PropTypes from 'prop-types';

import { useClassNames } from '../../hooks';
import styles from './Title.module.scss';

const Title = ({ children, className: customClassName }) => {
    const cx = useClassNames(styles);

    return <h4 className={cx('title', customClassName)}>{children}</h4>;
};

Title.propTypes = {
    children: PropTypes.string,
    className: PropTypes.string,
};

export default Title;
