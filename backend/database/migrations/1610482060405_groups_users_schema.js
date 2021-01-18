'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GroupsUsersSchema extends Schema {
  up () {
    this.create('groups_users', (table) => {
      table.increments();
      table.integer('group_id').unsigned().references('id').inTable('groups').index();
      table.integer('user_id').unsigned().references('id').inTable('users').index();
    })
  }

  down () {
    this.drop('groups_users')
  }
}

module.exports = GroupsUsersSchema
