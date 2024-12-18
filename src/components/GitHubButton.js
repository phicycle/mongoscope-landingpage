'use client';
import { useEffect, useRef } from 'react';

export default function GitHubButton() {
  const buttonRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://buttons.github.io/buttons.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <a
      ref={buttonRef}
      className="github-button"
      href="https://github.com/phicycle/mongoscope"
      data-color-scheme="no-preference: dark; light: dark; dark: dark;"
      data-size="large"
      data-show-count="false"
      data-text="View on GitHub"
    >
      View on GitHub
    </a>
  );
} 