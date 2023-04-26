import { Login } from './components/Auth/Login';
import { Register } from './components/Auth/Register';
import { Authorized } from './components/Views/Authorized';
import { ApplicationViews } from './components/Views/ApplicationViews';
import { Route, Routes } from "react-router-dom"
import './Nutshell.css';
import { NavBar } from './components/Nav/NavBar';

function Nutshell() {
  return <Routes>
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />

  <Route path="*" element={
    <Authorized>
      <>
        <NavBar />
        <ApplicationViews />
      </>
    </Authorized>

  } />
</Routes>
}

export default Nutshell;
