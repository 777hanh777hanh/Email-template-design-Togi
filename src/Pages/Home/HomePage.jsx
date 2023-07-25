import PropTypes from 'prop-types';

import { useClassNames } from '../../hooks';
import styles from './Home.module.scss';
import { Hero } from '~/components/Hero';
import { EmailCapture } from '~/components/EmailCapture';

const HomePage = ({ children, className: customClassName }) => {
    const cx = useClassNames(styles);

    return (
        <>
            <Hero className={cx('hero')} />
            <EmailCapture className={cx('email-capture')} />
        </>
    );
};

HomePage.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

export default HomePage;
