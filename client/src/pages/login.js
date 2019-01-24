import React, { Component } from "react";
import Navbar from "../components/Navbar";
import { FormGroup, FormControl, FormLabel, Button, Nav } from "react-bootstrap";
import "./login.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();

    // this.setState({ isLoading: true });

    // try {
    //   await Auth.signIn(this.state.email, this.state.password);
    //   this.props.userHasAuthenticated(true);
    //   this.props.history.push("/");
    // } catch (e) {
    //   alert(e.message);
    //   this.setState({ isLoading: false });
    // }
  };

  render() {
    return (
      <div className="Login">
        <Navbar />
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="username" bssize="large">
            <FormLabel>Username</FormLabel>
            <FormControl
              autoFocus
              type="name"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bssize="large">
            <FormLabel>Password</FormLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          {
            /* <LoaderButton
            block
            bssize="large"
            disabled={!this.validateForm()}
            type="submit"
            isLoading={this.state.isLoading}
            text="Login"
            loadingText="Logging in…"
          /> */
            <Button variant="primary" type="button">
              Submit
            </Button>
          }
          <Button className="google-btn" href="/auth/google">
            Google+
          </Button>
        </form>
      </div>
    );
  }
}
export default Login;
