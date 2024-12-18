import { useEffect } from 'react';
import { highlightCode } from '../utils/prism';
import '@/styles/globals.css';
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    highlightCode();
  }, []);

  return (
    <Theme
      appearance="dark"
      accentColor="cyan"
      grayColor="sand"
      radius="medium"
      scaling="95%"
    >
      <Component {...pageProps} />
    </Theme>
  );
} 