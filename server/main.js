import Koa from 'koa'
import fs from 'fs'
import convert from 'koa-convert'
import webpack from 'webpack'
import webpackConfig from '../build/webpack.config'
import historyApiFallback from 'koa-connect-history-api-fallback'
import serve from 'koa-static'
import proxy from 'koa-proxy'
import _debug from 'debug'
import webpackDevMiddleware from './middleware/webpack-dev'
import webpackHMRMiddleware from './middleware/webpack-hmr'
import mongoose from 'mongoose'
import _ from 'koa-route'
import session from 'koa-session'
import passport from 'koa-passport'
import config from './config/config'
const debug = _debug('app:server')
const paths = config.utils_paths
const app = new Koa()
const db = mongoose.connection;
// Sessions
app.keys = ['38ba4e028d32464afd59bc1ac97a5f966e8fb65f']
app.use(session(app))
require("./config/passport")(passport, config)
app.use(passport.initialize())
app.use(passport.session())
// ------------------------------------
// Connect Database
// ------------------------------------
mongoose.connect('mongodb://lea:supdeweb@ds011893.mlab.com:11893/homesdw');
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', ()=> {
  console.log("connected")
});
require("./config/routes")(app);
// Enable koa-proxy if it has been enabled in the config.
if (config.proxy && config.proxy.enabled) {
  app.use(convert(proxy(config.proxy.options)))
}

// const modelsPath = "./lib/models";
// fs.readdirSync(modelsPath).forEach(function(file) {
//   if (~file.indexOf("js")) {
//     require(modelsPath + "/" + file);
//   }
// });
// ------------------------------------
// Apply Webpack HMR Middleware
// ------------------------------------
if (config.app.env === 'development') {
  const compiler = webpack(webpackConfig)

  // Enable webpack-dev and webpack-hot middleware
  const { publicPath } = webpackConfig.output

  app.use(webpackDevMiddleware(compiler, publicPath))
  app.use(webpackHMRMiddleware(compiler))

  // Serve static assets from ~/src/static since Webpack is unaware of
  // these files. This middleware doesn't need to be enabled outside
  // of development since this directory will be copied into ~/dist
  // when the application is compiled.
  app.use(convert(serve('../src')))
} else {
  debug(
    'Server is being run outside of live development mode, meaning it will ' +
    'only serve the compiled application bundle in ~/dist. Generally you ' +
    'do not need an application server for this and can instead use a web ' +
    'server such as nginx to serve your static files. See the "deployment" ' +
    'section in the README for more information on deployment strategies.'
  )

  // Serving ~/dist by default. Ideally these files should be served by
  // the web server and not the app server, but this helps to demo the
  // server in production.
  // app.use(convert(serve(paths.dist())))
}
// This rewrites all routes requests to the root /index.html file
// (ignoring file requests). If you want to implement isomorphic
// rendering, you'll want to remove this middleware.
// app.use(convert(historyApiFallback({
//   verbose: false
// })))


export default app
