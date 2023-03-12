// External libraries
import { Model } from "sequelize";

export function serializeSequelize(value: Model | object) {
  if (value instanceof Model) {
    return value.toJSON();
  }

  return value;
}
