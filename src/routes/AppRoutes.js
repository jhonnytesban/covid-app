import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomePage from "../pages/HomePage";
import InfoCountries from "../pages/InfoCountries";
import InfoRangeCountry from "../pages/InfoRangeCountry";

const AppRoutes = () => {
  return(
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/countries' component={InfoCountries}/>
        <Route exact path='/countries-by-range' component={InfoRangeCountry}/>
      </Switch>
      <Footer />
    </Router>
  )
}

export default AppRoutes