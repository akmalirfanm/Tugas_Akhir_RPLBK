import './Layout.css';
import BottomNav from './BottomNav';

export default function Layout({ children }) {
  return (
    <div className="app">
      <div className="main">{children}</div>
      <footer>
        <BottomNav />
      </footer>
    </div>
  );
}
