import React, { useState } from "react";
import { Link } from "react-router-dom";

interface IWelcomePage {
  setUserName: (userName: string) => void;
}

const WelcomePage: React.FC<IWelcomePage> = ({ setUserName }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
    const [inputValue, setInputValue] = useState("");


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUserName(inputValue);
    setInputValue("");
    setIsSubmitted(true);
  };

  return (
    <>
      <section className="welcome-page">
        <div className="welcome">
          <h1>Välkommen!</h1>
          <h2>Vänligen skriv in ditt namn för att gå vidare till din todo-lista.</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Skriv in ditt namn"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button type="submit">Spara</button>
        </form>
        {isSubmitted && <p>Ditt namn har uppdaterats!</p>}
       

        <Link to="/todo">
            <button className="start">Till din todo-lista</button>
        </Link>
      </section>
    </>
  );
};

export default WelcomePage;
