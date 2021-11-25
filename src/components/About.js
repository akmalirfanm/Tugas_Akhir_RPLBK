import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about grid-container">
      <img
        src="https://avatars.githubusercontent.com/u/48997994?s=400&u=0168ece4d1243842eba716225d822b1da91ab1d9&v=4"
        alt="author pic"
      />
      <h2>About Watashi</h2>
      <p>
        Hello There. I'm akumaru from CE 19. Here the simple app for Mobile
        Programming Practice Final Task.
      </p>
      <br></br>
      <h2>About App</h2>
      <p>
        This App was created with React PWA technology, using{" "}
        <a href="https://rickandmortyapi.com/" target="_blank" rel="noreferrer">
          RickandMortyAPI
        </a>{" "}
        to get the data.
      </p>
    </div>
  );
}
