import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const DatabaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT, 10),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD, 
  database: process.env.DATABASE_NAME,
  entities: ['dist/**/*.entity{.ts,.js}'], 
  synchronize: true, 
};

export default DatabaseConfig;
