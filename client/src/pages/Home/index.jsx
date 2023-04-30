// styles
import OurServices from './components/OurServices';
import ServiceTab from './components/OurServices/ServiceTab';
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
                {serviceTabsData.map(s => (
                    <ServiceTab {...s} />
                ))}
            </OurServices>
        </main>
    );
}

export default Home;
