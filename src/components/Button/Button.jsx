import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useClassNames } from '~/hooks';
import styles from './Button.module.scss';

const Button = ({
    className: customClassName,
    to,
    href,
    onClick,
    disabled,
    small,
    mobile,
    link,
    children,
    leftIcon,
    rightIcon,
    ...passProps
}) => {
    const cx = useClassNames(styles);
    const classes = cx('wrapper', {
        [customClassName]: customClassName,
        to,
        href,
        small,
        mobile,
        link,
        disabled,
    });
    const props = {
        onClick,
        ...passProps,
    };

    // Change type of button ( Link / a / button)
    let Component = 'button';
    if (to) {
        Component = Link;
        props.to = to;
    } else if (href) {
        Component = 'a';
        props.href = href;
    }

    // remove events listener when button disabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    return (
        <Component className={classes} {...props}>
            {leftIcon && <span className={cx('icon', 'icon-l')}>{rightIcon}</span>}
            {children}
            {rightIcon && <span className={cx('icon', 'icon-r')}>{rightIcon}</span>}
        </Component>
    );
};

Button.propTypes = {
    className: PropTypes.string,
    to: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    link: PropTypes.bool,
    children: PropTypes.node.isRequired,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    passProps: PropTypes.any,
};

export default Button;
