import PropTypes from 'prop-types';

import { useClassNames } from '~/hooks';
import styles from './EmailCapture.module.scss';
import { Image } from '~/components/Image';
import { Button } from '~/components/Button';
import images from '~/assets/images';

const EmailCapture = ({ className: customClassName }) => {
    const cx = useClassNames(styles);

    return (
        <>
            <section className={cx(customClassName, 'email-capture')}>
                <div className={cx('wide')}>
                    <div className={cx('inner')}>
                        <figure className={cx('images')}>
                            <Image src={images.emailCapture} />
                        </figure>
                        <div className={cx('content')}>
                            <h4 className={cx('title', 'section__title')}>email capture</h4>
                            <h2 className={cx('section__heading', 'heading')}>
                                Multiple popups for multiple goals
                            </h2>
                            <p className={cx('section__desc', 'desc')}>
                                From email capture to reducing cart abandonment, create multiple.
                            </p>
                            <p className={cx('section__desc', 'desc')}>
                                From email capture to reducing cart abandonment, create multiple, personalized
                                popups for different groups of visitors. From email capture to reducing cart
                                abandonment, create multiple, personalized popups for different groups of
                                visitors.
                            </p>

                            <Button className={cx('btn')}>Start your free trial</Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

EmailCapture.propTypes = {
    className: PropTypes.string,
};

export default EmailCapture;
