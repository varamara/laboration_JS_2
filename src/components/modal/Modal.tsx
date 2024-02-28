import { Link } from "react-router-dom";
import "./modal.scss";

const Modal = () => {
  return (
    <>
      <section className="modal">
        <div className="modal-content">
          <p></p>
          <Link to="/todo">
            <button className="start">Till din todo-lista</button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Modal;
