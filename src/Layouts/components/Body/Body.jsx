import PropTypes from 'prop-types';
import { useClassNames } from '~/hooks';
import styles from './Body.module.scss';

const Body = ({ children, className: customClassName }) => {
    const cx = useClassNames(styles);
    return <div className={cx('wrapper', customClassName)}>{children}</div>;
};

Body.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

export default Body;
