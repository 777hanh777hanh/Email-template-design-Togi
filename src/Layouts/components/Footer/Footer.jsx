import PropTypes from 'prop-types';

import styles from './Footer.module.scss';
import { Logo } from '~/components/Logo';
import { useClassNames } from '~/hooks';
import { Button } from '~/components/Button';

const Footer = ({ className: customClassName }) => {
    const cx = useClassNames(styles);

    return (
        <>
            <footer className={cx('footer', customClassName)}>
                <div className={cx('wide')}>
                    <div className={cx('inner')}>
                        {/* Logo */}
                        <Logo className={cx('logo')} />

                        {/* Link */}
                        <div className={cx('content')}>
                            <Button className={cx('link')} link>
                                Product
                            </Button>
                            <Button className={cx('link')} link>
                                Resources
                            </Button>
                            <Button className={cx('link')} link>
                                About
                            </Button>
                            <Button className={cx('link')} link>
                                Help
                            </Button>
                        </div>

                        {/* Copyright */}
                        <h4 className={cx('copyright')}>© 2022 UIHUT | All Right Reserved</h4>
                    </div>
                </div>
            </footer>
        </>
    );
};

Footer.propTypes = {
    className: PropTypes.string,
};

export default Footer;
