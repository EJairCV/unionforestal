import React from 'react'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
function MaderaItem({data}) {

    const navigate = useNavigate()
    const  handleClick=()=>{
        navigate("/info/"+data.id)
    }

  return (
    <>
        <Card className='text-center shadow' onClick={handleClick} border="primary" style={{ width: '18rem', height:"20rem", cursor:'pointer',backgroundColor:"rgba(75, 111, 60, 0.1)" }}>
        <Card.Header>Madera de {data.nom}, corte {data.corte}</Card.Header>
        <Card.Body className='p-2' style={{overflow:""}}>
          <div className='d-flex align-items-center justify-content-center' style={{width:"100%", height:"100%"}}>
          <img className='img-fluid' src={data.img} style={{maxHeight:"80%"}} />
          </div>

        </Card.Body>
      </Card>
    </>
    
  )
}

export default MaderaItem