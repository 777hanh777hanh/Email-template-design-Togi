import { useClassNames } from '../../hooks';
import styles from './Home.module.scss';
import { Hero } from '~/components/Hero';
import { EmailCapture } from '~/components/EmailCapture';
import { Subscribe } from '~/components/Subscribe';

const HomePage = () => {
    const cx = useClassNames(styles);

    return (
        <>
            {/* Hero */}
            <Hero className={cx('hero')} />
            {/* Email capture */}
            <EmailCapture className={cx('email-capture')} />
            {/* Returning subscribers */}
            <Subscribe className={cx('subscribe')} />
            {/* Feature */}
            {/* Status */}
            {/* WorkProcess */}
            {/* Teamwork */}
        </>
    );
};

export default HomePage;
