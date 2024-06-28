import "./App.css";
import Login from "../src/components/Login";
import Home from "./components/Home";
import NoPage from "./components/Error404";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route exact path="/home" element={<PrivateRoute />}>
            <Route exact path="/home" element={<Home />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
