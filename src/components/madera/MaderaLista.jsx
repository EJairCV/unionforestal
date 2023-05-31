import React from "react";
import useMaderaList from "../../hooks/useMaderaList";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Maderaitem from "./MaderaItem";

function MaderaLista() {
  const Maderaobj = useMaderaList();

  if (Maderaobj.estado == true) {
    return (
      <>
        <div className="container">
          <div className="form-group mt-4">
            <select
              style={{ width: "100%", borderColor: "#5cad2e" }}
              className="form-control form-select"
              aria-label="Default select example"
            >
              <option>Todos los tipos de bloques</option>
              <option value="1">Corto</option>
              <option value="1">Largo</option>
              <option value="1">Comercial</option>
              <option value="1">Listoneria</option>
            </select>
            <div className="d-flex align-items-center my-4">
              <label className="mr-3 mb-0">Precio: </label>
              <input
                placeholder="minimo"
                style={{ width: "100px", borderColor: "#5cad2e" }}
                type="number"
                className="form-control mx-2"
              />
              <input
                placeholder="maximo"
                style={{ width: "100px", borderColor: "#5cad2e" }}
                type="number"
                className="form-control mx-2"
              />
            </div>
          </div>
          <div>
            <ul className="pagination">
              <li className="page-item disabled">
                <a className="page-link">&laquo;</a>
              </li>
              <li className="page-item">
                <a className="page-link">1</a>
              </li>
              <li className="page-item">
                <a className="page-link">2</a>
              </li>
              <li className="page-item">
                <a className="page-link">3</a>
              </li>
              <li className="page-item">
                <a className="page-link">4</a>
              </li>
              <li className="page-item">
                <a className="page-link">5</a>
              </li>
              <li className="page-item">
                <a className="page-link">&raquo;</a>
              </li>
            </ul>
          </div>
          <Row>
            {Maderaobj.maderas == undefined
              ? null
              : Maderaobj.maderas.map((obj) => {
                  return (
                    <Col
                      key={obj.id}
                      className="d-flex justify-content-center my-4"
                    >
                      <Maderaitem data={obj}></Maderaitem>
                    </Col>
                  );
                })}
          </Row>
          <div>
            <ul className="pagination">
              <li className="page-item disabled">
                <a className="page-link">&laquo;</a>
              </li>
              <li className="page-item">
                <a className="page-link">1</a>
              </li>
              <li className="page-item">
                <a className="page-link">2</a>
              </li>
              <li className="page-item">
                <a className="page-link">3</a>
              </li>
              <li className="page-item">
                <a className="page-link">4</a>
              </li>
              <li className="page-item">
                <a className="page-link">5</a>
              </li>
              <li className="page-item">
                <a className="page-link">&raquo;</a>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <h1>Cargando</h1>
    </>
  );
}

export default MaderaLista;
