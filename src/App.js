import React from 'react';
import './App.css';
import Home from './Home/Home';
import { Redirect, Route, Switch } from 'react-router';
import Footer from './Home/Footer';
import Header from './Home/Header';

function App() {
  return (
    <>
    <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Redirect to="/"/>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
