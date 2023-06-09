/**
 * Recursively transform key/values in object, including array values
 *
 * Also can act as a basic deep clone method
 * @param {Object} obj - Object to transform
 * @param {Object} [transforms={}] - Object containing transformation functions
 * @param {Function} [transform.keys] - Function for transforming keys from 'obj'
 * @param {Function} [transform.values] - Function for transforming values from 'obj'
 * @returns {Object} Transformed object
 *
 * @example
 * transformObj({
 *     apple: 'Green',
 *     orange: 'Orange',
 *     cherry: {
 *         color: 'Red'
 *     }
 * }, {
 *     keys: (key, level) => {
 *         return level === 0 ? `fruit_${key}` : key;
 *     },
 *     values: (value) => {
 *         return value.toUpperCase();
 *     }
 * }); // { fruit_apple: 'GREEN', fruit_orange: 'ORANGE', fruit_cherry: { fruit_color: 'RED' } }
 */

type values = (values: string) => string;
type keys = (key: string) => string | symbol;

export function transformObj<T extends object, U extends object>(
  obj: T,
  transforms: { values?: values; keys?: keys }
): U {
  if (typeof obj !== "object" || obj === null) {
    // nothing we can do
    return;
  }

  function convertValue(value) {
    if (Array.isArray(value)) {
      return value.map(convertValue);
    } else if (typeof value === "object") {
      return transformObj(value, transforms);
    } else if ("values" in transforms) {
      // transform value
      return transforms.values(value);
    } else {
      return value;
    }
  }

  return Object.keys(obj).reduce((result, key) => {
    const value = obj[key];
    let newKey: string | symbol = key;

    if ("keys" in transforms) {
      // transform key
      newKey = transforms.keys(key);
    }

    result[newKey] = convertValue(value);

    return result;
  }, {} as U);
}
