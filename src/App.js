import React from "react";
import Navbar from "./Components/navbar/Navbar";
import Contact from "./Components/contacts/Contact";
import Form from "./Components/Form";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
// import uuid from "uuid/v4";
import { Transition } from "react-spring/renderprops";
import axios from "axios";
import Auxillary from "./Components/HOC/Auxillary";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  state = {
    contact: [],
    show: false,
    errohandler: null,
  };
  componentDidMount() {
    this.handledatafetch();
  }

  handledatafetch = () => {
    axios
      .get("http://localhost:5000/api/v1/contacts/")
      .then((response) => {
        // console.log(response);
        this.setState({ contact: response.data.data });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          text: error.response.data,
        });
      });
  };

  handleClick = () => {
    this.setState({ show: !this.state.show });
  };
  delete = (id) => {
    // let filterdata = this.state.contact.filter(function (contact) {
    //   return contact.id != id;
    // });
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
        axios
          .delete(`http://localhost:5000/api/v1/contacts/delete/${id}`)
          .then((response) => {
            if (response.status === 200) {
              this.handledatafetch();
              Swal.fire(
                "Deleted!",
                toast.success("Delete Successful"),
                "Your file has been deleted.",
                "success"
              );
            }
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              text: error.response.data,
            });
          });
      }
    });
  };
  insertData = (formdata) => {
    axios
      .post("http://localhost:5000/api/v1/contacts/post", formdata)
      .then((response) => {
        // console.log(response);
        this.handledatafetch();
        toast.success("Data Added Successful");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          text: error.response.data,
        });
      });

    // //console.log(formdata);
    // // let id = this.state.contact.length + 1;
    // let data = { id: uuid(), ...formdata };
    // //console.log(data);

    // this.setState({
    //   contact: [data, ...this.state.contact],
    // });
  };

  EditSubmitData = (editformdata) => {
    axios
      .put(
        `http://localhost:5000/api/v1/contacts/update/${editformdata.id}`,
        editformdata
      )
      .then((response) => {
        if (response.status === 200) {
          this.handledatafetch();
          toast.success("Edit Successful");
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          text: error.response.data,
        });
      });
    // let editdata = this.state.contact.map((contact) => {
    //   if (contact.id === editformdata.id) {
    //     return editformdata;
    //   } else {
    //     return contact;
    //   }
    // });
    // this.setState({ contact: editdata });
    // toast.success("Edit Successful");
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
          keys={(item) => item._id}
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
