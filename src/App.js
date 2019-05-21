import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MainTab } from './component/MainTab';
import './resources/css/bootstrap.min.css';
import { Header } from './component/Header';
function App() {
  return (
    <React.Fragment>
    <Header />
 <MainTab/>
 </React.Fragment>
  );
}

export default App;
