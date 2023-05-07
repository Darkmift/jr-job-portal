// OurServices.tsx
import styles from './OurServices.module.scss';
import { ReactNode } from 'react';

type Props = { children: ReactNode };

function OurServices({ children }: Props) {
  return (
    <div className={styles['our-services']}>
      <h3 className={styles['secondary-heading']}>השירותים שלנו</h3>
      <div className={styles['tabs-wrapper']}>{children}</div>
    </div>
  );
}

export default OurServices;
