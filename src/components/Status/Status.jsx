import PropTypes from 'prop-types';

import { useClassNames } from '~/hooks';
import styles from './Status.module.scss';
import { Title } from '../Title';
import { Heading } from '../Heading';
import StatusItem from './StatusItem';
import { DragIcon, EditIcon, ElementIcon, PopupIcon } from '~/components/Icons';

const Status = ({ className: customClassName }) => {
    const cx = useClassNames(styles);
    return (
        <section className={cx('status', customClassName)}>
            <div className={cx('wide', 'wide-status')}>
                <div className={cx('inner')}>
                    <Title className={cx('title')}>stunning popups</Title>
                    <Heading className={cx('heading')}>Sell more to your existing customers</Heading>
                    <div className={cx('content')}>
                        <StatusItem
                            className={cx('item')}
                            icon={<DragIcon />}
                            number={'10K+'}
                            title={'Drag-and-drop'}
                        />
                        <StatusItem
                            className={cx('item')}
                            icon={<PopupIcon />}
                            number={'75+'}
                            title={'popup templates'}
                        />
                        <StatusItem
                            className={cx('item')}
                            icon={<ElementIcon />}
                            number={'120+'}
                            title={'Customize elements'}
                        />
                        <StatusItem
                            className={cx('item')}
                            icon={<EditIcon />}
                            number={'312+'}
                            title={'Edit mobile separately'}
                        />
                    </div>
                    <div className={cx('effect')}></div>
                </div>
            </div>
        </section>
    );
};

Status.propTypes = {
    className: PropTypes.string,
};

export default Status;
