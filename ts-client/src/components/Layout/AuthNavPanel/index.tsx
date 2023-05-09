// styles
import styles from './AuthNavPanel.module.scss';
import Button, { ButtonVariant } from '@/components/common/Button';

type Props = {};

function AuthNavPanel({}: Props) {
  const isLoggedIn = false; //placeholder for logic

  const clickHandler = () => {};

  return isLoggedIn ? (
    <>TODO add logged in panel</>
  ) : (
    <div className={styles['auth-nav-panel']}>
      <Button onClick={clickHandler} label={'להרשמה'} />
      <Button
        onClick={clickHandler}
        variant={ButtonVariant.TEXT}
        label={'להתחברות'}
      />
    </div>
  );
}

export default AuthNavPanel;
