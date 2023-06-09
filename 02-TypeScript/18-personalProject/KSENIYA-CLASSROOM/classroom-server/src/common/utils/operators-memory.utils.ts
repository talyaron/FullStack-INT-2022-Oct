// Utils
import { isDate, isObject } from ".";

// Interfaces
import { OperatorsANDORMemory } from "../interfaces";

// Serializers
import { serializerKeyWhereOptionsMemory, serializerWhereOptionsMemory } from "../serializers";

export const Op = {
  or: or,
  and: and,
  gt: (object: object, compare: primitiveTypes, key: string) => object[key] > compare,
  lt: (object: object, compare: primitiveTypes, key: string) => object[key] < compare,
  like: (object: object, like: primitiveTypes, key: string) => object[key].match(like),
  lte: (object: object, compare: primitiveTypes, key: string) => object[key] <= compare,
  gte: (object: object, compare: primitiveTypes, key: string) => object[key] >= compare,
  equal: (object: object, compare: primitiveTypes, key: string) => object[key] === compare,
  notEqual: (object: object, compare: primitiveTypes, key: string) => object[key] !== compare,
  in: (object: object, compare: Array<primitiveTypes>, key: string) => compare.includes(object[key])
};

function and<M>(object: object, compare: OperatorsANDORMemory<M>["and"]) {
  return compare.map(objectWhere => serializerKeyWhereOptionsMemory(object, objectWhere)).every(Boolean);
}

function or<M>(object: object, compare: OperatorsANDORMemory<M>["or"], key?: string) {
  if (Array.isArray(compare)) {
    return compare
      .map(objectWhere => {
        if (isObject(objectWhere) && !isDate(objectWhere)) {
          return serializerWhereOptionsMemory(object, objectWhere);
        }

        return Op.equal(object, objectWhere, key);
      })
      .some(Boolean);
  }
}
