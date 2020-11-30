import path from 'path';
import { Config } from 'knex'

module.exports = {
  client: 'sqlite3',
  connection: {
    filename: path.resolve(process.cwd(), 'src', 'database', 'database.sqlite')
  },
  migrations: {
    directory: path.resolve(process.cwd(), 'src', 'database', 'migrations')
  },
  useNullAsDefault: true
} as Config