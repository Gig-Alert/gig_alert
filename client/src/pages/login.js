import React, { Component } from "react";
import { FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./login.css";
import LogNav from "../components/Lognav";
// import LoaderButton from "../components/LoaderButton";

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
        <LogNav />
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
          {/* <LoaderButton
            block
            bssize="large"
            disabled={!this.validateForm()}
            type="submit"
            isLoading={this.state.isLoading}
            text="Login"
            loadingText="Logging in…"
          /> */}
        </form>
      </div>
    );
  }
}
export default Login;
