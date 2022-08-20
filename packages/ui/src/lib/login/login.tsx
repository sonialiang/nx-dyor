import styles from './login.module.css';
import Button from '@mui/material/Button';

/* eslint-disable-next-line */
export interface LoginProps {}

export function Login(props: LoginProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Login!</h1>
      <Button variant="contained">Hello World</Button>
    </div>
  );
}

export default Login;
