import './Character.css';
import { useEffect, useState } from 'react';
import { SpinnerCircular } from 'spinners-react';
import Layout from '../components/Layout';
import CardCharacter from '../components/CardCharacter';
import axios from 'axios';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

export default function Character() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://63879ccfe399d2e4730446ad.mockapi.io/characters')
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  console.log(data);

  return (
    <Layout>
      {loading && (
        <div className="loading">
          <SpinnerCircular color="#2769be" />
        </div>
      )}
      <div className="items-grid-container" id="items">
        <h1>Rick n Morty Characters</h1>
        <div className="button-add">
          <Link to={`/add-character`}>
            <Button type="button">Add New Character</Button>
          </Link>
        </div>
        <div className="items-container">
          {data?.map((item, index) => (
            <CardCharacter key={index} item={item} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
