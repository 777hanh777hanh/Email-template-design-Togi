import { useClassNames } from '../../../hooks';
import styles from './Footer.module.scss';

const Footer = ({ className: customClassName }) => {
    const cx = useClassNames(styles);

    return (
        <>
            <h1 className={cx(customClassName, 'footer')}>Footer</h1>
        </>
    );
};

export default Footer;
