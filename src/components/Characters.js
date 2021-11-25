import React, { useState, useEffect } from "react";
// import axios from "axios";
import "./Characters.css";
import { NavLink } from "react-router-dom";
import { SpinnerCircular } from "spinners-react";

export default function Items(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { history } = props;

  useEffect(() => {
    setLoading(true);
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => (res.ok ? res.json() : null))
      .then((resJson) => {
        setData(resJson.results);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <SpinnerCircular color="#2769be" />
      </div>
    );
  }

  return (
    <div className="items-grid-container" id="items">
      <h1>Rick n Morty Characters</h1>
      <div className="items-container">
        {data.map((item) => (
          <div key={item.id} className="items-box">
            <NavLink
              to={`/characters/${item.id}`}
              onClick={() => history.push(`/items/${item.id}`)}
            >
              <img src={item.image} alt={item.name} />
            </NavLink>
            <NavLink
              to={`/characters/${item.id}`}
              className="link items-name"
              onClick={() => history.push(`/items/${item.id}`)}
            >
              {item.name}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}
