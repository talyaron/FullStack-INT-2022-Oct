// Constants
import { Op } from "../utils";

// Utils
import { isOperatorsOptionsMemory } from "../utils";

// Interfaces
import { OperatorsOptionsMemory, KeyWhereOptionsMemory, WhereOptionsMemory } from "../interfaces";

export function serializerKeyWhereOptionsMemory<M>(object: object, objectWhere: KeyWhereOptionsMemory<M>) {
  return Object.keys(objectWhere)
    .map(keyWhere => {
      const compareWhere = objectWhere[keyWhere];
      if (isOperatorsOptionsMemory(compareWhere)) {
        return (Object.keys(compareWhere) as Array<keyof OperatorsOptionsMemory<M>>)
          .map((operators): boolean => {
            return Op[operators](object, compareWhere[operators], keyWhere);
          })
          .every(Boolean);
      }

      return Op.equal(object, compareWhere, keyWhere);
    })
    .every(Boolean);
}

export function serializerWhereOptionsMemory<M>(object: object, where: WhereOptionsMemory<M>): boolean {
  if ("and" in where) {
    return Op.and<M>(object, where.and);
  }

  if ("or" in where) {
    return Op.or<M>(object, where.or);
  }

  return serializerKeyWhereOptionsMemory(object, where);
}
