import { Link } from "react-router-dom";
import NameForm from "../../components/NameForm";

interface IWelcomePage {
  setUserName: (userName: string) => void;
}

const WelcomePage: React.FC<IWelcomePage> = ({ setUserName }) => {
  return (
    <>
      <section className="welcome-page">
        <div className="welcome">
          <h1>Välkommen!</h1>
          <h2>
            Vänligen skriv in ditt namn för att gå vidare till din todo-lista.
          </h2>
        </div>
        <NameForm setUserName={setUserName} />

        <Link to="/todo">
          <button className="start">Till din todo-lista</button>
        </Link>
      </section>
    </>
  );
};

export default WelcomePage;
