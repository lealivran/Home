import Koa from 'koa'
import convert from 'koa-convert'
import webpack from 'webpack'
import webpackConfig from '../build/webpack.config'
import historyApiFallback from 'koa-connect-history-api-fallback'
import serve from 'koa-static'
import proxy from 'koa-proxy'
import _debug from 'debug'
import config from '../config'
import webpackDevMiddleware from './middleware/webpack-dev'
import webpackHMRMiddleware from './middleware/webpack-hmr'

// essayer avec que mongoose
// import mongoose from 'koa-mongoose'
import mongoose from 'mongoose'
import _ from 'koa-route'

import annonces from './lib/api/annonces'

const debug = _debug('app:server')
const paths = config.utils_paths
const app = new Koa()


// require('./lib/api/annonces')(app);

// Enable koa-proxy if it has been enabled in the config.
if (config.proxy && config.proxy.enabled) {
  app.use(convert(proxy(config.proxy.options)))
}

// This rewrites all routes requests to the root /index.html file
// (ignoring file requests). If you want to implement isomorphic
// rendering, you'll want to remove this middleware.
// app.use(convert(historyApiFallback({
//   verbose: false
// })))


var Annonce = require('./lib/model/annonce');

mongoose.connect('mongodb://lea:supdeweb@ds011893.mlab.com:11893/homesdw');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("connected");

  // Annonce.find({}, function (err, annonces){
  //   if (err) console.log(err);
  //   console.log(annonces);
  //   // res.render('restaurants/view', {title: 'Restaurant', restaurant});
  //   // this.body = "annonces";
  // })
});

// app.use(mongoose({
//     username: 'lea',
//     password: 'supdeweb',
//     host: 'ds011893.mlab.com',
//     port: 11893,
//     // database: 'homesdw',
//     database: ctx => {
//         return ctx.headers['x-app']
//     },
//     schemas: './lib/model',
//     db: {
//         native_parser: true
//     },
//     server: {
//         poolSize: 5
//     }
// }))

app.use(_.get('/annonces', ()=>{
  annonces.list.then((annonces)=>{
    this.body = "annonces";
  })
  .catch(()=>{
    console.log("pas d'annonce");
  })
} ));
// app.use(_.get('/annonces/:id', annonces.show));

// ------------------------------------
// Apply Webpack HMR Middleware
// ------------------------------------
if (config.env === 'development') {
  const compiler = webpack(webpackConfig)

  // Enable webpack-dev and webpack-hot middleware
  const { publicPath } = webpackConfig.output

  app.use(webpackDevMiddleware(compiler, publicPath))
  app.use(webpackHMRMiddleware(compiler))

  // Serve static assets from ~/src/static since Webpack is unaware of
  // these files. This middleware doesn't need to be enabled outside
  // of development since this directory will be copied into ~/dist
  // when the application is compiled.
  app.use(convert(serve(paths.client('static'))))
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
  app.use(convert(serve(paths.dist())))
}

export default app
