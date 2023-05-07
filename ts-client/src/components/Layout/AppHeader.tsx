// scss
import styles from './AppHeader.module.scss';
// cmps
import AuthNavPanel from './AuthNavPanel';

// logo
import Logo from '@/assets/images/svg/kula-like.svg';
import SearchBar from '../common/SeacrhBar';

function AppHeader({}) {
  return (
    <header className={styles['app-header']}>
      <nav>
        <section>
          <img src={Logo} alt="kula like logo" />
          <ul>
            <li>אודות</li>
            <li>משרות עבודה</li>
            <li>כתבות</li>
            <li>הפורום</li>
            <li>צור קשר</li>
          </ul>
          <SearchBar onChange={() => {}} />
        </section>
        <section>
          <AuthNavPanel />
        </section>
      </nav>
    </header>
  );
}

AppHeader.propTypes = {};

export default AppHeader;
