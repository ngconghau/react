import "./App.css";
import Narbar from "./components/Narbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/page/Home";
import CreatePage from "./components/page/Create";
import UserDetails from "./components/page/UserDetail";
import NotFound from "./components/page/NotFound";
function App() {
  return (
    <div className="App">
      <Narbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/user/:id" element={<UserDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
