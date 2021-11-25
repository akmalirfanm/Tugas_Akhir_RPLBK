import React, { useEffect, useState } from "react";
// import axios from "axios";
import { useParams } from "react-router";
import "./Location.css";
import { SpinnerCircular } from "spinners-react";

export default function Location() {
  const [location, setLocation] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const { locationId } = useParams();

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/location/${locationId}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((resJson) => {
        console.log(resJson);
        setLocation(resJson);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [locationId]);

  if (loading) {
    return (
      <div className="loading">
        <SpinnerCircular color="#2769be" />
      </div>
    );
  }

  if (error) {
    return <p>There was an error loading your data!</p>;
  }

  return (
    <div className="loca-grid-container">
      <div className="name-wrapper">
        <h1>{location.name}</h1>
      </div>
      <div className="loca-data-wrapper">
        <p>{location.type}</p>
        <p>{location.dimension}</p>
      </div>
    </div>
  );
}
