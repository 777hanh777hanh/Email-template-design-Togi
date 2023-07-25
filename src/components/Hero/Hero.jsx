import PropTypes from 'prop-types';

import { useClassNames } from '~/hooks';
import styles from './Hero.module.scss';
import { Button } from '~/components/Button';
import Socials from '~/components/Socials';
import images from '~/assets/images';
import { Image } from '../Image';
import { NoImage, PaperClip, SendIcon } from '~/components/Icons';

const Hero = ({ className: customClassName }) => {
    const cx = useClassNames(styles);

    return (
        <>
            <section className={cx('hero', customClassName)}>
                <div className={cx('wide')}>
                    <div className={cx('inner')}>
                        <Socials className={cx('menu')} />
                        <div className={cx('info')}>
                            <h1 className={cx('heading', 'section__heading', 'section__heading--large')}>
                                More than your average popup builder
                            </h1>
                            <p className={cx('desc', 'section__desc')}>
                                Everything you need—forms, sidebars, slide-ins, gratification—to turn your
                                traffic into revenue.
                            </p>
                            <Button className={cx('btn')}>Start your free trial</Button>
                        </div>
                        <figure className={cx('images')}>
                            <Image src={images.hero} className={cx('img')} />
                            <div className={cx('input-form')}>
                                <input
                                    type="text"
                                    className={cx('input')}
                                    placeholder="Hi, what the process?"
                                />
                                <Button className={cx('addProject')}>{<PaperClip />}</Button>
                                <Button className={cx('addImage')}>{<NoImage />}</Button>
                                <Button
                                    className={cx('send')}
                                    onClick={() => {
                                        alert('sended');
                                    }}
                                    circle
                                >
                                    {<SendIcon />}
                                </Button>
                            </div>
                        </figure>
                    </div>
                </div>
            </section>
        </>
    );
};

Hero.propTypes = {
    className: PropTypes.string,
};

export default Hero;
