import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Character.css";
import { SpinnerCircular } from "spinners-react";

export default function Item() {
  const [chara, setChara] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const { sembarang } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      fetch(`https://rickandmortyapi.com/api/character/${sembarang}`)
        .then((res) => (res.ok ? res.json() : null))
        .then((resJson) => {
          console.log(resJson);
          setChara(resJson);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    fetchData();
  }, [sembarang]);
  // console.log(itemId);
  // console.log(item);

  // const pic = item.sprites === undefined ? "not found" : item.sprites.default;
  // const desc =
  //   item.flavor_text_entries === undefined
  //     ? "not found"
  //     : item.flavor_text_entries[0].text;
  // const effect =
  //   item.effect_entries === undefined
  //     ? "not found"
  //     : item.effect_entries[0].effect;

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
    <div className="chara-grid-container">
      <div className="chara-title">
        <img src={chara.image} alt={`${chara.name} pic`} />
        <h1>
          {chara.name === undefined
            ? "not found"
            : chara.name.replace("-", " ")}
        </h1>
      </div>
      <div className="chara-data-wrapper">
        <h2>Description:</h2>
        <p>{chara.species}</p>
        <h2>Gender:</h2>
        <p>{chara.gender}</p>
        <h2>Status:</h2>
        <p>{chara.status}</p>
      </div>
    </div>
  );
}
