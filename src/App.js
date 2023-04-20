import Header from "./components/Header";
import Accueil from "./components/Acceuil";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Formations from "./components/Formations";
import Experience from "./components/Experience";
import Projets from "./components/Projets";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div style={{ backgroundColor: "white" }}>
      <BrowserRouter>
        <Header />
        <div>
            <Routes>
              <Route path="/*" element={<Accueil />}></Route>
              <Route path="/formation/*" element={<Formations />}></Route>
              <Route path="/experience/*" element={<Experience />}></Route>
              <Route path="/projet/*" element={<Projets />}></Route>
            </Routes>
          
        </div>
        <Footer/>
        </BrowserRouter>

      </div>

    </div>
  );
}

export default App;
