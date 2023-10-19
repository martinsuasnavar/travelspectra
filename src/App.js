import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import { Home, Other } from "./pages";
import NavBar from "./components/containers/NavBar/NavBar";
import './styles/shared.scss';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/other" element={<Other/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
