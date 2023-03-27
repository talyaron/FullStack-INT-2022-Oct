"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const class_entity_1 = require("../../../models/classes/entities/class.entity");
const student_entity_1 = require("../../../models/students/entities/student.entity");
require('dotenv').config();
exports.databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: () => {
            const sequelize = new sequelize_typescript_1.Sequelize({
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
                models: [class_entity_1.Class, student_entity_1.Student],
            });
            sequelize.addModels([class_entity_1.Class, student_entity_1.Student]);
            return sequelize;
        },
    },
];
//# sourceMappingURL=provider.providers.js.map