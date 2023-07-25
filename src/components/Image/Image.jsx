import PropTypes from 'prop-types';

import { useClassNames } from '~/hooks';
import styles from './Image.module.scss';

const Image = ({ className: customClassName, src, alt }) => {
    const cx = useClassNames(styles);

    return <img className={cx(customClassName, 'img')} src={src} alt={alt} />;
};

Image.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
};

export default Image;
