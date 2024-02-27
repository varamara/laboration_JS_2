import { useState } from "react"; 
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import TodoPage from "./pages/todoPage/TodoPage";
import Navbar from "./components/navbar/Navbar";


const App = () =>  {

  const [userName, setUserName] = useState("");


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage setUserName={setUserName}/>} />
        <Route path="/todo" element={<TodoPage userName={userName}/>} />
      </Routes>
    </Router>
  );
}

export default App;
