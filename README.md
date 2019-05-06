# rest-hapi-demo-auth
A simple demonstration of the [rest-hapi](https://github.com/JKHeadley/rest-hapi) plugin with authentication.

## Requirements

You need [Node.js](https://nodejs.org/en/) installed and you'll need [MongoDB](https://docs.mongodb.com/manual/installation/) installed and running.

## Installation

clone the repo
```
$ git clone https://github.com/JKHeadley/rest-hapi-demo.git
```

install the dependencies
```
$ npm install
```

## Using the app

start the api
```
$ npm start
```

view the api docs at 

[http://localhost:8080/](http://localhost:8080/)

## Authentication

To test the authentication flow, you must first create a user by providing an `email` and `password` to the `register` endpoint. Once the user is created, login with the same `email` and `password` using the `login` endpoint. If successful, the response will include a `token` field. You can now use this token value as an `authorization` header to access any authenticated endpoints.


