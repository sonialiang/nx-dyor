import axios from 'axios';
import { useEffect, useState } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';

import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  const [users, setUsers] = useState<string>('');
  useEffect(() => {
    const getUser = async () => {
      await axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/api/users`)
        .then((res) => setUsers(res.data));
    };
    getUser();
  }, []);

  return (
    <>
      <Head>
        <title>Welcome to admin-ui!</title>
      </Head>
      <main className="app">
        <p>{users}</p>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default appWithTranslation(CustomApp);
