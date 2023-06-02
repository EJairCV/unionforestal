import React from 'react'

function MaderaInfo() {
  return (
    <div className='container'>
      <div className='row rounded shadow ' style={{backgroundColor:"rgba(75, 111, 60, 0.1)"}}>
      <div className='col-lg-6 col-12 my-5 text-center '>
        <img className='img-fluid shadow rounded' src="https://madexo.pe/wp-content/uploads/2017/10/tornillo.jpg" />
      </div>
      <div className='col-lg-6 col-12 my-5 '>
        <h3>Madera de tornillo</h3>
        <h5>Bloque comecial</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit omnis expedita accusantium impedit esse facilis nihil, odio eum neque dignissimos eveniet, veniam exercitationem voluptas sequi sint nostrum! Dolor, modi eos.</p>

        
         Cantidad  <input type="number" style={{width:"70px"}} className='' />
         <a className='btn btn-primary mx-2'target="_blank" href="https://api.whatsapp.com/send?phone=51926667490&text=hola!+me+interesa+este+producto%3A+Madera+de+tornillo+de+bloque+comecial+,+con+la+cantidad+de+10">Solicitar via wsp</a>
      </div>
      </div>
      
    </div>
  )
  
}

export default MaderaInfo