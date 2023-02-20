// Interfaces
import { OperatorsOptionsMemory } from "../interfaces";

export const isNumber = (value: unknown): value is number =>
  typeof value === "number" || value instanceof Number;

export const isString = (value: unknown): value is string =>
  typeof value === "string" || value instanceof String;

export const isDate = (value: unknown): value is Date => value instanceof Date;

export const isObject = (value: unknown): value is object =>
  value === null ? false : typeof value === "function" || typeof value === "object";

export function isOperatorsOptionsMemory<M>(obj: unknown): obj is OperatorsOptionsMemory<M> {
  return typeof obj === "object" && !(obj instanceof Date);
}
