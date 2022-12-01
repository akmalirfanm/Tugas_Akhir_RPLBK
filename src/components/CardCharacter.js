import { Link } from 'react-router-dom';
import './CardCharacter.css';

export default function CardCharacter({ item }) {
  return (
    <div key={item.id} className="items-box">
      <Link to={`/detail-character/${item.id}`}>
        <img src={item.image} alt={item.name} />
      </Link>
      <Link to={`/detail-character/${item.id}`} className="link items-name">
        {item.name}
      </Link>
    </div>
  );
}
