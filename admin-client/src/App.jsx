import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import User from "./components/User";
import Transactions from "./components/Transactions";
import Summary from "./components/Summary";
import NewUser from "./components/NewUser";
import Login from "./components/Login";
function App() {
  return (
    <Router>
      <div className="app">
        <div>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<User />} />
            <Route path="/new-user" element={<NewUser />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/summary" element={<Summary />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
