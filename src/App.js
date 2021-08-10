import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
// import { handleSaveToPC } from './utils/asciimoji_json_generator';

function App() {
  // handleSaveToPC()
  return (<div className="col-lg-8 mx-auto p-3 py-md-5"> 
        <Header/> 
        <Main />
        <Footer />
      </div> 
  );
}

export default App;
 