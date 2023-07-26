import PropTypes from 'prop-types';

import { useClassNames } from '../../hooks';
import styles from './Subscribe.module.scss';
import { Card } from '~/components/Card';
import { Title } from '~/components/Title';
import { Heading } from '~/components/Heading';
import { MailIcon, SalesIcon, GroupIcon, InfoBookIcon } from '../Icons';

const Subscribe = ({ className: customClassName }) => {
    const cx = useClassNames(styles);

    return (
        <section className={cx('subscribe', customClassName)}>
            <div className={cx('wide', 'wide-subscribe')}>
                <div className={cx('inner')}>
                    <Title>Returning subscribers</Title>
                    <Heading className={cx('heading')}>Turn new visitors into subscribers</Heading>
                    <div className={cx('content')}>
                        <Card
                            to="/"
                            horizontal
                            title={'Collect more emails'}
                            desc={'Grow a segmented email list with quality subscribers.'}
                            icon={<MailIcon />}
                        />
                        <Card
                            to="/"
                            horizontal
                            title={'Increase your sales'}
                            desc={'Sell more to your website visitors and make the most of your traffic.'}
                            icon={<SalesIcon />}
                        />
                        <Card
                            to="/"
                            horizontal
                            title={'Get in touch with visitors'}
                            desc={'Send each visitor to the products or pages they should see.'}
                            icon={<GroupIcon />}
                        />
                        <Card
                            to="/"
                            horizontal
                            title={'Guide visitors around'}
                            desc={'Invite visitors to contact you for support, feedback, or a sales call.'}
                            icon={<InfoBookIcon />}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

Subscribe.propTypes = {
    className: PropTypes.string,
};

export default Subscribe;
