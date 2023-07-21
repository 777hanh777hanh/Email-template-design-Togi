import PropTypes from 'prop-types';

import { useClassNames } from '~/hooks';
import styles from './Menu.module.scss';
import { Button } from '~/components/Button';
import { ChevronDownIcon } from '../Icons';

const Menu = ({ className: customClassName }) => {
    const cx = useClassNames(styles);

    return (
        <div className={cx(customClassName, 'wrapper')}>
            <Button className={cx('link')} rightIcon={<ChevronDownIcon />}>
                Products
            </Button>
            <Button to="#!" className={cx('link')}>
                Pricing
            </Button>
            <Button className={cx('link')} rightIcon={<ChevronDownIcon />}>
                Company
            </Button>
            <Button to="#!" className={cx('link')}>
                Blog
            </Button>
        </div>
    );
};

Menu.propTypes = {
    className: PropTypes.string,
};

export default Menu;
