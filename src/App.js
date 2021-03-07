import React, { Component } from 'react';
import './App.scss';
import {Container} from 'react-bootstrap'

import Header from './components/Header/Header'
import Boxs from './components/LandingPage/Box1'
import Headercrt from './components/Crt/HeaderCrt'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };

  }
  render() {
    return(
      <>
        <div>
          <section>
            <Container fluid>
              <Header />
            </Container>
          </section>
          <div>
            <Headercrt />
          </div>
          <div>
            <Boxs />
          </div>
        </div>
      </>
    )
  }
}

export default App;