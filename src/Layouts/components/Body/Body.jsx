import PropTypes from 'prop-types';
import { useClassNames } from '~/hooks';
import styles from './Body.module.scss';

const Body = ({ children }) => {
    const cx = useClassNames(styles);
    return <div className={cx('wrapper')}>{children}</div>;
};

Body.propTypes = {
    children: PropTypes.node,
};

export default Body;
