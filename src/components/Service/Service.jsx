import PropTypes from 'prop-types';

import { useClassNames } from '~/hooks';
import styles from './Service.module.scss';
import { Title } from '../Title';
import { Heading } from '../Heading';
import { Card } from '../Card';
import { DesignIcon, GroupIcon, LightIcon, TargetIcon } from '../Icons';

const Service = ({ className: customClassName }) => {
    const cx = useClassNames(styles);
    return (
        <section className={cx('service', customClassName)}>
            <div className={cx('wide', 'wide-service')}>
                <div className={cx('inner')}>
                    <Title className={cx('title')}>WORK PROCESS</Title>
                    <Heading className={cx('heading')}>
                        The most user-friendly popup builder ever made
                    </Heading>
                    <div className={cx('content')}>
                        <Card
                            className={cx('item')}
                            to="/"
                            vertical
                            title={'Collect more emails'}
                            desc={'Grow a segmented email list with quality subscribers.'}
                            icon={<DesignIcon />}
                        />
                        <Card
                            className={cx('item')}
                            to="/"
                            vertical
                            title={'Increase your sales'}
                            desc={'Sell more to your website visitors and make the most of your traffic.'}
                            icon={<TargetIcon />}
                        />
                        <Card
                            className={cx('item')}
                            to="/"
                            vertical
                            title={'Get in touch with visitors'}
                            desc={'Send each visitor to the products or pages they should see.'}
                            icon={<LightIcon />}
                        />
                        <Card
                            className={cx('item')}
                            to="/"
                            vertical
                            title={'Guide visitors around'}
                            desc={'Invite visitors to contact you for support, feedback, or a sales call.'}
                            icon={<GroupIcon />}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

Service.propTypes = {
    className: PropTypes.string,
};

export default Service;
