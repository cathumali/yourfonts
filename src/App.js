import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { Container } from 'react-bootstrap';
// import { handleSaveToPC } from './utils/asciimoji_json_generator';

const App = () => {
  // handleSaveToPC()
  return (<Container > 
        <Header/> 
        <Main />
        <Footer />
      </Container> 
  );
}

export default App;
 