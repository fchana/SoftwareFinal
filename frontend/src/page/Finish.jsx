import { Button, InputGroup, FormControl, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';



const Finish = () =>{
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
    124xxxxxxxx00
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Name: นาย ชนาธิป อมรชีวศิลปกุล</ListGroupItem>
    <ListGroupItem>Vaacine: 3</ListGroupItem>
    <ListGroupItem>Birthday: 11-19-2000</ListGroupItem>
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