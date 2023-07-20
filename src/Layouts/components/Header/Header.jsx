import PropTypes from 'prop-types';

import { useClassNames } from '../../../hooks';
import styles from './Header.module.scss';
import Logo from '~/components/Logo';
import { Menu } from '~/components/Menu';
import { Button } from '~/components/Button';

const Header = ({ className: customClassName }) => {
    const cx = useClassNames(styles);

    return (
        <>
            <section className={cx(customClassName, 'header')}>
                <div className="wide">
                    <div className={cx('inner')}>
                        {/* Logo */}
                        <Logo />

                        {/* Menu */}
                        <Menu />

                        {/* CTA */}
                        <div className={cx('cta-group')}>
                            <Button className={cx('btn')} small>
                                Log in
                            </Button>
                            <Button className={cx('btn')} small>
                                Get Started
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

Header.propTypes = {
    customClassName: PropTypes.string,
};

export default Header;
