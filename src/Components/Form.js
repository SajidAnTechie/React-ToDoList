import React from "react";
import Classes from "./contacts/contactlayouts/Cardheader.module.css";
class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      phone: "",
      error: {},
      valid: true,
      focus: {
        namefocus: "",
        emailfocus: "",
        phonefocus: "",
      },
    };
  }

  handleChange = (e) => {
    //console.log(e.target);
    this.setState({ [e.target.name]: e.target.value });
    const { name, value } = e.target;
    const focus = this.state.focus;

    switch (name) {
      case "name":
        focus.namefocus =
          value.length < 4 ? "Full name must be 4 character long." : true;
        break;
      case "email":
        focus.emailfocus =
          value.indexOf("@") == -1 || value.indexOf(".") == -1
            ? "Email should be @gmail.com form."
            : true;
        break;
      case "phone":
        if (value.length < 10 || value.length > 10) {
          focus.phonefocus = "Number should be equal to 10.";
        } else if (Math.sign(value) === -1) {
          focus.phonefocus = "Number cannot have - sigh.";
        } else {
          focus.phonefocus = true;
        }
        break;
      default:
        break;
    }
    this.setState({ focus, [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, valid } = this.state;

    if (name === "") {
      return this.setState({
        error: { nameerror: "Please enter the name, " },
        valid: false,
      });
    } else if (email === "") {
      return this.setState({
        error: { emailerror: "Please enter the valid email address" },
        valid: false,
      });
    } else if (phone === "") {
      return this.setState({
        error: { phoneerror: "Please enter the valid phone number, " },
        valid: false,
      });
    } else if (phone.length < 10 || phone.length > 10) {
      return this.setState({
        error: { phoneerror: "Please enter the valid phone number, " },
        valid: false,
      });
    } else {
      this.setState({ valid: true });
    }
    if (valid === true) {
      this.props.data(this.state);
      this.setState({ error: {}, name: "", email: "", phone: "" });
      this.setState({ focus: { name: "", email: "", phone: "" } });
    }
  };
  render() {
    //REST OPERATOR
    // const restargruments = (...arg) => {
    //   return arg.filter(el => el != 1);
    // };
    // console.log(restargruments(1, 2, 3));
    console.log("form.js");

    const { nameerror, emailerror, phoneerror } = this.state.error;
    const { namefocus, emailfocus, phonefocus } = this.state.focus;
    let buttondisabled = null;
    if (namefocus === true && emailfocus === true && phonefocus === true) {
      buttondisabled = (
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      );
    } else {
      buttondisabled = (
        <button type="submit" disabled className="btn btn-primary">
          Submit
        </button>
      );
    }
    let card = ["card", Classes.cardheader];
    return (
      <div className="card w-50 mt-5 mx-auto">
        <div className="card-header">
          <h2>Contact Form</h2>
        </div>
        <div className="card-body">
          <form method="POST" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                onChange={this.handleChange}
                value={this.state.name}
                className="form-control"
                placeholder="write a name"
              ></input>
              <span style={{ color: "red" }}>{nameerror}</span>
              <span style={{ color: "red" }}>{namefocus}</span>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                onChange={this.handleChange}
                value={this.state.email}
                name="email"
                placeholder="write a eamil"
              ></input>
              <span style={{ color: "red" }}>{emailerror}</span>
              <span style={{ color: "red" }}>{emailfocus}</span>
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="number"
                onChange={this.handleChange}
                name="phone"
                value={this.state.phone}
                className="form-control"
                placeholder="write a number"
              ></input>
              <span style={{ color: "red" }}>{phoneerror}</span>
              <span style={{ color: "red" }}>{phonefocus}</span>
            </div>
            {buttondisabled}
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
