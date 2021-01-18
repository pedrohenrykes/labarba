'use strict'

const User = use('App/Models/User');

class AuthController
{
  async login ({ auth, request, response })
  {
    const { email, password } = request.all();

    try {
      
      await auth.attempt(email, password);

      const user = auth.user;

      const permissions = await user.permissions();
      
      return response
      .status(200)
      .send({ 
        success: true, 
        message: 'Logged!',
        user: user,
        permissions: permissions
      });

    } catch (err) {

      await auth.logout();

      return response
      .status(err.status)
      .send({ 
        success: false, 
        message: err.message 
      });

    }
  }
}

module.exports = AuthController
