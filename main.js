Map.prototype.deleteMany = function (...keys) {
    keys.forEach(key => this.delete(key));
  };
  
  let obj = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3],
    ['d', 4]
  ]);
  obj.deleteMany('a', 'c');
  console.log(Object.fromEntries(obj)); 

  
// 2
function mapSum(obj) {
    let sum = 0;
    for (let value of obj.values()) {
      sum += value;
    }
    return sum;
  }
  
  let obj = new Map([
    ['a', 2],
    ['b', 5],
    ['c', 3]
  ]);
  console.log(mapSum(obj)); // Output: 10
  

// 3
function getMapIntersection(map1, map2) {
    const intersection = new Map();
    for (let [key, value] of map1) {
      if (map2.has(key)) {
        intersection.set(key, map2.get(key));
      }
    }
    return intersection;
  }
  
let map1 = new Map([
    ['apple', 1],
    ['banana', 2],
    ['orange', 3]
  ]);
  let map2 = new Map([
    ['apple', 4],
    ['orange', 5],
    ['grape', 6]
  ]);
  console.log(getMapIntersection(map1, map2));



// 4
function getMapIntersection(map1, map2) {
    const intersection = new Map();
    for (let [key, value] of map1) {
      if (map2.has(key)) {
        intersection.set(key, map2.get(key));
      }
    }
    return intersection;
  }
  
  let map1 = new Map([
    ['apple', 1],
    ['banana', 2],
    ['orange', 3]
  ]);
  let map2 = new Map([
    ['apple', 4],
    ['orange', 5],
    ['grape', 6]
  ]);
  console.log(getMapIntersection(map1, map2));
  
  

// 5
function setUnion(set1, set2) {
    return new Set([...set1, ...set2]);
  }

  
// 6
function setIntersection(set1, set2) {
    return new Set([...set1].filter(value => set2.has(value)));
  }

  
// 7
function checkSetSubset(set1, set2) {
    for (let value of set1) {
      if (!set2.has(value)) {
        return false;
      }
    }
    return true;
  }

  
// 8
function removeDuplicates(arr) {
    return [...new Set(arr)];
  }

  
// 9
function mergeArr(arr1, arr2) {
    return [...arr1, ...arr2];
  }

  
// 10
function concatArrays(...arrays) {
    return [].concat(...arrays);
  }
  
