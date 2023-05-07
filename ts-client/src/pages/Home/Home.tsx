import OurServices from './OurServices';
import styles from './Home.module.scss';
import ServiceTab from './OurServices/ServiceTab';

type Props = {};

const serviceTabsData: {
  title: string;
  link: string;
}[] = [
  { title: 'משרות עבודה', link: '' },
  { title: 'תכנים למציאת עבודה', link: '' },
  { title: 'תכנים מקצועיים', link: '' },
  { title: 'קורסים והכשרות', link: '' },
];

function Home({}: Props) {
  return (
    <main className={styles['home-page']}>
      <OurServices>
        {serviceTabsData.map((s) => (
          <ServiceTab {...s} />
        ))}
      </OurServices>
    </main>
  );
}

export default Home;
