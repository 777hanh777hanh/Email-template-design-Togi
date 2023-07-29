import PropTypes from 'prop-types';

import { useClassNames } from '~/hooks';
import styles from './FooterInfo.module.scss';
import { Avianca, Boozt, Rituals, Verifone } from '~/assets/images/brands';
import SofaCompany from '~/assets/images/brands/Sofacompany';
import { Button } from '~/components/Button';
import { Image } from '~/components/Image';
import images from '~/assets/images';
import { FooterEffect } from '~/assets/images/footer/FooterEffect';

const FooterInfo = ({ className: customClassName }) => {
    const cx = useClassNames(styles);
    return (
        <div className={cx('footerInfo', customClassName)}>
            <div className={cx('wide', 'wide-footerInfo')}>
                <div className={cx('inner')}>
                    <div className={cx('title')}>Standards & Technology Trusted By:</div>
                    <div className={cx('brands')}>
                        <div className={cx('brand')}>
                            <Avianca />
                        </div>
                        <div className={cx('brand')}>
                            <Boozt />
                        </div>
                        <div className={cx('brand')}>
                            <Verifone />
                        </div>
                        <div className={cx('brand')}>
                            <Rituals />
                        </div>
                        <div className={cx('brand')}>
                            <SofaCompany />
                        </div>
                    </div>
                    <div className={cx('cta')}>
                        <div className={cx('info')}>
                            <div className={cx('heading')}>Should we design your first popup?</div>
                            <div className={cx('desc')}>
                                Pick a template, customize as you need, and integrate with your other
                                marketing tools.
                            </div>
                            <Button className={cx('btn')}>Start your free trial</Button>
                        </div>
                        <figure className={cx('image')}>
                            <Image src={images.footerChar} />
                        </figure>
                        <div className={cx('effect')}>
                            <FooterEffect />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

FooterInfo.propTypes = {
    className: PropTypes.string,
};

export default FooterInfo;
