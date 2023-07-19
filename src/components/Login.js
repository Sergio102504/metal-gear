//Importamos librerias necesarias
import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import '../style/login.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';



//[ ] Dejo aqui los parentesis cudrados porque 
//por alguna razon en mi teclado no aparecen
export default function Login() {
    /* creamos variables useState vacias para despues
     asignarle un username y un set password*/
    const [username, setUsername ] = useState('');
    
    const [password, setPassword ] = useState('');
   

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
      
        if (username === 'quinterosergio588@gmail.com' && password === 'clave') {
          navigate('/Principal');
        } else {
          alert('Usuario o contraseña incorrectos');
        }
      };

      return (
        <>
            
    <div className="contenedor-principal">
        <h1>Metal Gear Wiki</h1>

        <h3>Bienvenido a la fuente de informacion sobre la saga de  videojuegos metal gear</h3>


        
            <Container className="contenedor-login" >
                
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label>Direccion de email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"  value={username} onChange={(e) => setUsername(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                
                <Button variant="dark" type="submit">
                    Ingresar
                </Button>
                </Form>

                  <br></br>
                <div className="rotulo">
                  <p>Sergio Alejandro Quintero</p>
                  <p>2023</p>
                </div>


          </Container>

        </div>

  
        </>

      );
};

