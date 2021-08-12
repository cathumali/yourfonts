import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { Container } from 'react-bootstrap';
import Cart from './components/Cart';
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
// import { handleSaveToPC } from './utils/asciimoji_json_generator';
// handleSaveToPC()

const App = () => {
  return (
      <Container > 
          <Router>
            <Header/>  
            <Switch>
              <Route name="home" exact path="/" component={Main} />
              <Route name="cart" exact path="/cart" component={Cart} />
            </Switch>
          </Router>
        <Footer />
      </Container>
  );
}

export default App;
 