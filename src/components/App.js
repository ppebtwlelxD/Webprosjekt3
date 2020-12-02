import React from 'react';
import Navbar from '../components/atoms/moleculs/Header/Navbar';
import FooterPage from './atoms/moleculs/Footer/FooterPage';
import Mainpage from '../components/atoms/moleculs/Mainpage/Mainpage';
import Markedinfo from '../components/atoms/moleculs/Markedinfo/Markedinfo';


function App() {
  return (
    <>
    <h1>Company Name</h1>
      <Navbar />
      <Mainpage />
      <FooterPage />
      <Markedinfo />
    </>
  );
}

export default App;
