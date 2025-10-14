
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./layout/Navigation.jsx";
import {Outlet} from "react-router";


function App() {


  return (
      <>
          <Navigation />
          <div className="container-fluid">
            <Outlet/>
          </div>
      </>
  )
}

export default App
