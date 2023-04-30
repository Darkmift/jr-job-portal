// styles
import styles from './OurServices.module.scss';

function OurServices({ children }) {
    return (
        <div className={styles['our-services']}>
            <h3 className={styles['secondary-heading']}>השירותים שלנו</h3>
            <div className={styles['tabs-wrapper']}>{children}</div>
        </div>
    );
}

export default OurServices;
