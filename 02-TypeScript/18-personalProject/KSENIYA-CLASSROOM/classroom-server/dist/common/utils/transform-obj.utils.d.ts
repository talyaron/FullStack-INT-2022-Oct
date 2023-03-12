type values = (values: string) => string;
type keys = (key: string) => string | symbol;
export declare function transformObj<T extends object, U extends object>(obj: T, transforms: {
    values?: values;
    keys?: keys;
}): U;
export {};
