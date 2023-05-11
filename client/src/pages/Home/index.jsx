// styles
import OurServices from './OurServices';
import ServiceTab from './OurServices/ServiceTab';
import styles from './Home.module.scss';

const serviceTabsData = [
    { title: 'משרות עבודה', link: '' },
    { title: 'תכנים למציאת עבודה', link: '' },
    { title: 'תכנים מקצועיים', link: '' },
    { title: 'קורסים והכשרות', link: '' },
];

function Home() {
    return (
        <main className={styles['home-page']}>
            <OurServices>
                {serviceTabsData.map((s, key) => (
                    <ServiceTab
                        key={key}
                        {...s}
                    />
                ))}
            </OurServices>
        </main>
    );
}

export default Home;
