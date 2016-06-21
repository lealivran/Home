// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout/CoreLayout'
import CoreAdminLayout from '../layouts/CoreAdminLayout/CoreAdminLayout'
import Home from './Home'
import AdminHome from './AdminHome'
import CounterRoute from './Counter'
import CreateAnnonce from './CreateAnnonce'
import Dashboard from './Dashboard'
/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ([
  {
    path: '/',
    component: CoreLayout,
    indexRoute: Home,
    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          require('./Counter').default(store),
          require('./searchAnnonce').default(store)
        ])
      })
    }
  },
  {
    path: '/admin',
    component: CoreAdminLayout,
    indexRoute: AdminHome,
    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          require('./CreateAnnonce').default(store),
          require('./Dashboard').default(store)
        ])
      })
    }
  }
])




export default createRoutes
