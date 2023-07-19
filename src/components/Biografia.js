import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import hideo  from '../img/hideokojima.jpg'
import { Link } from "react-router-dom";

export default function Biografia() {
  return (
    <div>
      <h1>Biografia</h1>

      <Container>
        <br></br>
        <br></br>
        <Row>
          <Col>
          <img src={hideo} alt="hideo" style={{height: "90%", width: "90%"}}></img>
          </Col>
          <Col>
          <p>Hideo Kojima (小島秀夫, Kojima Hideo, 24 de agosto de 1963) es un diseñador y director de videojuegos japonés. Es considerado como uno de los diseñadores más influyentes y repercusivos de la historia de los videojuegos. Fue el vicepresidente de Konami Computer Entertainment Japan y actualmente se encuentra a cargo del equipo desarrollador de videojuegos Kojima Productions, un nuevo equipo dedicado a 
            la creación de videojuegos creativos dejando de lado las decisiones económicas y administrativas. 
            Hideo Kojima es el creador y director de varios videojuegos exitosos, incluyendo franquicias como 
            Metal Gear, Snatcher y Policenauts. También ha producido juegos como Zone of the Enders y Boktai.

            Considerado como un autor de videojuegos, desarrolló una fuerte pasión por el cine de 
            acción-aventura y la literatura durante su infancia y adolescencia. En 1986, 
            Konami lo contrató, para lo cual diseñó y escribió Metal Gear (1987) para el MSX2, un 
            juego que sentó las bases de los juegos de sigilo y la serie Metal Gear, sus obras más 
            conocidas y apreciadas. El título que lo consagró como uno de los diseñadores de videojuegos 
            más aclamados fue Metal Gear Solid (1998) para PlayStation. También es conocido por producir 
            la serie Zone of the Enders, así como por escribir y diseñar Snatcher (1988) y Policenauts (1994)
            , juegos de aventura gráfica considerados por su presentación cinematográfica.​</p>
          </Col>
        </Row>

        <div className="cerrar-sesion">
            <Link className="btn btn-dark" to="/Principal">Volver al principal</Link>
        </div>
      </Container>
    </div>
  );
}
