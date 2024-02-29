import React, { useState } from "react";

interface INameForm {
  setUserName: (userName: string) => void;
}

const NameForm: React.FC<INameForm> = ({ setUserName }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [NameInputValue, setNameInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameInputValue(event.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUserName(NameInputValue);
    setNameInputValue("");
    setIsSubmitted(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Skriv in ditt namn"
          value={NameInputValue}
          onChange={handleInputChange}
        />
        <button type="submit">Spara</button>
      </form>
      {isSubmitted && <p>Ditt namn har uppdaterats!</p>}
    </>
  );
};

export default NameForm;
