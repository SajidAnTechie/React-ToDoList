import React from "react";
import Navbar from "./Components/navbar/Navbar";
import Contact from "./Components/contacts/Contact";
import Form from "./Components/Form";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import uuid from "uuid/v4";
import { Transition } from "react-spring/renderprops";
import Auxillary from "./Components/HOC/Auxillary";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  state = {
    contact: [
      {
        id: 1,
        name: "Ram",
        email: "sajidansari33272@gmail.com",
        phone: 9817253327,
      },
      {
        id: 2,
        name: "Hari",
        email: "sajidansari33@gmail.com",
        phone: 9817253398,
      },
      {
        id: 3,
        name: "Shyam",
        email: "sajidansari332@gmail.com",
        phone: 9817253300,
      },
    ],
    show: false,
  };
  componentDidMount() {
    console.log("[app.js] componenetdidMount");
  }

  handleClick = () => {
    this.setState({ show: !this.state.show });
  };
  delete = (id) => {
    let filterdata = this.state.contact.filter(function (contact) {
      return contact.id != id;
    });
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        this.setState({ contact: filterdata });
        Swal.fire(
          "Deleted!",
          toast.success("Delete Successful"),
          "Your file has been deleted.",
          "success"
        );
      }
    });
  };
  insertData = (formdata) => {
    //console.log(formdata);
    // let id = this.state.contact.length + 1;
    let data = { id: uuid(), ...formdata };
    //console.log(data);

    this.setState({
      contact: [data, ...this.state.contact],
    });
    toast.success("Data Added Successful");
  };
  EditSubmitData = (editformdata) => {
    let editdata = this.state.contact.map((contact) => {
      if (contact.id === editformdata.id) {
        return editformdata;
      } else {
        return contact;
      }
    });
    this.setState({ contact: editdata });
    toast.success("Edit Successful");
  };
  render() {
    //we can map js array by defining in a variable.

    // const contactlist = this.state.contact.split('').map(contacts => (
    //   <Contact contact={contacts} key={contacts.id} delete={this.delete} />
    // ));

    return (
      <Auxillary>
        <Navbar title="Contact Management System" />
        <Form data={this.insertData} />
        <Transition
          items={this.state.contact}
          keys={(item) => item.id}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {(item) => (props) => (
            <div style={props}>
              <Contact
                edit={this.EditSubmitData}
                contact={item}
                delete={this.delete}
              />
            </div>
          )}
        </Transition>
        {/* {contactlist} */}
        <ToastContainer />
      </Auxillary>
    );
  }
}

export default App;
