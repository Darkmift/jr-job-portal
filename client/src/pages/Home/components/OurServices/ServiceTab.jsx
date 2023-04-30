// styles
import styles from './ServiceTab.module.scss';
import ServiceTabVector from '@/assets/images/svg/service-tab-vector.svg';

function ServiceTab({ title, link }) {
    return (
        <div className={styles['service-tab']}>
            <span className={styles['title']}>{title}</span>

            <img
                className={styles['link']}
                src={ServiceTabVector}
                alt={'arrow navigation'}
            />
        </div>
    );
}

export default ServiceTab;
