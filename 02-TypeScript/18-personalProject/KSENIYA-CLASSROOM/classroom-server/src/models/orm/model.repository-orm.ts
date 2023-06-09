// Serializers
import {
  serializerFindOptions,
  serializerWhereOptions,
  serializerRelationOptions,
} from '../../common/serializers';

// Interfaces
import {
  FindOptions,
  RelationOptions,
  WhereOptions,
  Keys,
} from '../../common/interfaces';

// External libraries
import { Model } from 'sequelize-typescript';
import {
  UpdateOptions,
  CreateOptions,
  DestroyOptions,
  FindOrCreateOptions,
} from 'sequelize';

// Type `ModelType` would basically wrap & satisfy the 'this' context of any sequelize helper methods
export type ModelType<T extends Model<T>> = Constructor<T> & typeof Model;
export type ModelOmit<T extends Model<T>, K extends Keys<T>[number]> = Omit<
  T,
  K
>;

export abstract class BaseRepositoryORM<T extends Model<T>> {
  constructor(protected module: ModelType<T>) {}

  public async all<
    K extends Keys<T>[number] = undefined,
    R extends Model<R> = Model,
  >(
    where?: WhereOptions<T>,
    relation?: RelationOptions<R>,
  ): Promise<ModelOmit<T, K>[]> {
    return await this.module.findAll<T>({
      where: where && serializerWhereOptions<T>(where),
      include: relation && serializerRelationOptions<R>(relation),
    });
  }

  public async findBy<
    K extends Keys<T>[number] = undefined,
    R extends Model<R> = Model,
  >(
    where: WhereOptions<T>,
    options: FindOptions<T> = {},
    relation?: RelationOptions<R>,
  ): Promise<ModelOmit<T, K>[]> {
    return await this.module.findAll<T>({
      ...serializerFindOptions(options),
      where: serializerWhereOptions<T>(where),
      include: relation && serializerRelationOptions<R>(relation),
    });
  }

  public async findByPk<
    K extends Keys<T>[number] = undefined,
    R extends Model<R> = Model,
  >(
    id: number | string,
    options: FindOptions<T> = {},
    relation?: RelationOptions<R>,
  ): Promise<ModelOmit<T, K>> {
    return await this.module.findByPk<T>(id, {
      ...serializerFindOptions(options),
      include: relation && serializerRelationOptions<R>(relation),
    });
  }

  public async create<DTO>(
    attributes: DTO,
    options: CreateOptions = {},
  ): Promise<T & Model<T>> {
    return await this.module.create<T>(attributes as any, options);
  }

  public async update(
    id: any,
    attributes: Partial<T>,
    { where, ...options }: UpdateOptions<T> = { where: {} },
  ) {
    const [, modules] = await this.module.update<T>(attributes, {
      ...options,
      returning: true,
      where: { id, ...where },
    });
    return modules;
  }

}
