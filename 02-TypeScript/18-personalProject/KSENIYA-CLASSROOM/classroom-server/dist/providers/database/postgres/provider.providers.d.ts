import { Sequelize } from 'sequelize-typescript';
export declare const databaseProviders: {
    provide: string;
    useFactory: () => Sequelize;
}[];
