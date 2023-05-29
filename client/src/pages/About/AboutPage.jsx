import React from 'react';
import styles from '../Home/Welcome/Welcome.module.scss';
import WelcomePic from '@/assets/images/svg/welcome-pic.svg';
import style from './About.module.scss';

export default function AboutPage() {
    return (
        <>
        <h1>כאן זה דף אודות</h1>
        <h1>כאן זה דף אודות</h1>
            <div className={`${styles.welcomeContainer}`}>
                <div className={`${styles.welcomeDiv}`}>
                    <span className={`${styles.title}`}>
                        מי אנחנו #כולא_לייק?
                    </span>
                    <h1>כאן זה דף אודות</h1>
        <h1>כאן זה דף אודות</h1>
        <h1>כאן זה דף אודות</h1>
        <h1>כאן זה דף אודות</h1>

                    <p className={`${styles.text}`}>
                        קהילת #כולא_לייק הוקמה במאי 2021 במסגרת מיזם השינוי
                        ההתנדבותי והחינמי #שופר אותו ייסד עדי פורת ובראשה עומדת
                        רחל פיירמן. כדי להשיג כמחפשי.ות עבודה את המקסימום
                        מהקהילה שכולה עשייה התנדבותית ונתינה. בקהילה אנחנו
                        נותנים סיוע בפעילות התנדבותית וכן הכשרה מקצועית ושכלול
                        מיומנויות.
                    </p>
                    <h3 className={styles['secondary-heading']}>
                        הבמה שלנו...
                    </h3>
                    <p className={`${styles.text}`}>
                        קהילת #כולא_לייק הוקמה במאי 2021 במסגרת מיזם השינוי
                        ההתנדבותי והחינמי #שופר אותו ייסד עדי פורת ובראשה עומדת
                        רחל פיירמן. כדי להשיג כמחפשי.ות עבודה את המקסימום
                        מהקהילה שכולה עשייה התנדבותית ונתינה. בקהילה אנחנו
                        נותנים סיוע בפעילות התנדבותית וכן הכשרה מקצועית ושכלול
                        מיומנויות.
                    </p>
                    <h3 className={styles['secondary-heading']}>
                        איך אנחנו יכולים לעזור?
                    </h3>
                    <p className={`${styles.text}`}>
                        קהילת #כולא_לייק הוקמה במאי 2021 במסגרת מיזם השינוי
                        ההתנדבותי והחינמי #שופר אותו ייסד עדי פורת ובראשה עומדת
                        רחל פיירמן. כדי להשיג כמחפשי.ות עבודה את המקסימום
                        מהקהילה שכולה עשייה התנדבותית ונתינה. בקהילה אנחנו
                        נותנים סיוע בפעילות התנדבותית וכן הכשרה מקצועית ושכלול
                        מיומנויות.
                    </p>
                    <h3 className={styles['secondary-heading']}>
                        צפו עלינו עוד...
                    </h3>
                    <frame className={`${style['community-video']}`}></frame>
                </div>
                <div className={`${styles.imgDiv}`}>
                    <img
                        className={`${styles.img}`}
                        src={WelcomePic}
                    />
                </div>
            </div>
        </>
    );
}
