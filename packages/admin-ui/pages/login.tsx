import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import styles from './index.module.css';
import { Login } from '@dyor/ui';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export function LoginPage() {
  const { t } = useTranslation();

  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>{t('welcome_msg')}</h1>
          </div>
          <Login />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
