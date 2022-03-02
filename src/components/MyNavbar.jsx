import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";

class MyNavbar extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Job search app</Navbar.Brand>
         <a className="fav"href="/favorite">Favorite</a>
        </Navbar>
      </>
    );
  }
}

export default MyNavbar;
