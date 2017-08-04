// Collections
let myMap = new Map();

myMap.set("item1", "value1");
myMap.set("item2", "value2");
myMap.set("item3", "value3");
myMap.set("item4", "value4");

let myMap2 = new Map();

myMap2.set("item1", 1);
myMap2.set("item2", 2);
myMap2.set("item3", 3);
myMap2.set("item4", 4);

// Functions
function map(fn, col) {
  let newCollection = new Map();

  col.forEach((v, k) => {
    newCollection.set(k, fn(v));
  });

  return newCollection;
}

function reduce(fn, seed, col) {
  let newValue = seed;

  col.forEach(v => {
    newValue = fn(newValue, v);
  });

  return newValue;
}

function filter(pred, col) {
  let newCollection = new Map();

  col.forEach((v, k) => {
    if (pred(v)) {
      newCollection.set(k, v);
    }
  });

  return newCollection;
}

function mapToJson(map) {
  return JSON.stringify([...map]);
}

function jsonToMap(jsonStr) {
  return new Map(JSON.parse(jsonStr));
}

// Test
const newV = map(v => {
  return v.toUpperCase();
}, myMap);

map(console.log, newV);

const newV2 = reduce(add, 0, myMap2);

console.log("v2 ", newV2);

const newV3 = filter(v => v > 2, myMap2);

console.log("filter");
map(console.log, newV3);

// utils
function add(a, b) {
  return a + b;
}
