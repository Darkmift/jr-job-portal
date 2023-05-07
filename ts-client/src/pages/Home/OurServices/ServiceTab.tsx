// styles
import styles from './ServiceTab.module.scss';
import ServiceTabVector from '@/assets/images/svg/service-tab-vector.svg';

type Props = { title: string; link: string };

function ServiceTab({ title, link }: Props) {
  return (
    <div
      className={styles['service-tab']}
      onClick={() => {
        `${link}`;
      }}
    >
      <span className={styles['title']}>{title}</span>

      <img className={styles.title} src={ServiceTabVector} alt={'arrow navigation'} />
    </div>
  );
}

export default ServiceTab;
