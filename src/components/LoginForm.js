import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebase';
import { AuthContext } from '../context/AuthContext'

function LoginForm() {
  const [error, setError] = React.useState(false)
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const navigate = useNavigate()
  const { dispatch } = useContext(AuthContext)


  const handleSubmit = function (e) {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        dispatch({
          type: 'LOGIN',
          payload: user
        })
        console.log(user)
        navigate('/')
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        console.log('error...')
        console.log(email)
        console.log(password)
        setError(true)
      });
  }


  return (
    <section className="">
      <div className="container-fluid h-custom" style={{ marginTop: '5%' }}>
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt='...' />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form onSubmit={handleSubmit}>

              <h2 style={{ marginBottom: '1em' }}>Welcome back!</h2>
              {/* Email input */}
              <div className="form-outline mb-4">
                <input
                  onChange={(e) => { setEmail(e.target.value) }}
                  type="email" id="form3Example3" className="form-control form-control-lg" placeholder="Enter a valid email address" />
                <label className="form-label" htmlFor="form3Example3">Email address</label>
              </div>
              {/* Password input */}
              <div className="form-outline mb-3">
                <input
                  onChange={(e) => { setPassword(e.target.value); }}
                  type="password" id="form3Example4" className="form-control form-control-lg" placeholder="Enter password" />
                <label className="form-label" htmlFor="form3Example4">Password</label>
              </div>

              <div className="d-flex justify-content-between align-items-center">

                {error && <p className='error'>Wrong email or password</p>}
              </div>

              <div className="d-flex justify-content-between align-items-center">
                {/* Checkbox */}
                <div className="form-check mb-0">
                  <input className="form-check-input me-2" type="checkbox" defaultValue id="form2Example3" />
                  <label className="form-check-label" htmlFor="form2Example3">
                    Remember me
                  </label>
                </div>
                <a href="#!" className="text-body">Forgot password?</a>
              </div>
              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="submit" onClick={handleSubmit}
                  className="btn btn-primary btn-lg" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>Login</button>
                <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account?
                  <span style={{ marginLeft: '0.5rem' }} onClick={() => { navigate('/signup') }} href="#!" className="link-danger">Register</span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

    </section>

  )
}

export default LoginForm