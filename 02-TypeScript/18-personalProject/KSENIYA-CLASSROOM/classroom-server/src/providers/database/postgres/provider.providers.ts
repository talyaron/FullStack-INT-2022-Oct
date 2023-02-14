// External libraries
import { Sequelize } from 'sequelize-typescript';
import { Class } from 'src/models/classes/entities/class.entity';
import { Student } from 'src/models/students/entities/student.entity';

require('dotenv').config()

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: () => {
      const sequelize = new Sequelize({
        database: process.env.DB_DATABASE,
        host: process.env.DB_HOST,
        port: 5432,
        schema: 'hafifa',
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        dialect: 'postgres',
        ssl: true,
        dialectOptions: {
          ssl: {
            require: true,
          },
        },
        models: [Class, Student],
      });

      sequelize.addModels([Class, Student]);

      return sequelize;
    },
  },
];
