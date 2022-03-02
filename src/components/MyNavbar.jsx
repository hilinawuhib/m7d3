import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
class MyNavbar extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Job search app</Navbar.Brand>
        </Navbar>
      </>
    );
  }
}

export default MyNavbar;
