// styles
import OurServices from './OurServices';
import ServiceTab from './OurServices/ServiceTab';
import ArticleList from '@/components/common/Article/ArticleList';
import styles from './Home.module.scss';

// mock
import mockAuthorImg from '@/mock/images/author.png';

const serviceTabsData = [
    { title: 'משרות עבודה', link: '' },
    { title: 'תכנים למציאת עבודה', link: '' },
    { title: 'תכנים מקצועיים', link: '' },
    { title: 'קורסים והכשרות', link: '' },
];

const articles = [
    {
        title: 'רשימה של 5 טיפים שעזרו לי ללמוד CSS',
        image: mockAuthorImg,
        author: 'אדיר קנדל',
        date: new Date(),
        authorDescription: 'מפתח פרונט- אנד, ומייסד קהילת FED Cast IL.',
    },
    {
        title: 'רשימה של 5 טיפים שעזרו לי ללמוד CSS',
        image: mockAuthorImg,
        author: 'אדיר קנדל',
        date: new Date(),
        authorDescription: 'מפתח פרונט- אנד, ומייסד קהילת FED Cast IL.',
    },
    {
        title: 'רשימה של 5 טיפים שעזרו לי ללמוד CSS',
        image: mockAuthorImg,
        author: 'אדיר קנדל',
        date: new Date(),
        authorDescription: 'מפתח פרונט- אנד, ומייסד קהילת FED Cast IL.',
    },
    {
        title: 'רשימה של 5 טיפים שעזרו לי ללמוד CSS',
        image: mockAuthorImg,
        author: 'אדיר קנדל',
        date: new Date(),
        authorDescription: 'מפתח פרונט- אנד, ומייסד קהילת FED Cast IL.',
    },
    {
        title: 'רשימה של 5 טיפים שעזרו לי ללמוד CSS',
        image: mockAuthorImg,
        author: 'אדיר קנדל',
        date: new Date(),
        authorDescription: 'מפתח פרונט- אנד, ומייסד קהילת FED Cast IL.',
    },
    {
        title: 'רשימה של 5 טיפים שעזרו לי ללמוד CSS',
        image: mockAuthorImg,
        author: 'אדיר קנדל',
        date: new Date(),
        authorDescription: 'מפתח פרונט- אנד, ומייסד קהילת FED Cast IL.',
    },
    {
        title: 'רשימה של 5 טיפים שעזרו לי ללמוד CSS',
        image: mockAuthorImg,
        author: 'אדיר קנדל',
        date: new Date(),
        authorDescription: 'מפתח פרונט- אנד, ומייסד קהילת FED Cast IL.',
    },
    {
        title: 'רשימה של 5 טיפים שעזרו לי ללמוד CSS',
        image: mockAuthorImg,
        author: 'אדיר קנדל',
        date: new Date(),
        authorDescription: 'מפתח פרונט- אנד, ומייסד קהילת FED Cast IL.',
    },
    {
        title: 'רשימה של 5 טיפים שעזרו לי ללמוד CSS',
        image: mockAuthorImg,
        author: 'אדיר קנדל',
        date: new Date(),
        authorDescription: 'מפתח פרונט- אנד, ומייסד קהילת FED Cast IL.',
    },
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
            <ArticleList articles={articles} />
        </main>
    );
}

export default Home;
