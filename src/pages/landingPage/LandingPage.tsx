import React, { useState } from "react";
import { Link } from "react-router-dom";

interface ILandingPage {
  setUserName: (userName: string) => void;
}

const LandingPage: React.FC<ILandingPage> = ({ setUserName }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    setUserName(inputValue);
  };

  return (
    <>
      <section className="landing-page">
        <div className="welcome">
          <h1>Välkommen!</h1>
          <h2>Vänligen skriv in ditt namn och klicka på "start"</h2>
        </div>
        <div className="name">
          <input
            type="text"
            placeholder="Skriv in ditt namn"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button onClick={handleClick}>Spara</button>
        </div>
        <Link to="/todo">
          <button className="start">Till din todo-lista</button>
        </Link>
      </section>
    </>
  );
};

export default LandingPage;
