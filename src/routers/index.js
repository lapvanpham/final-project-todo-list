import Home from '../pages/home'
import Counter from '../pages/counter'

const routers = [{
  path: "/",
  component: Home,
  exact: true,
  protect: false
},
{
  path: "/counter",
  component: Counter,
  exact: true,
  protect: false
},
]

export {
  routers
}