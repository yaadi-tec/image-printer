var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const cors = require('cors');
var fs = require('fs');

var productRouter = require('./routes/product');

var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"]
  }
})
var serverPort = 3000;

var user_socket_connect_list = [];

// handle any requests that don't match the static files
app.get('/', (req, res) => {
  // send the index.html file
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.use(logger('dev'));
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ extended: true, limit: '100mb' }));
app.use(cookieParser());
// serve static files from the dist folder
app.use(express.static(path.join(__dirname, 'dist')))

// app.use('/', indexRouter);
// app.use('/products', productRouter);
app.get('/product/list', (req, res) => {
  res.json({
    status: 200,
    data: [
      {
        "id": 1,
        "name": "Product 1",
        "description": "Description for Product 1",
        "price": 19.99,
        "imageUrl": "https://example.com/images/product1.jpg"
      },
      {
        "id": 2,
        "name": "Product 2",
        "description": "Description for Product 2",
        "price": 24.99,
        "imageUrl": "https://example.com/images/product2.jpg"
      },
      {
        "id": 3,
        "name": "Product 3",
        "description": "Description for Product 3",
        "price": 14.99,
        "imageUrl": "https://example.com/images/product3.jpg"
      },
      {
        "id": 4,
        "name": "Product 4",
        "description": "Description for Product 4",
        "price": 29.99,
        "imageUrl": "https://example.com/images/product4.jpg"
      },
      {
        "id": 5,
        "name": "Product 5",
        "description": "Description for Product 5",
        "price": 39.99,
        "imageUrl": "https://example.com/images/product5.jpg"
      }
    ]
    
  })
})

const corsOptions = {
  origin: "http://localhost:5173",
}

app.use(cors(corsOptions));

// import express inside dynamic added.
fs.readdirSync('./controllers').forEach((file) => {
  if (file.substring(-3) == ".js") {
    route = require('./controllers/' + file);
    route.controller(app, io, user_socket_connect_list);
  }
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

server.listen(serverPort);

console.log("Server Start : " + serverPort );

Array.prototype.swap = (x, y) => {
  var b = this[x];
  this[x] = this[y];
  this[y] = b;
  return this;
}

Array.prototype.insert = (index, item) => {
  this.splice(index, 0, item);
}

Array.prototype.replace_null = (replace = '""') => {
  return JSON.parse(JSON.stringify(this).replace(/mull/g, replace));
}

String.prototype.replaceAll = (search, replacement) => {
  var target = this;
  return target.replace(new RegExp(search, 'g'), replacement);
}
