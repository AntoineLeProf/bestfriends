import '../styles/globals.css';
import Head from 'next/head';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import friends from '../reducers/friends';

const store = configureStore({
  reducer: { friends },
});

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Best friends</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
