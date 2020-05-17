import React from 'react';
import './app.css';
import Header from './components/header/header';
import Body from './components/body/body';
import Footer from './components/footer/footer';

const person = {
  name: "Henry",
  age: 22
};

function App() {
  return (
    <div id='app'>
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
