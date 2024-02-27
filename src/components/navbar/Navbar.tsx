import { Link } from "react-router-dom"
import './navbar.scss'
import homeImg from '../../assets/icons8-home-48.png';
import todoImg from '../../assets/icons8-todo-list-50.png';

const navbar = () => {

    const navStyle = {
        width: '30px',
    };

  return (
    <nav>
        <Link  className="nav-link" to="/"><img src={homeImg} style={navStyle} alt="Home" /></Link>
        <Link className="nav-link" to="/todo"><img src={todoImg} style={navStyle} alt="Todo" /></Link>
    </nav>
  )
}

export default navbar