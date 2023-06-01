import React from "react";
import Card from "react-bootstrap/Card";
import "./homeCss.css";
import img1 from "../../assets/img1.jpg"
import img2 from "../../assets/img2.jpg"

function Home() {
  return (
    <>
      <div className="">
        <div className="logo d-flex justify-content-center align-items-center rounded-bottom">
          <div className="">
            <h1 className="h1 titulo m-4 p-3">
              Corporación Unión Forestal RG S.A.C.
            </h1>
          </div>
        </div>
        {/* <img className="img-fluid" src="" /> */}
      </div>
      <div className="container">
        <div style={{backgroundColor:"rgba(75, 111, 60, 0.1)"}} className="row my-4 rounded shadow">
          <div className="col-lg-6 col-12 my-5">
            <h3 className="text-center mt-2" style={{ color: "#5cad2e" }}>
              ¿Quienes somos?
            </h3>
            <p style={{ color: "#5cad2e" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam fugit
              facilis corporis dolor eius amet et laborum, iste totam
              exercitationem ab cum deserunt aliquam odit sit est quos, natus
              harum?lo
            </p>
          </div>
          <div className="col-lg-6 col-12 my-5 text-center">
            <img
              className="img-fluid rounded shadow"
              src="https://i0.wp.com/www.actualidadambiental.pe/wp-content/uploads/2015/03/tala-ilegal_sernanp.jpg"
              alt=""
            />
          </div>
        </div>
        <div style={{backgroundColor:"rgba(75, 111, 60, 0.1)"}} className="row my-4 rounded shadow">
          <div className="col-lg-6 col-12 order-lg-2 my-5">
            <h3 className="text-center mt-2" style={{ color: "#4b6f3c" }}>
              Nuestra Misión
            </h3>
            <p style={{ color: "#4b6f3c" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam fugit
              facilis corporis dolor eius amet et laborum, iste totam
              exercitationem ab cum deserunt aliquam odit sit est quos, natus
              harum?lo
            </p>
          </div>
          <div className="col-lg-6 col-12 my-5 order-lg-1 text-center">
            <img
              className="img-fluid rounded shadow"
              src={img1}
              alt=""
            />
          </div>
        </div>
        <div style={{backgroundColor:"rgba(75, 111, 60, 0.1)"}} className="row my-4 rounded shadow">
          <div className="col-lg-6 col-12 my-5">
            <h3 className="text-center mt-2" style={{ color: "#8ea42d" }}>
              Nuestra Visión
            </h3>
            <p style={{ color: "#8ea42d" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam fugit
              facilis corporis dolor eius amet et laborum, iste totam
              exercitationem ab cum deserunt aliquam odit sit est quos, natus
              harum?lo
            </p>
          </div>
          <div className="col-lg-6 col-12 my-5 text-center">
            <img
              className="img-fluid rounded shadow"
              src={img2}
              alt=""
            />
          </div>
        </div>
        <div style={{backgroundColor:"rgba(75, 111, 60, 0.1)"}} className="row my-4 rounded shadow">
          <div className="col-lg-6 col-12 order-lg-2 my-5">
            <h3 className="text-center mt-2" style={{ color: "#5cad2e" }}>
              Objetivos Empresariales
            </h3>
            <p style={{ color: "#5cad2e" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam fugit
              facilis corporis dolor eius amet et laborum, iste totam
              exercitationem ab cum deserunt aliquam odit sit est quos, natus
              harum?lo
            </p>
          </div>
          <div className="col-lg-6 col-12 my-5 order-lg-1 text-center">
            <img
              className="img-fluid rounded shadow"
              src={"https://i0.wp.com/www.actualidadambiental.pe/wp-content/uploads/2015/03/tala-ilegal_sernanp.jpg"}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
