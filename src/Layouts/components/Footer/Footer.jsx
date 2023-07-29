import PropTypes from 'prop-types';

import styles from './Footer.module.scss';
import { Logo } from '~/components/Logo';
import { useClassNames } from '~/hooks';
import { Button } from '~/components/Button';
import { Link } from 'react-router-dom';
import FooterInfo from './FooterInfo/FooterInfo';

const Footer = ({ className: customClassName }) => {
    const cx = useClassNames(styles);

    return (
        <>
            <footer className={cx('footer', customClassName)}>
                <div className={cx('wide')}>
                    <div className={cx('inner')}>
                        <div className={cx('top')}>
                            <FooterInfo className={cx('footerInfo')} />
                        </div>
                        <div className={cx('bottom')}>
                            {/* Logo */}
                            <Link to={'/'}>
                                <Logo className={cx('logo')} />
                            </Link>

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
                </div>
            </footer>
        </>
    );
};

Footer.propTypes = {
    className: PropTypes.string,
};

export default Footer;
