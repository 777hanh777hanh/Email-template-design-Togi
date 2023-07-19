import PropTypes from 'prop-types';

import { useClassNames } from '../../hooks';
import styles from './Home.module.scss';

const HomePage = ({ children, className: customClassName }) => {
    const cx = useClassNames(styles);

    return (
        <>
            <h2 className={cx(customClassName, 'HomePage')}>HomePage</h2>
            {children}
        </>
    );
};

HomePage.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

export default HomePage;
