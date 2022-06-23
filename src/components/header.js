import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'

function Header() {
  return (
    <div className='Header'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a href="#" className="navbar-brand">Things</a>
          <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
            <div className="navbar-nav">
              <a href="#" className="nav-item nav-link active">
                <AiOutlineHome />
              </a>
            </div>
            <form className="d-flex">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search" />
                <button type="button" className="btn btn-secondary"><BsSearch /></button>
              </div>
            </form>
            <div className="navbar-nav">
              <a href="#" className="nav-item nav-link">Login</a>
            </div>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Header