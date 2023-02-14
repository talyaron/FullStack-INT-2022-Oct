export interface OperatorsANDORMemory<M> {
  and: Array<KeyWhereOptionsMemory<M>>;
  or: OperatorsOptionsMemory<M> | Array<KeyWhereOptionsMemory<M> | primitiveTypes | OperatorsANDORMemory<M>>;
}

export interface OperatorsOptionsMemory<M> {
  like?: string;
  gt?: number | Date;
  lt?: number | Date;
  gte?: number | Date;
  lte?: number | Date;
  equal?: primitiveTypes;
  notEqual?: primitiveTypes;
  in?: Array<primitiveTypes>;
  not?: Array<KeyWhereOptionsMemory<M>> | primitiveTypes;
}

export type KeyWhereOptionsMemory<M> = {
  // eslint-disable-next-line no-unused-vars
  [P in keyof Required<M>]?: Date | string | number | Partial<OperatorsOptionsMemory<M>>;
};

export type WhereOptionsMemory<M> =
  | KeyWhereOptionsMemory<M>
  | Omit<OperatorsANDORMemory<M>, "or">
  | Omit<OperatorsANDORMemory<M>, "and">;
