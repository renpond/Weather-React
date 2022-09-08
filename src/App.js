import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="San Antonio" />

        <footer>
          This project was coded by Renee' Pond and is open-sourced on{" "}
          <a
            href="https://github.com/renpond/Weather-React.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
        </footer>
      </div>
    </div>
  );
}
