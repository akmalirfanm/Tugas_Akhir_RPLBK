import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SpinnerCircular } from 'spinners-react';
import Layout from '../components/Layout';
import './DetailCharacter.css';

export default function DetailCharacter() {
  const [chara, setChara] = useState([]);
  const [loading, setLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        'https://63879ccfe399d2e4730446ad.mockapi.io/characters?id=' + params.id
      )
      .then((res) => {
        setChara(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [params.id]);

  return (
    <Layout>
      <h1 className="title-detail">Rick n Morty Character Detail</h1>
      {loading ? (
        <div className="loading">
          <SpinnerCircular color="#2769be" />
        </div>
      ) : (
        <div className="chara-grid-container">
          <div className="chara-title">
            <img src={chara[0]?.image} alt={`${chara[0]?.name} pic`} />
            <h1>{chara[0]?.name}</h1>
          </div>
          <div className="chara-data-wrapper">
            <h2>Description:</h2>
            <p>{chara[0]?.species}</p>
            <h2>Gender:</h2>
            <p>{chara[0]?.gender}</p>
            <h2>Status:</h2>
            <p>{chara[0]?.status}</p>
          </div>
        </div>
      )}
    </Layout>
  );
}
