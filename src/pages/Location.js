import "./Location.css";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import axios from "axios";
import { SpinnerCircular } from "spinners-react";

export function Location() {
  const [location, setLocation] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://rickandmortyapi.com/api/location")
      .then((res) => {
        setLocation(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <Layout>
      {loading && (
        <div className="loading">
          <SpinnerCircular color="#2769be" />
        </div>
      )}
      <div className="loc-grid-container" id="location">
        <h1 className="label-location">Rick n Morty Locations</h1>
        <div className="loc-container">
          {location.map((l) => (
            <div key={l.id} className="loc-box">
              <p className="pkmn-num">{`#${l.id}`}</p>
              <Link to={`/detail-location/${l.id}`} className="link pkmn-name">
                {l.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
