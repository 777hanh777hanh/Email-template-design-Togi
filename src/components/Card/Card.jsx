import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { useClassNames } from '~/hooks';
import styles from './Card.module.scss';
import { DotsIcon } from '~/components/Icons';

const Card = ({
    className: customClassName,
    icon,
    title,
    desc,
    number,
    disabled = false,
    horizontal = false,
    vertical = false,
    iconOut = false,
    iconOutL = false,
    dots = false,
    to,
}) => {
    const cx = useClassNames(styles);
    const classes = cx('card', customClassName, {
        horizontal,
        vertical,
        disabled,
        iconOut,
        iconOutL,
        dots,
    });
    let Comp = 'div';
    if (to) {
        Comp = Link;
    }

    return (
        <Comp to={to} className={classes} disabled={disabled}>
            {icon && (
                <div className={cx('icon-wrapper')}>
                    <div className={cx('icon')}>{icon}</div>
                </div>
            )}
            <div className={cx('info')}>
                {title && <h4 className={cx('title')}>{title} </h4>}
                {number && <p className={cx('number')}>{number}</p>}
                {desc && <p className={cx('desc')}>{desc} </p>}
            </div>
            {dots && (
                <div className={cx('more')}>
                    <DotsIcon />
                </div>
            )}
        </Comp>
    );
};

Card.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.node,
    title: PropTypes.string,
    desc: PropTypes.string,
    number: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    disabled: PropTypes.bool,
    horizontal: PropTypes.bool,
    iconOut: PropTypes.bool,
    iconOutL: PropTypes.bool,
    dots: PropTypes.bool,
    vertical: PropTypes.bool,
    to: PropTypes.string,
};

export default Card;
