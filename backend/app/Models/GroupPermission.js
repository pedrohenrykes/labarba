'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class GroupPermission extends Model 
{
    static get table() {
        return 'groups_permissions';
    }

    group() {
        return this.belongsTo('App/Models/Group', 'id', 'group_id');
    }
}

module.exports = GroupPermission
