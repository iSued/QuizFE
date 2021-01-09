import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

class FirstPage extends React.Component {
  state = { candidateName: "" };

  handleChange = (event) => {
    this.setState({ candidateName: event.currentTarget.value });
  };
  handleClick = async () => {
    try {
      const response = await fetch("http://localhost:3001/exam/start", {
        method: "POST",
        body: JSON.stringify({ candidateName: this.state.candidateName }),
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      });
      if (response.ok) {
        console.log("ready to start the quiz");
        let data = await response.json();
        console.log(data.id);
        this.setState({
          errMessage: "",
          id: data.id,
        });
      } else {
        console.log("an error occurred");
        let error = await response.json();
        this.setState({
          errMessage: error.message,
        });
      }
    } catch (e) {
      console.log(e); // Error
      this.setState({
        errMessage: e.message,
      });
    }
  };
  render() {
    return (
      <div>
        <h1>{this.state.candidateName}</h1>
        <div className="radius p-5">
          <h2 className="mb-5">Input your name and Start the quiz</h2>
          <InputGroup className="mb-3">
            <FormControl
              required
              value={this.state.candidateName}
              placeholder="Who Are you"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onChange={this.handleChange}
            />
            <InputGroup.Append>
              <Button
                className=" btn-primary"
                variant="outline-primary"
                onClick={this.handleClick}
              >
                Start the Quiz
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </div>
        <h1>{this.state.errMessage}</h1>
      </div>
    );
  }
}

export default FirstPage;
