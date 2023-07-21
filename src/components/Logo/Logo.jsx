import PropTypes from 'prop-types';

import styles from './Logo.module.scss';
import { useClassNames } from '~/hooks';

const Logo = ({ className: customClassNames }) => {
    const cx = useClassNames(styles);
    return (
        <>
            <strong className={cx(customClassNames, 'logo')}>Togi</strong>
        </>
    );
};

Logo.propTypes = {
    className: PropTypes.string,
};

export default Logo;
