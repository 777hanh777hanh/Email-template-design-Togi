import PropTypes from 'prop-types';

import { useClassNames } from '../../../hooks';
import styles from './Header.module.scss';

const Header = ({ className: customClassName }) => {
    const cx = useClassNames(styles);

    return (
        <>
            <h1 className={cx(customClassName, 'header')}>Header</h1>
        </>
    );
};

Header.propTypes = {
    className: PropTypes.string,
};

export default Header;
