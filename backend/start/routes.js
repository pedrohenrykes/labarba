'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('/auth/login', 'AuthController.login');

Route.group(() => {

  Route.get('/users', 'UserController.list');
  Route.get('/users/search', 'UserController.search');
  Route.post('/users/store', 'UserController.store');
  Route.put('/users/update', 'UserController.update');
  Route.delete('/users/remove', 'UserController.remove');

}).middleware('auth');
