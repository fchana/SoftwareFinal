// import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Signup from "../page/Signup";


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
            {/* <Route path="/" element={<Index />}></Route> */}
            <Route name="home" path="/" element={<Signup/>}></Route>
            {/* <Route name="posts" path="/postpage" element={<Post />}></Route>
            <Route name="content" path="/postpage/post/content/:id" element={<Content />}></Route>
            <Route name="author" path="/postpage/post/author/:id" element={<Authorpage />}></Route>
            <Route name="tag" path="/posts/tagandcategory" element={<TagAndCategoryPage />}></Route>
            <Route name="categorypost" path="/posts/category/:id" element={<CategoryPage />}></Route>
            <Route name="tagpost" path="/posts/tag/:id" element={<TagPage />}></Route>
            <Route name="listauthor" path="/author" element={<ListAuthor />}></Route> */}
            {/* <Route path="/category" element={<Category />}></Route>
            <Route path="/author" element={<Author />}></Route>
            <Route path="/about" element={<About />}></Route> */}
          </Routes>
        </BrowserRouter>
      </>
    );
  };

export default Navigation;
