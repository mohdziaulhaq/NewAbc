import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import NotFound from './components/NotFound';
import LoginPage from "./components/LoginPage";
import Footer from './components/Footer';
import HomePageClient from './components/HomePageClient';
import BookComplaint from './components/BookComplaint';
import HomePageAdmin from './components/HomePageAdmin';
import HomePageEngineer from './components/HomePageEngineer';
function App() {
  return (
    <BrowserRouter>
    <Header/>
    <div className="container">
      <Switch>
        <Route path="/" exact component={LoginPage}></Route>
        <Route path="/login" exact component={LoginPage}></Route>
        
        <Route path="/homepage-client" component={HomePageClient}></Route>
        <Route path="/bookComplaint" component={BookComplaint}></Route>

        <Route path="/homepage-admin" component={HomePageAdmin}></Route>

        <Route path="/homepage-engineer" component={HomePageEngineer}></Route>
        <Route component={NotFound} />
      </Switch>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
