import Home from '../pages/home'
import Login from '../pages/login/login'
import SignUp from '../pages/singup/signup'

const routers = [
  {
    path: "/",
    component: Home,
    exact: true,
    protect: true
  },
  {
    path: "/signup",
    component: SignUp,
    exact: true,
    protect: false
  },
  {
    path: "/login",
    component: Login,
    exact: true,
    protect: false
  },
]

export {
  routers
}