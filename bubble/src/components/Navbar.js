import React, { useState } from 'react'
import app from '../Firebase';

const Navbar = () => {

  const [signed, setSigned] = useState(false)

  function handleSignOUT(){
    setSigned(!signed);
    app.auth.signOut();
  }


  return (
    <div className='nav'>
        Hello From Navbar
        <div>
          <button>Sign UP</button>
          {signed ?
            <button
              onClick={() => handleSignOUT()}>
                Sign OUT
            </button> :
            <button
              onClick={(e) => setSigned(!signed)}>
                Sign IN
            </button>}
          </div>
    </div>
  )
}

export default Navbar