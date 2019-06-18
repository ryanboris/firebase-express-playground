// Update with your config settings.
require('dotenv').config()

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'api',
      user: 'me',
      password: 'password',
      port: 5432,
      host: 'localhost'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    useNullAsDefault: true,
    pool: {
      min: 2,
      max: 10
    },
    migrations: { directory: __dirname + '/data/migrations' },
    seeds: { directory: __dirname + '/data/seeds' }
  }
}
