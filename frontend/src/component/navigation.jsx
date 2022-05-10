// import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Signup from "../page/Signup";
import Showinfo from "../page/Showinfo";
import Finish from "../page/Finish";

const Navigation = () => {
    return (
      <>
        <BrowserRouter>
          <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container>
              <Navbar.Brand as={Link} to="/">
                Dtac Vaccine Signup
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">

              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Routes>
            <Route name="home" path="/" element={<Signup/>}></Route>
            <Route name="home" path="/showinfo/:uid" element={<Showinfo/>}></Route>
            <Route name="home" path="/finish" element={<Finish/>}></Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  };

export default Navigation;
