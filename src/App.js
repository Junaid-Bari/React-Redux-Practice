import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from "./Pages/About";
import DetailPage from "./Pages/DetailPage";
import ProfileInfo from "./Pages/ProfileInfo";
import './App.css';
import ProtectedRoutes from "./ProtectedRoutes";
import SignIn from "./Pages/SignIn";
import Api from "./Pages/Api";
import NavBar from "./NavBar";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <br />
      <br />
      <br />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
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
