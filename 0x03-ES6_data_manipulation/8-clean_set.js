export default function cleanSet(set, startString) {
  const str = [];

  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const valueSubStr = value.substring(startString.length);

      if (valueSubStr && valueSubStr !== value) {
        str.push(valueSubStr);
      }
    }
  }
  return str.join('-');
}
