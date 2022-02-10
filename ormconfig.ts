import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions'

const config: SqliteConnectionOptions = {
  type: 'sqlite',
  database: 'stellardb',
  entities: ['dist/src/**/*.entity.js'],
  synchronize: true //TODO move this to false once in production
  //filename
}

export default config