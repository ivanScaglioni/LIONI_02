import React from 'react'


function Navbar() {

  const flip = ()=>{
   
  }

  return (
    <div className='absolute hover:cursor-pointer' onClick={()=>(console.log("click"))}>
      
      Navbar
      <button onClick={flip} > Projects </button>

    </div>
  )
}

export default Navbar