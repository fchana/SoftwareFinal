import { Button, InputGroup, FormControl, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';



const Showinfo = (props) =>{
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("https://1e18ef0e-9020-4c00-92ee-707fde8b3c0b.mock.pstmn.io"+window.location.pathname)
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
    <Card.Title>Your uid is</Card.Title>
    <Card.Text>
    {items.uid}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Name: {items.name}</ListGroupItem>
    <ListGroupItem>Vaacine: {items.vaccine}</ListGroupItem>
    <ListGroupItem>Birthday: {items.birthday}</ListGroupItem>
  </ListGroup>
    <Card.Body>
    <Button variant="primary" style={{width: "400px"}}>
    <Link style={{  textDecorationLine: "none", color: "white"}} to={`/finish`+window.location.pathname.substring(9)}>Confirm</Link>
    </Button>
    <Button variant="danger" style={{width: "400px"}}>
    <Link style={{  textDecorationLine: "none", color: "white"}} to={`/`}>Cancel</Link>
    
    </Button>
  </Card.Body>
</Card>
</header>
</div>
    )
}

export default Showinfo