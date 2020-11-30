import knex from 'knex';
import path from 'path';

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(process.cwd(), 'database.sqlite')
  },
  useNullAsDefault: true
})

export default db;