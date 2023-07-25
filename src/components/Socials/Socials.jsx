import PropTypes from 'prop-types';

import { useClassNames } from '~/hooks';
import styles from './Socials.module.scss';
import { LinkedInIcon, TwitterIcon, FacebookIcon, ArrowDownIcon } from '~/components/Icons';
import { Button } from '../Button';

const Socials = ({ className: customClassName }) => {
    const cx = useClassNames(styles);
    return (
        <div className={cx(customClassName, 'wrapper')}>
            <div className={cx('socials-list')}>
                <Button circle className={cx('social-btn')} to={'#!'}>
                    {<LinkedInIcon />}
                </Button>
                <Button circle className={cx('social-btn')} to={'#!'}>
                    {<FacebookIcon />}
                </Button>
                <Button circle className={cx('social-btn')} to={'#!'}>
                    {<TwitterIcon />}
                </Button>
            </div>
            <div className={cx('cta')}>
                <p className={cx('desc')}>Scroll Down</p>
                <div className={cx('arrow')}>
                    <ArrowDownIcon />
                </div>
            </div>
        </div>
    );
};

Socials.propTypes = {
    className: PropTypes.string,
};

export default Socials;
