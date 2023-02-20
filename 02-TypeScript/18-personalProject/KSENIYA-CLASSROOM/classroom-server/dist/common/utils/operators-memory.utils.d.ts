import { OperatorsANDORMemory } from "../interfaces";
export declare const Op: {
    or: typeof or;
    and: typeof and;
    gt: (object: object, compare: primitiveTypes, key: string) => boolean;
    lt: (object: object, compare: primitiveTypes, key: string) => boolean;
    like: (object: object, like: primitiveTypes, key: string) => any;
    lte: (object: object, compare: primitiveTypes, key: string) => boolean;
    gte: (object: object, compare: primitiveTypes, key: string) => boolean;
    equal: (object: object, compare: primitiveTypes, key: string) => boolean;
    notEqual: (object: object, compare: primitiveTypes, key: string) => boolean;
    in: (object: object, compare: Array<primitiveTypes>, key: string) => boolean;
};
declare function and<M>(object: object, compare: OperatorsANDORMemory<M>["and"]): boolean;
declare function or<M>(object: object, compare: OperatorsANDORMemory<M>["or"], key?: string): boolean;
export {};
