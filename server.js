var express = require('express');
var parser = require('body-parser');
var cors = require('cors');
var app = new express();
var data = {
  info:[7,77,88,23,65,66]
}
// require('./post');

app.use(cors());
app.use(parser.json());
app.use(parser.urlencoded({extended:false}));

app.get('/', (req, res) => {
  res.status(200)
    .json(data);
});
app.post('/', (req, res) => {
  var data = req.body;
  //console.log(data);
});

app.use('/home', express.static('app'));

app.listen(9001);

var users = [{
    name: "Michael",
    id: 0
  },{
    name: "Brandon",
    id: 1
  },{
    name: "John",
    id: 2
}];

app.route('/users')
  .get((req, res) => {
    res.status(200).json(users);
  })
  .post((req, res) => {
    users.push = req.body;
  })

  app.route('/users/:id')
    .get((req, res) => {
      //console.log(req.params);
      var user = users.filter((user) => {
        console.log(typeof req.params.id, typeof user.id);
        return +user.id === +req.params.id
      })[0];
      if (user) {
        res.status(200).json(user);
      }
      if (!user) {
        res.status(404).send();
      }
    })
    .patch((req, res) => {
      var user = users.filter((user) => {
        console.log(typeof req.params.id, typeof user.id);
        return +user.id === +req.params.id
      })[0];
      var params = req.params;
      for (key in params) {
        user[key] = params[key];
      }
    })
    .delete((req, res) => {

    
    })

module.exports = app;



