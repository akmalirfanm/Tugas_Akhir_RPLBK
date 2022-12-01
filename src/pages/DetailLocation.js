import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import './DetailLocation.css';

export default function DetailLocation() {
  const [location, setLocation] = useState([]);
  const params = useParams();

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/location/' + params.id)
      .then((res) => {
        setLocation(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [params.id]);

  return (
    <Layout>
      <div className="loca-grid-container">
        <h1 className="label-location">Rick n Morty Location Detail</h1>
        <div className="name-wrapper">
          <p className="label-name">Name :</p>
          <h1>{location.name}</h1>
        </div>
        <div className="loca-data-wrapper">
          <div>
            <p className="label-type">Type :</p>
            <h1>{location.type}</h1>
          </div>
          <div>
            <p className="label-dimension">Dimension :</p>
            <h1>{location.dimension}</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
}
