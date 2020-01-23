import React, { Component } from "react";
import { Row, Form, Col, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class StartForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      range: [],
      player_name: "",
      range_from: "",
      range_to: "",
      player_number: 0
    };
  }

  makeRangeArr = () => {
    var list = [];
    for (
      var i = parseInt(this.state.range_from);
      i <= this.state.range_to;
      i++
    ) {
      list.push(i);
    }
    console.log(list);
    this.setState({ range: list });
  };
  onPlayClick = e => {
    e.preventDefault();
    console.log(this.state);
  };

  onChangeName = e => {
    this.setState({ player_name: e.target.value });
  };

  onLiveTo = () => {
    if (this.state.range_to <= this.state.range_from) {
      alert("Plaese enter number higher of the from number");
      this.setState({ range_to: "" });
    } else {
      this.makeRangeArr();
    }
  };

  onChangeNumber = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    const {
      range,
      player_name,
      range_from,
      range_to,
      player_number
    } = this.state;
    return (
      <Container>
        <Form style={{ width: "60%", margin: "auto" }}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={this.onChangeName}
              type="text"
              placeholder="Enter name"
              value={player_name}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Number Range</Form.Label>

            <Form.Control
              type="number"
              placeholder="from"
              name="range_from"
              value={range_from}
              onChange={this.onChangeNumber}
              required
            />
            <Form.Control
              type="number"
              placeholder="to"
              name="range_to"
              value={range_to}
              onChange={this.onChangeNumber}
              onBlur={this.onLiveTo}
              required
            />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Select Number</Form.Label>
            <Form.Control
              as="select"
              onChange={this.onChangeNumber}
              name="player_number"
              required
            >
              {range.map(num => (
                <option key={num}>{num}</option>
              ))}
            </Form.Control>
          </Form.Group>
          <Link to={{ pathname: "/game", setting: { ...this.state } }}>
            <Button variant="dark">PLAY</Button>
          </Link>
        </Form>
      </Container>
    );
  }
}
