import "./App.css";
import Narbar from "./components/Narbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/Home";
import CreatePage from "./components/Create";
import UserDetails from "./components/UserDetail";
function App() {
  return (
    <div className="App">
      <Narbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/user/:id" element={<UserDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
