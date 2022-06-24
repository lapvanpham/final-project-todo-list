import React, { useState } from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
import { FiLogOut } from 'react-icons/fi'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { searchTask } from './HeaderSlice'
import { useSelector } from 'react-redux'

function Header() {
  const dispatch = useDispatch()

  const { authDispatch } = useContext(AuthContext)
  const navigate = useNavigate()
  const handleLogout = function () {
    authDispatch({
      type: 'LOGOUT',
    })
    navigate('/login')
  }



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
                <input
                  type="text" className="form-control" placeholder="Search" />
                <button type="button" className="btn btn-secondary"><BsSearch /></button>
              </div>
            </form>
            <div className="navbar-nav" onClick={handleLogout} >
              <span style={{ color: 'red' }} className="nav-item nav-link">
                <FiLogOut style={{ marginRight: '5px' }} />
                Log out
              </span>
            </div>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Header