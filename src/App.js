import React from 'react';

import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import Header from './Components/UI/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PageNotFound from './pages/404/PageNotFound';
import About from './pages/About/About';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import Footer from './Components/UI/Footer/Footer';
import DashBoard from './pages/DashBoard/DashBoard';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import PrivateRoute from './utils/PrivateRoute/PrivateRoute';
import TransferRequest from './pages/TransferRequest/TransferRequest';
import TransferConfirmed from './pages/TransferConfirmed/TransferConfirmed';
import AllLands from './pages/AllLands/AllLands';
import Contact from './pages/Contact/Contact';
import { MoralisProvider } from "react-moralis";




function App() {



  return (
    <MoralisProvider initializeOnMount={false}>

      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/alllands">
              <AllLands />
            </Route>
            <PrivateRoute path="/transferRequest/:id">
              <TransferRequest />
            </PrivateRoute>
            <PrivateRoute path="/transferConfirmed">
              <TransferConfirmed />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <DashBoard />
            </PrivateRoute>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
          {/* <Footer></Footer> */}
        </Router>
      </AuthProvider>
    </MoralisProvider>


  );
}

export default App;
