import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import StartForm from './components/StartForm';
import { Container, Button } from 'react-bootstrap';
import Game from './components/Game';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      starterForm: false
    }
  }



  render() {

    return (
      <Router>
        <div className="App">
          <Container>

            <h1 style={{ margin: "50px" }}>Welcome To The Last Exam Game!</h1>

            <Switch>


              <Route path="/starter" >
                <StartForm />
              </Route>
              <Route path="/game" component={Game} />
              <Route path="/">
                <Button variant="dark" href='/starter'>START</Button>
              </Route>
            </Switch>
          </Container>

        </div>
      </Router>
    );
  }
}

export default App;
