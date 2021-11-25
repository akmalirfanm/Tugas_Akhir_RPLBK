import React, { useEffect, useState } from "react";
import "./Locations.css";
import { NavLink } from "react-router-dom";
import { SpinnerCircular } from "spinners-react";

export default function Locations(props) {
  const [location, setLocation] = useState([]);
  const [loading, setLoading] = useState(false);
  const { history } = props;

  useEffect(() => {
    setLoading(true);
    fetch("https://rickandmortyapi.com/api/location")
      .then((res) => (res.ok ? res.json() : null))
      .then((resJson) => {
        setLocation(resJson.results);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });

    // axios
    //   .get(`https://zelda-api.apius.cc/api/characters`, {
    //     headers: {
    //       "x-rapidapi-host": "the-legend-of-zelda.p.rapidapi.com",
    //       "x-rapidapi-key":
    //         "2580936429msha0b0d9b44401358p1976b8jsnd17018975d17",
    //     },
    //   })
    //   .then((res) => {
    //     return res.data.data;
    //   })
    // .then((results) => {
    //   return Promise.all(results.map((res) => axios.get(res.url)));
    // })
    // .then((results) => {
    //   setLoading(false);
    //   setPokemon(results.map((res) => res.data));
    // })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <SpinnerCircular color="#2769be" />
      </div>
    );
  }

  return (
    <div className="loc-grid-container" id="location">
      <h1>Rick n Morty Locations</h1>
      <div className="loc-container">
        {location.map((l) => (
          <div key={l.id} className="loc-box">
            <p className="pkmn-num">{`#${l.id}`}</p>
            <NavLink
              to={`/locations/${l.id}`}
              className="link pkmn-name"
              onClick={() => history.push(`/locations/${l.id}`)}
            >
              {l.name}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}
