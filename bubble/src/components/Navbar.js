import React, { useState } from 'react'

const Navbar = () => {

  const [signed, setSigned] = useState(false)

  return (
    <div className='nav'>
        Hello From Navbar
        <div>
          <button>Sign UP</button>
          {signed ?
            <button
              onClick={(e) => setSigned(!signed)}>
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