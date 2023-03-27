import { OperatorsOptionsMemory } from "../interfaces";
export declare const isNumber: (value: unknown) => value is number;
export declare const isString: (value: unknown) => value is string;
export declare const isDate: (value: unknown) => value is Date;
export declare const isObject: (value: unknown) => value is object;
export declare function isOperatorsOptionsMemory<M>(obj: unknown): obj is OperatorsOptionsMemory<M>;
