import "bootstrap/dist/css/bootstrap.css";
import list from "../style/list.css";
import informacion from "../Informacion.json";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const List = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpenModal = (id) => {
    const item = informacion.personajes.find((item) => item.id === id);
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div className="container">
      <div className="row">
        {informacion.personajes.map((item) => (
          <div className="col" key={item.id}>
            <img
              src={item.imagen}
              alt="Imagenpersonaje"
              style={{ width: "310px", height: "306px" }}
            ></img>
            <h2>{item.nombre}</h2>
            <h3 className="edad">Edad: {item.edad}</h3>
            <p>Estado en combate: {item.Estado}</p>
            <Button key={item.id} onClick={() => handleOpenModal(item.id)}>
              Mas informacion
            </Button>

            <br></br>
            <br></br>

            <div className="cerrar-sesion">
            <Link className="btn btn-dark" to="/Principal">Volver al principal</Link>
            </div>

            <Modal show={showModal} onHide={handleCloseModal}>
              <Modal.Header closeButton>
                <Modal.Title>
                  {selectedItem ? selectedItem.nombre : ""}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {selectedItem ? selectedItem.Descripcion : ""}
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                  Cerrar
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
