import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-javascript';

export const highlightCode = () => {
  if (typeof window !== 'undefined') {
    Prism.highlightAll();
  }
}; 