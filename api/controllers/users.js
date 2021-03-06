var jwt = require('jsonwebtoken');

module.exports = {
  auth: auth,
  listUsers: listUsers,
  createUser: createUser,
  editUser: editUser,
  getUser: getUser
};

function auth(req, res) {
  global.authDriver.auth(req.swagger.params.credentials.value.email, req.swagger.params.credentials.value.password).then(
    (user) => {
      var token = jwt.sign(user, global.secret, {
        expiresInMinutes: 1440
      });
      res.send({
        token: token
      });
    }, (error, message) => {
      res.statusCode = error;
      res.send({
        status: error,
        message: message
      });
    });
}

function listUsers(req, res) {
  global.authDriver.listUsers().then((users) => {
    res.send(users);
  });
}

function getUser(req, res) {
  var userId = req.swagger.params.userId.value;

  var realUserId = userId === 'me' ? req.decoded._id : userId;

  global.authDriver.getUser(realUserId).then((user) => {
    res.send(user);
  }, (error, message) => {
    res.statusCode = error;
    res.send({
      status: error,
      message: message
    });
  });
}

function createUser(req, res) {
  var data = {};
  if(req.swagger.params.user.value.email) data.email = req.swagger.params.user.value.email;
  if(req.swagger.params.user.value.password) data.password = req.swagger.params.user.value.password;

  global.authDriver.createUser(data).then((user) => {
    res.statusCode = 303;
    res.setHeader('Location', '/users/' + user.id);
    res.send({
      status: 303,
      message: 'User created!'
    });
  }, (error, message) => {
    res.statusCode = error;
    res.send({
      status: error,
      message: message
    });
  });
}


function editUser(req, res) {
  var userId = req.swagger.params.userId.value;

  var realUserId = userId === 'me' ? req.decoded._id : userId;

  var data = {};
  if(req.swagger.params.user.value.email) data.email = req.swagger.params.user.value.email;
  if(req.swagger.params.user.value.password) data.password = req.swagger.params.user.value.password;

  if(data.email === req.decoded.email) {
    res.send({
      message: 'email is unchanged'
    });
    return;
  }
  if(data.password === req.decoded.password) {
    res.send({
      message: 'password is unchanged'
    });
    return;
  }

  if(!data.email.match(/.+@.+\..+/)) {
    res.send({
      message: 'no way is that email valid'
    });
    return;
  }

  global.authDriver.editUser(realUserId, data).then(() => {
    res.statusCode = 200;
    res.send({
      status: 200,
      message: "User Updated"
    });
  }, (error, message) => {
    res.statusCode = error;
    res.send({
      status: error,
      message: message
    });
  });
}
