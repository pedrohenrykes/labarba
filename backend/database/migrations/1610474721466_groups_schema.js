'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GroupsSchema extends Schema {
  up () {
    this.create('groups', (table) => {
      table.increments();
      table.string('name', 200).notNullable();
      table.boolean('is_private');
      table.integer('owner_id').unsigned().references('id').inTable('users').index();
      table.timestamps();
    })
  }

  down () {
    this.drop('groups')
  }
}

module.exports = GroupsSchema
