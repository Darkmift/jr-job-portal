import React from 'react';
import styles from './Welcome.module.scss';
import WelcomePic from '@/assets/images/svg/welcome-pic.svg';
import Button from '@/components/common/Button';

const Welcome = () => {
    const handleClick = () => {
        console.log('clicked');
    };

    return (
        <>
            <div className={`${styles.welcomeContainer}`}>
                <div className={`${styles.welcomeDiv}`}>
                    <span className={`${styles.title}`}>ברוכים הבאים</span>
                    <p className={`${styles.text}`}>
                        קהילת #כולא_לייק הוקמה במאי 2021 במסגרת מיזם השינוי
                        ההתנדבותי והחינמי #שופר אותו ייסד עדי פורת ובראשה עומדת
                        רחל פיירמן. כדי להשיג כמחפשי.ות עבודה את המקסימום
                        מהקהילה שכולה עשייה התנדבותית ונתינה. בקהילה אנחנו
                        נותנים סיוע בפעילות התנדבותית וכן הכשרה מקצועית ושכלול
                        מיומנויות.
                    </p>
                    <div>
                        <Button
                            label="תרשמו אותי"
                            onClick={handleClick}
                        ></Button>
                    </div>
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
};
export default Welcome;
