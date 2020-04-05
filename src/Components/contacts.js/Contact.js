import React from "react";
import Edit from "./contactlayouts/Editform";
import Cardheader from "./contactlayouts/Cardheader";
import Contactbody from "./contactlayouts/Contactbody";
import contactbody from "./contactlayouts/Contactbody";
import Auxillary from "../HOC/Auxillary";
class Contact extends React.Component {
  //binding the event handler
  constructor(props) {
    super(props);

    this.state = {
      ishide: false,
      isEditing: false,
      name: this.props.contact.name,
      email: this.props.contact.email,
      phone: this.props.contact.phone,
      error: {},
      valid: true
    };
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("[contact.js] sholudcomponenetupdate");
  //   return false;
  // }
  // componentDidUpdate() {
  //   console.log("[conatct.js] componenetdidupdate");
  // }
  hideshow = () => {
    //Normal way of doing

    this.setState({
      ishide: !this.state.ishide
    });

    //Elquate way of doing
    // this.setState(prevState => ({
    //   ishide: prevState.ishide
    // }));
  };
  handleDelete = () => {
    this.props.delete(this.props.contact.id);
  };
  handleEditing = () => {
    console.log("clicked");
    this.setState({ isEditing: true });
  };
  handleChange = e => {
    //console.log(e.target);
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { name, email, phone, valid } = this.state;

    if (name === "") {
      return this.setState({
        error: { nameerror: "Please enter the name, " },
        valid: false
      });
    } else if (email === "") {
      return this.setState({
        error: { emailerror: "Please enter the valid email address" },
        valid: false
      });
    } else if (phone === "") {
      return this.setState({
        error: { phoneerror: "Please enter the valid phone number, " },
        valid: false
      });
    } else if (phone.length < 10 || phone.length > 10) {
      return this.setState({
        error: { phoneerror: "Please enter the valid phone number, " },
        valid: false
      });
    } else {
      this.setState({ valid: true });
    }
    if (valid === true) {
      let editformdata = {
        name,
        email,
        phone,
        id: this.props.contact.id
      };
      this.props.edit(editformdata);
      this.setState({ error: {} });
      this.setState({ isEditing: false });
    }
  };
  render() {
    let iconshape = this.state.ishide ? "fas fa-arrow-up" : "fas fa-arrow-down";
    //another way of handling condition
    let icon = "fas fa-arrow-down";
    if (this.state.ishide) {
      icon = "fas fa-arrow-up";
    }
    //
    let cardbody = null;
    if (this.state.ishide) {
      cardbody = (
        <Contactbody
          email={this.props.contact.email}
          phone={this.props.contact.phone}
        />
      );
    }

    let editformshow = null;
    if (this.state.isEditing) {
      editformshow = (
        <Edit
          submit={this.handleSubmit}
          change={this.handleChange}
          name={this.state.name}
          email={this.state.email}
          phone={this.state.phone}
          error={this.state.error}
        />
      );
    } else {
      editformshow = (
        <Cardheader
          iconshape={iconshape}
          hideshow={this.hideshow}
          name={this.props.contact.name}
          handleEditing={this.handleEditing}
          handleDelete={this.handleDelete}
          //handleDelete={this.props.delete(this.props.contact.id)}
          cardbody={cardbody}
        />
        //   {/* {this.state.ishide ? (
        //   <div className="card-body">
        //     <ul className="lst-group">
        //       <li className="list-group-item">
        //         Gmail: {this.props.contact.email}
        //       </li>
        //       <li className="list-group-item">
        //         Phone: {this.props.contact.phone}
        //       </li>
        //     </ul>
        //   </div>
        // ) : null} */}
      );
    }
    return <Auxillary>{editformshow}</Auxillary>;
  }
}

export default Contact;
