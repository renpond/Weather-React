import React from "react";
import Weather from "./weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="San Antonio" />

        <footer>
          This project was coded by Renee' Pond and is{" "}
          <a
            href="https://github.com/renpond/Weather-React.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Sourced on Github
          </a>{" "}
          and{" "}
          <a href="" target="_blank" rel="noopener noreferrer">
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
