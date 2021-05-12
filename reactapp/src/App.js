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
import AddEngineer from './components/AddEngineer';
import GetComplaintsByProduct from './components/GetComplaintsByProduct';
import ChangeStatusClient from './components/ChangeStatusClient';
import UpdateClient from './components/UpdateClient';
import RegisterClient from './components/RegisterClient';
import AddProduct from './components/AddProduct';
import GetComplaintsByDate from './components/GetComplaintsByDate';
import ViewClientProfile from './components/ViewClientProfile';
import ViewEngineerProfile from './components/ViewEngineerProfile';
import ViewAdminProfile from './components/ViewAdminProfile';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" exact component={LoginPage}></Route>
        <Route path="/login" exact component={LoginPage}></Route>
        <Route path="/register-client" component={RegisterClient}></Route>

        <Route path="/homepage-client/" component={HomePageClient}></Route>
        <Route path="/bookComplaint" component={BookComplaint}></Route>

        <Route path="/homepage-admin/" component={HomePageAdmin}></Route>

        <Route path="/homepage-engineer/" component={HomePageEngineer}></Route>

        <Route path="/manage-engineers" component={AddEngineer}></Route>
        <Route path="/manage-complaints" component={GetComplaintsByProduct}></Route>
        
        <Route path="/client-profile" component={ViewClientProfile}></Route>
        <Route path="/engineer-profile" component={ViewEngineerProfile}></Route>
        <Route path="/admin-profile" component={ViewAdminProfile}></Route>

        <Route path="/getcomplaintsbydate" component={GetComplaintsByDate}></Route>
        <Route path="/manage-products" component={AddProduct}></Route>
        <Route path="/changestatus-client" component={ChangeStatusClient}></Route>
        <Route path="/updateclient" component={UpdateClient}></Route>
        <Route component={NotFound} />
      </Switch>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
