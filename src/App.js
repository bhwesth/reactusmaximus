import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <>
      <Header setLoggedIn={setLoggedIn} />
      <Footer loggedIn={loggedIn} />
    </>
  );
}

export default App;
