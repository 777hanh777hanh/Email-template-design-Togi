import PropTypes from 'prop-types';

import { useClassNames } from '~/hooks';
import styles from './Heading.module.scss';

const Heading = ({ children, className: customClassName, type = 'h1' }) => {
    const cx = useClassNames(styles);
    const Comp = type;
    const classes = cx('heading', customClassName);

    return <Comp className={classes}>{children}</Comp>;
};

Heading.propTypes = {
    children: PropTypes.string,
    className: PropTypes.string,
    type: PropTypes.string,
};

export default Heading;
