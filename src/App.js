import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import StartForm from './components/StartForm';
import { Container, Button } from 'react-bootstrap';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      starterForm: false
    }
  }

  onStart = e => {
    this.setState({ starterForm: !this.state.starterForm });
  }

  render() {
    const { starterForm } = this.state;
    return (
      <div className="App">
        <Container>
          <h1 style={{ margin: "50px" }}>Welcome To The Last Exam Game!</h1>
          {starterForm ? <StartForm /> : <Button variant="dark" onClick={this.onStart}>START</Button>}
        </Container>

      </div>
    );
  }
}

export default App;
