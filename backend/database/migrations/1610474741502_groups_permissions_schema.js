'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GroupsPermissionsSchema extends Schema {
  up () {
    this.create('groups_permissions', (table) => {
      table.increments();
      table.string('route', 200).notNullable();
      table.boolean('read_data').defaultTo(false);
      table.boolean('create_data').defaultTo(false);
      table.boolean('edit_data').defaultTo(false);
      table.boolean('remove_data').defaultTo(false);
      table.integer('group_id').unsigned().references('id').inTable('groups').index();
      table.timestamps();
    })
  }

  down () {
    this.drop('groups_permissions')
  }
}

module.exports = GroupsPermissionsSchema
