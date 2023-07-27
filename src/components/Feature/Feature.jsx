import PropTypes from 'prop-types';

import { useClassNames } from '~/hooks';
import styles from './Feature.module.scss';
import { Title } from '~/components/Title';
import { Heading } from '~/components/Heading';
import { Card } from '~/components/Card';
import { BoxIcon, FamilyIcon, HomeIcon, MailBorderIcon, MailIcon, SignalIcon } from '~/components/Icons';

const Feature = ({ className: customClassName }) => {
    const cx = useClassNames(styles);

    return (
        <section className={cx('section', customClassName)}>
            <div className={cx('wide', 'wide-feature')}>
                <div className={cx('inner')}>
                    <Title className={cx('title')}>Meet each visitor</Title>
                    <Heading className={cx('heading')}>Help subscribers make their first buy</Heading>
                    <div className={cx('content')}>
                        <div className={cx('parameter')}>
                            <Card
                                className={cx('card')}
                                title={'Page visits'}
                                number={'1228'}
                                desc={'67% from the last email sent'}
                                icon={<HomeIcon />}
                                vertical
                                disabled
                                iconOut
                            />
                            <Card
                                className={cx('card')}
                                title={'Email sent'}
                                number={'1397'}
                                desc={'67% from the last email sent'}
                                icon={<MailIcon />}
                                vertical
                                disabled
                                iconOut
                            />
                            <Card
                                className={cx('card')}
                                title={'Product bought'}
                                number={'631'}
                                desc={'17% from the last email sent'}
                                icon={<BoxIcon />}
                                vertical
                                disabled
                                iconOut
                                iconOutL
                            />
                        </div>
                        <div className={cx('cta')}>
                            <Card
                                className={cx('card')}
                                title={'Applicant status'}
                                desc={'Applying'}
                                icon={<SignalIcon />}
                                horizontal
                                dots
                            />
                            <Card
                                className={cx('card')}
                                title={'Opened email'}
                                desc={'Xmas Newsletter'}
                                icon={<MailBorderIcon />}
                                horizontal
                                dots
                            />
                            <Card
                                className={cx('card')}
                                title={'Follow up'}
                                desc={'Follow status'}
                                icon={<FamilyIcon />}
                                horizontal
                                dots
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

Feature.propTypes = {
    className: PropTypes.string,
};

export default Feature;
