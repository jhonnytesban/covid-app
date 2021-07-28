import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
// import Navbar from "../components/Navbar";
import HomePage from "../pages/HomePage";
import InfoCountries from "../pages/InfoCountries";

const AppRoutes = () => {
  return(
    <Router>
      {/* <Navbar /> */}
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/countries' component={InfoCountries}/>
      </Switch>
    </Router>
  )
}

export default AppRoutes