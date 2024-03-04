import { useState } from "react"; 
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import TodoPage from "./pages/todoPage/TodoPage";
import Navbar from "./components/navbar/Navbar";
import WelcomePage from "./pages/welcomePage/WelcomePage";


const App = () =>  {

  const [userName, setUserName] = useState("");

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<WelcomePage setUserName={setUserName}/>} />
        <Route path="/todo" element={<TodoPage userName={userName}/>} />
      </Routes>
    </Router>
  );
}

export default App;
