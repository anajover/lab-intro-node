// const assert = require('assert');
console.log("prueba");

class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    if (this.items.length > 1) {
      this.items.push(item);
      this.items.sort(function (a, b){return a - b});
    } else {
    this.items.push(item);
    }
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
    let suma = 0;
    this.items.forEach((eachElement) => {
      suma += eachElement;
    })
    return suma;
  }

    
  }

  avg() {
    let average = 0;
    this.items.forEach((eachElement) => {
      average += eachElement; })
    if (this.items.length === 0) {
      throw new Error('EmptySortedList')
    } else {
      return average /= this.items.length    
  }    
  }
}

module.exports = SortedList;


