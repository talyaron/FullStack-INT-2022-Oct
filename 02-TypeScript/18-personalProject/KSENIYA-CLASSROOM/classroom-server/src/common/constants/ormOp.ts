// Sequelize
import { Op } from "sequelize";

export const operatorsORM = {
  in: Op.in,
  or: Op.or,
  gt: Op.gt,
  lt: Op.lt,
  lte: Op.lte,
  not: Op.not,
  gte: Op.gte,
  and: Op.and,
  equal: Op.eq,
  like: Op.like,
  notEqual: Op.ne
};
