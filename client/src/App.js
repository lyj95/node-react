// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';


function App() {
  return (
    <Router>
      <div>
        

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/" component = {LandingPage} />
            {/* <Home /> */}
            {/* <LandingPage /> */}
          {/* </Route> */}
          <Route exact path="/login">
            {/* <About /> */}
            <LoginPage />
          </Route>
          <Route exact path="/register">
            {/* <Dashboard /> */}
            <RegisterPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


// function Home() {
//   return (
//     <div>
//       <h2>Home 홈이에여영</h2>
//     </div>
//   );
// }

// function About() {
//   return (
//     <div>
//       <h2>About</h2>
//     </div>
//   );
// }

// function Dashboard() {
//   return (
//     <div>
//       <h2>Dashboard</h2>
//     </div>
//   );
// }



export default App;
