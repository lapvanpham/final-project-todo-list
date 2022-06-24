import React from 'react'
import { BsFillSunFill } from 'react-icons/bs'

function HeaderContent() {
  return (
    <div className="row m-1 p-4">
      <div className="col">
        <div className="p-1 h1 text-primary text-center mx-auto display-inline-block">
          <BsFillSunFill />
          <span style={{ marginLeft: '15px' }}>My day</span>
        </div>
      </div>
    </div>
  )
}

export default HeaderContent