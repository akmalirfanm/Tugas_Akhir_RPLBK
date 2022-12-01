import axios from 'axios';
import { useState } from 'react';
import { SpinnerCircular } from 'spinners-react';
import Button from '../components/Button';
import CardCharacter from '../components/CardCharacter';
import Layout from '../components/Layout';
import './Search.css';

export default function Search() {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    axios
      .get(
        'https://63879ccfe399d2e4730446ad.mockapi.io/characters?name=' + input
      )
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }

  return (
    <Layout>
      <div className="search">
        <h1>Search Character</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search by name"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <Button type="submit">Search</Button>
        </form>
        {loading ? (
          <div className="loading">
            <SpinnerCircular color="#2769be" />
          </div>
        ) : (
          <div className="items-grid-container" id="items">
            <div
              className={
                data.length === 1 ? 'items-container-no-gap' : 'items-container'
              }
            >
              {data.map((item, index) => (
                <CardCharacter key={index} item={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
