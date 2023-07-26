import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { useClassNames } from '../../hooks';
import styles from './Card.module.scss';

const Card = ({ className: customClassName, icon, title, desc, horizontal, vertical, to }) => {
    const cx = useClassNames(styles);
    const classes = cx('card', customClassName, {
        horizontal,
        vertical,
    });

    return (
        <Link to={to} className={classes}>
            <div className={cx('icon-wrapper')}>
                <div className={cx('icon')}>{icon}</div>
            </div>
            <div className={cx('info')}>
                <div className={cx('title')}>{title} </div>
                <div className={cx('desc')}>{desc} </div>
            </div>
        </Link>
    );
};

Card.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.node,
    title: PropTypes.string,
    desc: PropTypes.string,
    horizontal: PropTypes.bool,
    vertical: PropTypes.bool,
    to: PropTypes.string,
};

export default Card;
