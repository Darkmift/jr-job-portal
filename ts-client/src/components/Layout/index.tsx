import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import { Outlet } from 'react-router-dom';

function index({}) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
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
