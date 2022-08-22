import styles from './login.module.css';
import Button from '@mui/material/Button';
import { useTranslation } from 'next-i18next';

/* eslint-disable-next-line */
export interface LoginProps {}

export function Login(props: LoginProps) {
  const { t } = useTranslation();
  return (
    <div className={styles['container']}>
      <h1>Welcome to Login!</h1>
      <h1>{t('welcome_msg')}</h1>
      <Button variant="contained">Hello World</Button>
    </div>
  );
}

export default Login;
