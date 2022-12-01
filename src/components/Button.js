import { useContext } from 'react';
import { themeContext } from '../Context/ThemeContext';
import './Button.css';

export default function Button({ children, type }) {
  const theme = useContext(themeContext);
  return (
    <button
      className={theme.theme === 'light' ? 'button' : 'button-dark'}
      type={type}
    >
      {children}
    </button>
  );
}
