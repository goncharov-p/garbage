import React, { useState  } from 'react';
import Footer from './Footer';
import Body from './Body';
import Header from './Header';
import './App.scss';
// Создать 3 компонента и отобразить их на странице (Header, Body, Footer). В Header поприветствовать пользователя/создателя приложения. Написать стили для всех 3-х компонентов.


function App() {
 

  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
