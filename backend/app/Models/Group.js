'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Group extends Model 
{
    static get table() {
        return 'groups';
    }

    owner() {
        return this.belongsTo('App/Models/User', 'id', 'owner_id');
    }

    permissions() {
        return this.hasMany('App/Models/GroupPermission', 'id', 'grupo_id');
    }
}

module.exports = Group
