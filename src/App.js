import React from "react";
import './App.css';
import MainPage from "./routes/main";

function App() {
  return (
    <div className="App">
      GOODstore
      <p>Everything here is good for you</p>
        <div className="alcosContainer">
            <MainPage />
        </div>
    </div>
  );
}

export default App;
