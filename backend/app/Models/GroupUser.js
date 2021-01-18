'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class GroupUser extends Model 
{
    static get table() {
        return 'groups_users';
    }

    group() {
        return this.belongsTo('App/Models/Group', 'id', 'group_id');
    }

    user() {
        return this.belongsTo('App/Models/User', 'id', 'user_id');
    }
}

module.exports = GroupUser
