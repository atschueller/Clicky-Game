import React from "react";
import GameContainer from "./components/Gamecontainer/GameContainer.js";
import Nav from "./components/Nav/Nav.js";
import Header from "./components/Header/Header.js";
import Gamecard from "./components/GameCard/GameCard.js";
import "./App.css";

class App extends React.Component {
  render() {
    return (
     <GameContainer>
        <Nav />
        <Header />
        <Gamecard /> 
        <Gamecard />
        <Gamecard />
        <Gamecard />
        <Gamecard />
        <Gamecard />
        <Gamecard />
        <Gamecard />
        <Gamecard />
        <Gamecard />
      </GameContainer>
    );
  }
}
export default App;
