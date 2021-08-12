import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { Container } from 'react-bootstrap';
// import { handleSaveToPC } from './utils/asciimoji_json_generator';
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import Cart from './components/Cart';

const App = () => {
  // handleSaveToPC()
  return (<>
      <Container > 
        <Header/>        

          <Router>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/cart" component={Cart} />
            </Switch>
          </Router>

        <Footer />
      </Container>


    </> 
  );
}

export default App;
 