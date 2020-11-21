import Knex, { PgConnectionConfig, PoolConfig } from 'knex'

export interface IDatabaseConfig {
  client: string,
  timezone?: string,
  connection: PgConnectionConfig
  pool: PoolConfig,
  debug: boolean
}
export interface IDatabaseCredentials {
    host: string,
    port: number,
    username: string,
    password: string
  }

export default class Database {
  private static _dbConnection: Knex;

  static get dbConnection (): Knex {
    return this._dbConnection
  }

  static set dbConnection (newConnection: Knex) {
    this._dbConnection = newConnection
  }

  static getCredentials (): IDatabaseCredentials {
    const credentials: IDatabaseCredentials = {
      host: process.env.DB_HOST || '',
      port: parseInt(process.env.DB_PORT || ''),
      username: process.env.DB_USERNAME || '',
      password: process.env.DB_PASSWORD || ''
    }

    return credentials
  }

  static getConfig (): IDatabaseConfig {
    const credentials = this.getCredentials()
    const config: IDatabaseConfig = {
      client: 'postgres',
      timezone: 'utc',
      connection: {
        host: credentials.host,
        user: credentials.username,
        password: credentials.password
      },
      pool: { min: 2, max: 10 },
      debug: (process.env.DB_DEBUG === 'true')
    }

    return config
  }

  static getConnection (): Knex {
    if (!this.dbConnection) {
      const config = this.getConfig()
      //   console.log(config)
      this.dbConnection = Knex(config)
    }

    return this.dbConnection
  }
}
