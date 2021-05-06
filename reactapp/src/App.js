import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import NotFound from './components/NotFound';
import LoginPage from "./components/LoginPage";
import Footer from './components/Footer';
import HomePageClient from './components/HomePageClient.jsx';
import BookComplaint from './components/BookComplaint';
import HomePageAdmin from './components/HomePageAdmin';
import HomePageEngineer from './components/HomePageEngineer';
function App() {
  return (
    <BrowserRouter>
    <Header/>
    <div>
      <Switch>
        <Route path="/" exact component={LoginPage}></Route>
        <Route path="/login" exact component={LoginPage}></Route>
        
        <Route path="/homepage-client/:id" component={HomePageClient}></Route>
        <Route path="/bookComplaint" component={BookComplaint}></Route>

        <Route path="/homepage-admin/:id" component={HomePageAdmin}></Route>

        <Route path="/homepage-engineer/:id" component={HomePageEngineer}></Route>
        <Route component={NotFound} />
      </Switch>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
