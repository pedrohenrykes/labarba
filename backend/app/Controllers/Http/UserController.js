'use strict'

const User = use('App/Models/User');

class UserController
{
  async list ()
  {
    const users = await User.all();

    return users;
  }

  async search ({ request, response })
  {
    const data = request.only(['id', 'username', 'email']);

    if (Object.keys(data).length > 0) {

      const users = await User.search(data);

      if (users) {
        return users;
      }

    }

    return response
      .status(400)
      .send({ message: { error: 'Não foram encontrados dados relevantes.' } });
  }

  async store ({ request, response })
  {
    try {

      const data = request.only(['username', 'email', 'password']);

      const userExists = await User.findBy('email', data.email);

      if (userExists) {
        return response
          .status(400)
          .send({ message: { error: 'Usuário já registrado.' } });
      }

      const user = await User.create(data);

      return user;

    } catch (err) {

      return response
        .status(err.status)
        .send(err);

    }
  }

  async update({ request, response })
  {
    try {

      const data = request.only(['id', 'username', 'email', 'password']);

      const user = await User.findBy('id', data.id);

      user.username = data.username;
      user.email    = data.email;
      user.password = data.password;

      await user.save();

      return user;

    } catch (err) {

      return response
        .status(err.status)
        .send(err);

    }
  }

  async remove({ request, response })
  {
    try {

      const data = request.only(['id']);

      const user = await User.find(data.id);

      await user.delete();

      return user;

    } catch (err) {

      return response
        .status(err.status)
        .send(err);

    }
  }
}

module.exports = UserController
