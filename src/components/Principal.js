import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../style/Principal.css";
import { useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function App() {
  const navigate = useNavigate();
  return (
    <>
      <div className="principal">
        <div className="carrousel">
          <h4>Noticias sobre Metal gear</h4>
          <Carousel>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
                src="https://media.vandal.net/m/7-2021/20217512111167_1.jpg"
                alt="Image One"
              />
              <Carousel.Caption>
                
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
                src="https://assetsio.reedpopcdn.com/thumbnail_METAL-GEAR-SOLID-2.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp"
                alt="Image Two"
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
                src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/05/metal-gear-solid-collection-3042658.jpg"
                alt="Image One"
              />
              <Carousel.Caption>
                <h3>Metal gear solid</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="tarjetas">
          <h1>Que es metal gear</h1>

          <p>
            Metal Gear Solid (メタルギアソリッド Metaru Gia Soriddo?, comúnmente
            abreviado MGS) es un videojuego de acción-aventura y sigilo de 1998
            desarrollado por Konami Computer Entertainment Japan y publicado por
            Konami para la consola PlayStation. Fue lanzado el 3 de septiembre
            de 1998 en Japón,​ el 21 de octubre de 1998 en Norteamérica y el 24
            de junio de 1999 en Europa.​ El juego fue desarrollado y pensado
            únicamente para la consola Playstation, según la entrevista que dio
            Kojima a la Revista Famitsu en la celebración de los 20 años de
            Playstatión. También en el libro incluido en el premium package se
            establece que la idea del juego se empezó en 1993 cuando se anunció
            el lanzamiento del PlayStation. Metal Gear Solid es el tercer
            lanzamiento de la franquicia Metal Gear y se convirtió en el primero
            de la serie en hacer uso de gráficos 3D, una de las razones por la
            que se le añadió el término «Solid» (en español: «Sólido») al
            título.​ Su antecesor es Metal Gear 2: Solid Snake de 1990, y su
            secuela, Metal Gear Solid 2: Sons of Liberty, se estrenó en 2001.​
            Esta nueva entrega ofreció escenas cinemáticas utilizando el motor
            del juego, así como la actuación en voz en numerosas secuencias de
            códec.​
          </p>
        </div>
        <div className="personajes">
          <Container>
            <Row>
              <Col>

                <Card style={{ width: "26rem" }}>
                  <Card.Img variant="top" src="https://i.blogs.es/f26226/hideo-kojima/840_560.jpeg" />
                  <Card.Body>
                    <Card.Title>Hideo Kojima</Card.Title>
                    <Card.Text>
                      Conoce mas sobre la biografia del creador de esta gran franquicia.
                    </Card.Text>
                    <Link className="btn btn-dark" to="/Biografia">Biografia</Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: "35rem", padding: " 0 0 0 60px"}}>
                  <Card.Img variant="top" src="https://www.cyberludus.com/content/uploads/2021/04/Metal-Gear-Solid-1.jpg" />
                  <Card.Body>
                    <Card.Title>Personajes principales</Card.Title>
                    <Card.Text>
                      Conoce mas sobre los personajes de esta gran saga
                    </Card.Text>
                    <Link className="btn btn-dark" to="/List">Mira la lista</Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        
        <div className="cerrar-sesion">
        <Link className="btn btn-dark" to="/Login">Cerrar Sesion</Link>
      </div>
      </div>
      
    </>
  );
}
