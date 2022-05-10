import { Button, InputGroup, FormControl, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';



const Signup = () =>{
    return(
<div className="App">
<header className="App-header">
  <img src={`https://vaccine.trueid.net/static/media/banner.af9b098f.jpg`} style={{marginBottom: '25px', width: "50%"}} alt="logo" />
  <Card className="text-center" style={{width: '50%'}}>
<Card.Header style={{color: 'black'}}>ทรู เปิดลงทะเบียน รับการฉีดวัคซีนโควิด-19</Card.Header>
<Card.Body style={{color: 'black'}}>
<Card.Title>กรุณากรอกรหัสบัตรประชาชน</Card.Title>
<InputGroup className="mb-3">
<InputGroup.Text id="uid">กรุณากรอกรหัสบัตรประชาชน</InputGroup.Text>
<FormControl
placeholder="รหัสบัตรประจำตัวประชาชน"
aria-label="uid"
/>
</InputGroup>
<Button variant="primary">
  <Link style={{  textDecorationLine: "none", color: "white"}} to={`/Showinfo`} >Sign up</Link>
</Button>
</Card.Body>
<Card.Footer className="text-muted">True Vaccine</Card.Footer>
</Card>
</header>
</div>
    )
}

export default Signup