'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

class User extends Model {

  static get hidden () {
    return ['password', 'created_at', 'updated_at'];
  }

  group() {
    return this.hasOne('App/Models/Group', 'id', 'owner_id');
  }

  groups() {
    return this.belongsToMany('App/Models/Group', 'user_id', 'group_id', 'id', 'id').pivotModel('App/Models/GroupUser');
  }

  async permissions() {

    const groups = await this.groups().fetch();

    let permissions = [];

    for (const group of groups) {

      permissions = await getPermissions(group);

      break;

      // permissions = [...permissions, groupPermissions];

    }

    return permissions;

  }

  async getPermissions(group) {

    try {
      
      const permissions = await group.permissions().fetch();

      return permissions;

    } catch (error) {

      return error.message;
      
    }

  }

  static search(data) {

    const users = this.query()
    .where(function () {

      if (!!data.id) {
        this.where('id', data.id);
      }

      if (!!data.username) {
        this.where('username', data.username);
      }

      if (!!data.email) {
        this.where('email', data.email);
      }

    }).fetch();

    return users;

  }

  static boot () {
    super.boot()

    /**
     * A hook to hash the user password before saving
     * it to the database.
     */
    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  /**
   * A relationship on tokens is required for auth to
   * work. Since features like `refreshTokens` or
   * `rememberToken` will be saved inside the
   * tokens table.
   *
   * @method tokens
   *
   * @return {Object}
   */
  tokens () {
    return this.hasMany('App/Models/Token')
  }
}

module.exports = User
