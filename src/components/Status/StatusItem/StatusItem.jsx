import PropTypes from 'prop-types';

import { useClassNames } from '~/hooks';
import styles from './StatusItem.module.scss';

const StatusItem = ({ className: customClassName, icon, number, title }) => {
    const cx = useClassNames(styles);
    return (
        <div className={cx('item', customClassName)}>
            <div className={cx('icon')}>{icon}</div>
            <div className={cx('number')}>{number}</div>
            <div className={cx('title')}>{title}</div>
        </div>
    );
};

StatusItem.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.node,
    number: PropTypes.string,
    title: PropTypes.string,
};

export default StatusItem;
