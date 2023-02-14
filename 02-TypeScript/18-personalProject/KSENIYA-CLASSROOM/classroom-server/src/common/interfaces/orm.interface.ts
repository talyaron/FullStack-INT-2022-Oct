export interface OperatorsANDOR<M> {
  and: Array<KeyWhereOptions<M>>;
  or: OperatorsOptions<M> | Array<KeyWhereOptions<M> | primitiveTypes | OperatorsANDOR<M>>;
}

export interface OperatorsOptions<M> {
  like?: string;
  gt?: number | Date;
  lt?: number | Date;
  gte?: number | Date;
  lte?: number | Date;
  equal?: primitiveTypes;
  notEqual?: primitiveTypes;
  in?: Array<primitiveTypes>;
  not?: Array<KeyWhereOptions<M>> | primitiveTypes;
}

type KeyWhereOptions<M> = {
  // eslint-disable-next-line no-unused-vars
  [P in keyof Required<M>]?: Date | string | number | boolean | Partial<OperatorsOptions<M>>;
};

export type WhereOptions<M> =
  | KeyWhereOptions<M>
  | Omit<OperatorsANDOR<M>, "or">
  | Omit<OperatorsANDOR<M>, "and">;

export interface FunctionOptions {
  column: string;
  fn: "COUNT" | "SUM" | "MAX" | "MIN" | "AVG" | "UPPER";
}

export type JoinOptions = "LEFT" | "RIGHT" | "INNER";
export type OrderOptions = Array<{ by: string | FunctionOptions; order: "DESC" | "ASC" }>;

export type AliasOptions = { name: string; alias: string };
export type GroupOptions = Array<FunctionOptions | string>;
export type FindObjectAttributesOptions<M> =
  | { include: FindArrayAttributesOptions }
  | { exclude: Readonly<Keys<M>> };
export type FindAttributesOptions<M> = FindArrayAttributesOptions | FindObjectAttributesOptions<M>;
export type FindArrayAttributesOptions = Array<(FunctionOptions & { alias: string }) | string | AliasOptions>;

export interface RelationObjectOptions<M> {
  alias?: string;
  limit?: number;
  join?: JoinOptions;
  order?: OrderOptions;
  on?: WhereOptions<M>;
  model?: Constructor<M>;
  where?: WhereOptions<M>;
  relations?: RelationOptions<M>;
  all?: boolean;
  nested?: boolean;
}

export type RelationOptions<M> = RelationObjectOptions<M> | Array<RelationOptions<M>>;

export interface FindOptions<M> {
  limit?: number;
  order?: OrderOptions;
  group?: GroupOptions;
  where?: WhereOptions<M>;
  attributes?: FindAttributesOptions<M>;
}

export type Keys<M> = Array<Extract<keyof M, string>>;
