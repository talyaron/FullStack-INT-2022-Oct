// Interfaces
import {
  Keys,
  JoinOptions,
  FindOptions,
  OrderOptions,
  WhereOptions,
  GroupOptions,
  FunctionOptions,
  RelationOptions,
  RelationObjectOptions,
  FindAttributesOptions,
  FindArrayAttributesOptions
} from "../interfaces";

// Utils
import { transformObj, isObject } from "../utils";

// Constants
import { operatorsORM } from "../constants";

// Sequelize
import {
  Order,
  OrderItem,
  Includeable,
  ProjectionAlias,
  fn as SequelizeFn,
  col as SequelizeCol,
  FindAttributeOptions,
  FindOptions as SequelizeFindOptions,
  GroupOption as SequelizeGroupOptions,
  WhereOptions as SequelizeWhereOptions
  //   UpdateOptions,
  //   CreateOptions,
  //   DestroyOptions,
  //   FindOrCreateOptions
} from "sequelize";
import { Model } from "sequelize-typescript";

function serializerFunctionOptions({ fn, column }: FunctionOptions) {
  return SequelizeFn(fn, SequelizeCol(column));
}

function serializerFindArrayAttributesOptions(
  attributes: FindArrayAttributesOptions
): Array<ProjectionAlias | string> {
  if (!Array.isArray(attributes)) {
    // nothing we can do
    return;
  }

  return attributes.map(attribute => {
    if (typeof attribute === "string") {
      return attribute;
    } else if ("fn" in attribute) {
      return [serializerFunctionOptions(attribute), attribute.alias];
    }

    return [attribute.name, attribute.alias];
  });
}

function serializerFindAttributesOptions<M>(attributes: FindAttributesOptions<M>): FindAttributeOptions {
  if (typeof attributes !== "object" || attributes === null) {
    // nothing we can do
    return;
  }

  if (Array.isArray(attributes)) {
    return serializerFindArrayAttributesOptions(attributes);
  } else if ("include" in attributes) {
    return { include: serializerFindArrayAttributesOptions(attributes.include) };
  } else if ("exclude" in attributes) {
    return { exclude: attributes.exclude as Keys<M> };
  }
}

function serializerOrderOptions(orderOptions: OrderOptions): Order {
  if (!Array.isArray(orderOptions)) {
    // nothing we can do
    return;
  }

  return orderOptions.map<OrderItem>(({ by, order }) => [
    typeof by === "string" ? by : serializerFunctionOptions(by),
    order
  ]);
}

function serializerJoinOptions(joinOptions: JoinOptions) {
  switch (joinOptions) {
    case "INNER": {
      return { required: true };
    }
    case "RIGHT": {
      return { required: false, right: true };
    }
    case "LEFT":
    default: {
      return { required: false, right: false };
    }
  }
}

export function serializerRelationOptions<M extends Model<M>>(relations: RelationOptions<M>): Includeable[] {
  if (!relations) {
    // nothing we can do
    return [];
  }

  if (Array.isArray(relations)) {
    return relations.map(serializerRelationObjectOptions);
  }

  return [serializerRelationObjectOptions(relations)];
}

function serializerRelationObjectOptions<M extends Model<M>>(
  relationObject: RelationObjectOptions<M>
): Includeable {
  if (!isObject(relationObject)) {
    // nothing we can do
    return;
  }

  const { on, join, order, where, relations, ...relationshipsOptions } = relationObject;
  return {
    ...relationshipsOptions,
    ...serializerJoinOptions(join),
    on: serializerWhereOptions<M>(on),
    order: serializerOrderOptions(order),
    where: serializerWhereOptions<M>(where),
    include: serializerRelationOptions(relations)
  };
}

export function serializerGroupOptions(groupOptions: GroupOptions): SequelizeGroupOptions {
  if (!Array.isArray(groupOptions)) {
    // nothing we can do
    return;
  }

  return groupOptions.map(groupOption => {
    if (typeof groupOption === "string") {
      return groupOption;
    }

    return serializerFunctionOptions(groupOption);
  });
}

export function serializerWhereOptions<T>(whereOptions: WhereOptions<T>): SequelizeWhereOptions<T> {
  const keys = (key: string): symbol | string => operatorsORM[key] || key;

  return transformObj(whereOptions, { keys });
}

export function serializerFindOptions<M extends Model<M>>({
  order,
  where,
  group,
  attributes,
  ...findOptions
}: FindOptions<M>): SequelizeFindOptions {
  return {
    ...findOptions,
    group: serializerGroupOptions(group),
    order: serializerOrderOptions(order),
    where: serializerWhereOptions<M>(where),
    attributes: serializerFindAttributesOptions<M>(attributes)
  };
}
