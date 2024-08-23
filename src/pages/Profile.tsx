import { Paper } from '@mui/material';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Footer from '../components/Footer';
import Mynavbar from '../components/Mynavbar';
export const Profile =()=>{


  return <>
    <Mynavbar/>
    
    <center style={{marginTop:'2vw'}}>

   
    <Form style={{width:"50%"}}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>name</Form.Label>
        <Form.Control type="email" placeholder="your name is " />
        <Form.Text className="text-muted">
          your name
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Email address</Form.Label>
        <Form.Control type="email" placeholder="email@gmail.com" />
        <Form.Text className="text-muted">
          you have not entered email
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        changes
      </Button>
    </Form>

    </center>
    <Footer/>
   
  </>
}
