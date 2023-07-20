import PropTypes from 'prop-types';

import styles from './Logo.module.scss';
import { useClassNames } from '~/hooks';

const Logo = (customClassName) => {
    const cx = useClassNames(styles);
    return (
        <>
            <strong className={cx(customClassName, 'logo')}>Togi</strong>
        </>
    );
};

Logo.propTypes = {
    customClassName: PropTypes.string,
};

export default Logo;
