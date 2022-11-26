import './App.css';
import React, { useState } from "react";

const App = () => {
  const [character, setCharacter] = useState({
    name: "Taha",
    number: 7
  });
  
  const onChangeName = () => {
    setCharacter((prevState) => ({...prevState, name: "Yasin"}));
  }
  const onIncrement = () => {
    setCharacter((prevState) => ({...prevState, number: prevState.number + 1}));
  }
  const onDecrement = () => {
    setCharacter((prevState) => ({...prevState, number: prevState.number - 1}));
  }

  const {name, number} = character;

  return(
    <>
      <h1>My name is {name} and my favorite number is {number}</h1>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
      <button onClick={onChangeName}>Change name</button>
    </>
  )
}

export default App;