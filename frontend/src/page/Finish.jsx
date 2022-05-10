import { Button, InputGroup, FormControl, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


const Finish = () =>{
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("https://1e18ef0e-9020-4c00-92ee-707fde8b3c0b.mock.pstmn.io/Showinfo/"+window.location.pathname.substring(7))
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setItems(result);
              console.log(result)
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [])
    return(
<div className="App">
<header className="App-header">
<Card style={{ width: '50rem' , color: 'black'}}>
  <Card.Img variant="top" src="https://vaccine.trueid.net/static/media/banner.af9b098f.jpg" />
  <Card.Body>
    <Card.Title><h1>Your vaccine is comfirmed</h1></Card.Title>
  </Card.Body>
  <Card.Body>
    <Card.Title>Your uid is</Card.Title>
    <Card.Text>
    {items.uid}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Name: {items.name}</ListGroupItem>
    <ListGroupItem>Vaacine: {parseInt(items.vaccine)+1} </ListGroupItem>
    <ListGroupItem>Birthday: {items.birthday}</ListGroupItem>
  </ListGroup>
  <Card.Body>
  <Button variant="primary" style={{width: "400px"}} disabled>
  <Link style={{  textDecorationLine: "none", color: "white"}} to={`/Fisnish`}>Your vaccine is comfirmed</Link>
</Button>
  </Card.Body>
</Card>
</header>
</div>
    )
}

export default Finish