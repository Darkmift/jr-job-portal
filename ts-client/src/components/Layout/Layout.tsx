import styles from './Layout.module.scss';

import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import { Outlet } from 'react-router-dom';

function index({}) {
  return (
    <div className={styles['layout-wrapper']}>
      <AppHeader />
      <div style={{ flex: '1' }}>
        <Outlet />
      </div>
      <AppFooter />
    </div>
  );
}

index.propTypes = {};

export default index;
