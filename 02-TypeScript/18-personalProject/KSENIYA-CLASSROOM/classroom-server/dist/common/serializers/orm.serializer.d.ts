import { FindOptions, WhereOptions, GroupOptions, RelationOptions } from "../interfaces";
import { Includeable, FindOptions as SequelizeFindOptions, GroupOption as SequelizeGroupOptions, WhereOptions as SequelizeWhereOptions } from "sequelize";
import { Model } from "sequelize-typescript";
export declare function serializerRelationOptions<M extends Model<M>>(relations: RelationOptions<M>): Includeable[];
export declare function serializerGroupOptions(groupOptions: GroupOptions): SequelizeGroupOptions;
export declare function serializerWhereOptions<T>(whereOptions: WhereOptions<T>): SequelizeWhereOptions<T>;
export declare function serializerFindOptions<M extends Model<M>>({ order, where, group, attributes, ...findOptions }: FindOptions<M>): SequelizeFindOptions;
