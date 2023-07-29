import PropTypes from 'prop-types';

import styles from './FeatureSupport.module.scss';
import { useClassNames } from '~/hooks';
import { Title } from '~/components/Title';
import { Heading } from '~/components/Heading';
import { Image } from '~/components/Image';
import images from '~/assets/images';

const FeatureSupport = ({ className: customClassName }) => {
    const cx = useClassNames(styles);

    return (
        <section className={cx('featureSupport', customClassName)}>
            <div className={cx('wide', 'wide-featureSupport')}>
                <div className={cx('inner')}>
                    <figure className={cx('images')}>
                        <Image className={cx('img')} src={images.chart} />
                        <div className={cx('sticky')}>
                            <div className={cx('top')}>
                                <p className={cx('title')}>Avg. Revenue</p>
                                <div className={cx('skeleton', 'skeleton--large')}></div>
                            </div>
                            <div className={cx('bottom')}>
                                <p className={cx('title')}>Total Revenue</p>
                                <div className={cx('skeleton-group')}>
                                    <div className={cx('skeleton')}></div>
                                    <div className={cx('skeleton', 'skeleton--small')}></div>
                                </div>
                            </div>
                        </div>
                    </figure>
                    <section className={cx('info')}>
                        <Title className={cx('title')}>TEAMWORK</Title>
                        <Heading className={cx('heading')}>
                            Design stunning popups (without a designer)
                        </Heading>
                        <p className={cx('desc', 'section__desc')}>
                            Drag, drop, add, and remove. Customize your popups as little or as much as you
                            need. Create slide-ins and forms that match the look and feel of your site (even
                            if you’re not a designer.). Drag, drop, add, and remove. Customize your popups as
                            little or as much as you need.
                        </p>
                    </section>
                </div>
            </div>
        </section>
    );
};

FeatureSupport.propTypes = {
    className: PropTypes.string,
};

export default FeatureSupport;
