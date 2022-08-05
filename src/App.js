import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from "./Pages/About";
import DetailPage from "./Pages/DetailPage";
import ProfileInfo from "./Pages/ProfileInfo";
import './App.css';
import ProtectedRoutes from "./ProtectedRoutes";
import SignIn from "./Pages/SignIn";
import Api from "./Pages/Api";

const App = () => {
  return (
    <div className="App">
      <div className="display">
      <li>
        <Link className="nav-linke" to="/home"> Home </Link>
      </li>
      <li>
        <Link className="nav-linke" to="About"> About </Link>
      </li>
      <li >
        <Link className="nav-linke" to="Contact"> Contact </Link>
      </li>
      <li >
        <Link className="nav-linke" to="ProfileInfo"> Profile </Link>
      </li>
      </div>
      <br />
      <br />
      <br />
      <Routes>
        <Route exact path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/home/detailpage' element={<DetailPage />} />
        <Route path='/home/api' element={<Api />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='profileinfo' element={<ProfileInfo />} />
        </Route>
      </Routes>


    </div>

  );
};

export default App;
