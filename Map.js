// JavaScript Map Methods

// Creating a new Map
const myMap = new Map();

// 1. set(key, value): Adds a new key-value pair to the Map
myMap.set('name', 'John');
myMap.set(1, 'number one');
myMap.set(true, 'boolean');

// 2. get(key): Returns the value associated with the specified key
console.log(myMap.get('name')); // Output: John

// 3. has(key): Returns true if the key exists in the Map
console.log(myMap.has('age')); // Output: false

// 4. delete(key): Removes the key-value pair with the specified key
myMap.delete(1);

// 5. clear(): Removes all key-value pairs from the Map
// myMap.clear();

// 6. size: Returns the number of key-value pairs in the Map
console.log(myMap.size); // Output: 2

// 7. keys(): Returns an iterator of keys in the Map
for (let key of myMap.keys()) {
  console.log(key);
}

// 8. values(): Returns an iterator of values in the Map
for (let value of myMap.values()) {
  console.log(value);
}

// 9. entries(): Returns an iterator of key-value pairs
for (let entry of myMap.entries()) {
  console.log(entry[0], entry[1]);
}

// 10. forEach(): Executes a provided function once for each key-value pair
myMap.forEach((value, key) => {
  console.log(key, value);
});

// 11. Creating a Map from an array of key-value pairs
const kvArray = [['key1', 'value1'], ['key2', 'value2']];
const myMap2 = new Map(kvArray);

// 12. Converting a Map to an array
const mapArray = Array.from(myMap);

// 13. Merging two Maps
const map1 = new Map([['a', 1], ['b', 2]]);
const map2 = new Map([['c', 3], ['d', 4]]);
const mergedMap = new Map([...map1, ...map2]);

// 14. Checking if a Map is empty
const isEmpty = myMap.size === 0;

// 15. Getting the first key-value pair
const firstEntry = myMap.entries().next().value;

// 16. Checking if all keys satisfy a condition
const allKeysAreStrings = Array.from(myMap.keys()).every(key => typeof key === 'string');

// 17. Filtering a Map
const filteredMap = new Map([...myMap].filter(([key, value]) => typeof value === 'string'));

// 18. Transforming Map values
const transformedMap = new Map([...myMap].map(([key, value]) => [key, value.toUpperCase()]));

// 19. Finding a key by value
const findKeyByValue = (map, searchValue) => {
  for (let [key, value] of map.entries()) {
    if (value === searchValue) return key;
  }
};

// 20. Reversing a Map (swapping keys and values)
const reversedMap = new Map([...myMap].map(([key, value]) => [value, key]));
