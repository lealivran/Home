// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout/CoreLayout'
import Home from './Home'
import CounterRoute from './Counter'
import CreateAnnonce from './CreateAnnonce'
/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ({
  path: '/',
  component: CoreLayout,
  indexRoute: Home,
  getChildRoutes (location, cb) {
    require.ensure([], (require) => {
      cb(null, [
        require('./Counter').default(store),
        require('./CreateAnnonce').default(store) 
      ])
    })
  }
})


export default createRoutes
