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
    // const fetchData = async () => {
    //   setLoading(true);
    // };

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
    // axios
    //   .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    //   .then((res) => {
    //     setLoading(false)
    //     setPokemon(res.data)
    //   })
    //   .catch((err) => {
    //     setError(err)
    //   })
  }, [locationId]);

  // const pic = `https://cdn.traction.one/pokedex/pokemon/${locationId}.png`;
  // const { types, stats, moves, abilities } = location;

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
        {/* <img src={pic} alt={`${pokemon.name} pic`} /> */}
      </div>
      <div className="loca-data-wrapper">
        <p>{location.type}</p>
        <p>{location.dimension}</p>
        {/* <div className="data-box pokedex-data-wrapper">
          <h2>Pokedex Data</h2>
          <div>
            <strong>Type: </strong>
            {types === undefined
              ? "not found"
              : types.map((item, index) => (
                  <p
                    key={index}
                    style={{
                      backgroundColor: `#${TYPE_COLORS[item.type.name]}`,
                      color: "white",
                      padding: ".5rem",
                      width: "fit-content",
                      borderRadius: "5px",
                      display: "inline-block",
                      marginRight: ".5rem",
                    }}
                  >
                    {item.type.name}
                  </p>
                ))}
          </div>
          <div>
            <strong>Ability: </strong>
            {abilities === undefined
              ? "not found"
              : abilities.map((item, index) => (
                  <p key={index}>
                    {item.is_hidden
                      ? `${item.ability.name} (Hidden)`
                      : `${item.ability.name},`}
                  </p>
                ))}
          </div>
          <p>
            <strong>Height: </strong>
            {pokemon.height / 10} m
          </p>
          <p>
            <strong>Weight:</strong> {pokemon.weight / 10} kg
          </p>
        </div>
        <div className="data-box base-stats-wrapper">
          <h2>Base Stats</h2>
          {stats === undefined
            ? "not found"
            : stats.map((item, index) => (
                <p key={index}>
                  <strong>{item.stat.name}: </strong>
                  {item.base_stat}
                </p>
              ))}
        </div> */}
      </div>
      {/* <div className="data-box moves-wrapper">
        <h2>Moves</h2>
        {moves === undefined
          ? "not found"
          : moves.map((item, index) => <p key={index}>{item.move.name}</p>)}
      </div> */}
    </div>
  );
}
