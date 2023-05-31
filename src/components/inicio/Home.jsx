import React from "react";
import Card from "react-bootstrap/Card";
import "./homeCss.css";
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
        <img className="img-fluid" src="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 my-3" >
            <h3 className="text-center" style={{color:"#5cad2e"}}>¿Quienes somos?</h3>
            <p style={{color:"#5cad2e"}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam fugit
              facilis corporis dolor eius amet et laborum, iste totam
              exercitationem ab cum deserunt aliquam odit sit est quos, natus
              harum?lo
            </p>
          </div>
          <div className="col-lg-6 col-12 my-3 text-center">
          <img
              className="img-fluid rounded shadow"
              src="https://i0.wp.com/www.actualidadambiental.pe/wp-content/uploads/2015/03/tala-ilegal_sernanp.jpg"
              alt=""
            />  
          </div>       
                    
        </div>
        <div className="d-flex flex-column flex-lg-row ">
          <div className="m-5 shadow">
          <Card className="carta3" text="white">
            <Card.Header>Misión</Card.Header>
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
      
          </div>
          <div className="m-5 shadow">
            <Card className="carta2" text="white">
            <Card.Header>Misión</Card.Header>
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="m-5 shadow">
            <Card className="carta"  text="white">
            <Card.Header>Objetivos</Card.Header>
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
