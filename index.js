// const assert = require('assert');
console.log("prueba");

class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function (a, b){return a - b});
  }

  get(pos) {
    if (this.items[pos] === undefined) {
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList')
    } else {
     return Math.max(...this.items);
    }
    
  }

  min() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList')
    } else {
     return Math.min(...this.items);
    }
  }

  sum() {
    if (this.items.length === 0) {
      return 0;
    } else {
    this.items.reduce((acc, elem) => {
      return acc += elem;
    }, 0);
    }
    return acc;
  }

  avg() {
    let average = 0;
    this.items.forEach((eachElement) => {
      average += eachElement;
    })
    return average /= this.items.length
  }
}

module.exports = SortedList;


