import './Home.css';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { useContext } from 'react';
import { themeContext } from '../Context/ThemeContext';

export default function Home() {
  const theme = useContext(themeContext);

  return (
    <Layout>
      <div className="home" id="home">
        <div className="menu-container">
          <div
            className={theme.theme === 'light' ? 'menu-box' : 'menu-box-dark'}
          >
            <Link to="/characters" className="link app-link">
              Characters
            </Link>
          </div>
          <div
            className={theme.theme === 'light' ? 'menu-box' : 'menu-box-dark'}
          >
            <Link to="/locations" className="link app-link">
              Locations
            </Link>
          </div>
          <div
            className={theme.theme === 'light' ? 'menu-box' : 'menu-box-dark'}
          >
            <Link to="/about" className="link app-link">
              About Us
            </Link>
          </div>
          <div
            className={theme.theme === 'light' ? 'menu-box' : 'menu-box-dark'}
            onClick={() =>
              theme.setTheme(theme.theme === 'light' ? 'dark' : 'light')
            }
          >
            <p className="link app-link">Change Theme</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
