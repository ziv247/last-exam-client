import React, { Component } from "react";
import { Container, ButtonGroup, Button } from "react-bootstrap";
import { Redirect, Link } from "react-router-dom";

// range: (7) ["2", 3, 4, 5, 6, 7, 8]
// player_name: "ziv"
// range_from: "2"
// range_to: "8"
// player_number: "6"

class Game extends Component {
  constructor(props) {
    super(props);
    this.setting = props.location.setting;
    this.state = {
      computerWin: false,
      counter: 0,
      min: 0,
      max: 0,
      guess: 0
    };
  }

  randon = (min, max) => {
    console.log(min, max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  throwGuess = () => {
    const { min, max } = this.state;
    this.setState({
      min,
      max,
      guess: this.randon(parseInt(min), parseInt(max))
    });
  };

  componentDidMount() {
    if (this.setting) {
      const { range_from, range_to } = this.setting;
      this.setState({
        min: range_from,
        max: range_to,
        guess: this.randon(parseInt(range_from), parseInt(range_to))
      });
    }
  }

  onCurrect = () => {
    this.setState({ computerWin: true });
  };

  onDown = () => {
    this.setState(
      { max: this.state.guess, counter: this.state.counter + 1 },
      () => this.throwGuess()
    );
  };

  onUp = () => {
    this.setState(
      { min: this.state.guess, counter: this.state.counter + 1 },
      () => this.throwGuess()
    );
  };

  render() {
    const { guess, min, max, computerWin } = this.state;

    return !this.setting ? (
      <Redirect to="/starter" />
    ) : (
      <Container>
        <h2 style={{ margin: "50px 0 0" }}>
          Your Number is <span>{guess}</span>??
        </h2>
        <h3 style={{ margin: "10px 0 50px" }}>{`Range: ${min}-${max}`}</h3>
        {computerWin ? (
          <div>
            <h1>Win!</h1>
            <Link to="/starter">
              <Button style={{ marginRight: "5px" }} variant="outline-dark">
                Anather Game
              </Button>
            </Link>
            <Link to="/">
              <Button variant="outline-dark">Go Home</Button>
            </Link>
          </div>
        ) : (
          <ButtonGroup aria-label="Basic example">
            <Button variant="secondary" onClick={this.onDown}>
              <i class="fas fa-arrow-down"></i>
            </Button>
            <Button variant="secondary" onClick={this.onCurrect}>
              <i class="fas fa-check"></i>
            </Button>
            <Button variant="secondary" onClick={this.onUp}>
              <i class="fas fa-arrow-up"></i>
            </Button>
          </ButtonGroup>
        )}
      </Container>
    );
  }
}

export default Game;
