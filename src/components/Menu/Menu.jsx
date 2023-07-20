import PropTypes from 'prop-types';

import { useClassNames } from '~/hooks';
import styles from './Menu.module.scss';
import { Button } from '~/components/Button';
import { ChevronDownIcon } from '../Icons';

const Menu = (customClassNames) => {
    const cx = useClassNames(styles);

    return (
        <div className={cx(customClassNames, 'wrapper')}>
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
    customClassNames: PropTypes.string,
};

export default Menu;
