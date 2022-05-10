import logo from './logo.svg';
import './App.css';
import {Card, Button, FormControl, InputGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={`https://app.dtac.co.th/vaccine/assets/images/logo-dtac@2x.png`} alt="logo" style={{marginRight: '1050px', marginBottom: '50px'}}/>
        <img src={`https://app.dtac.co.th/vaccine/assets/images/banner/WebBanner-desktop-1120x400-Th_2022-Apr-28.jpg`} style={{marginBottom: '25px'}} alt="logo" />
        <Card className="text-center" style={{width: '50%'}}>
  <Card.Header style={{color: 'black'}}>ดีแทค เปิดลงทะเบียน รับการฉีดวัคซีนโควิด-19</Card.Header>
  <Card.Body style={{color: 'black'}}>
    <Card.Title>กรุณากรอกรหัสบัตรประชาชน</Card.Title>
    <InputGroup className="mb-3">
    <InputGroup.Text id="uid">กรุณากรอกรหัสบัตรประชาชน</InputGroup.Text>
    <FormControl
      placeholder="รหัสบัตรประจำตัวประชาชน"
      aria-label="uid"
    />
  </InputGroup>
    <Button variant="primary">Sign up</Button>
  </Card.Body>
  <Card.Footer className="text-muted">Dtac Vaccine</Card.Footer>
</Card>
      </header>
    </div>
  );
}

export default App;
