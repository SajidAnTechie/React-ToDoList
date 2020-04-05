import React from "react";

class Navbar extends React.Component {
  state = {
    persons: {
      id: 0,
      name: 0,
      age: 0
    }
  };

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextProps.title !== this.props.title) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  render() {
    //object keys of object
    let stateholder = Object.keys(this.state.persons)
      .map(id => {
        return [...Array(this.state.persons[id])].map((_, index) => {
          return id;
        });
      })
      .reduce((pre, ini) => {
        return pre.concat(ini);
      }, []);

    console.log("navabar.js", stateholder);
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ background: "blue" }}
      >
        <a
          className="navbar-brand"
          style={{ color: "white", fontWeight: "bold" }}
          href="#"
        >
          {this.props.title}
        </a>
      </nav>
    );
  }
}

export default Navbar;
