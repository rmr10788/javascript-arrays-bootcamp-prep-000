var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element);
  return array; 
}

function addElementToBeginningOfArray (array, element) {
  return [element, ...array];
}

function addElementToEndOfArray (array, element) {
  return [...array, element];
}

function destructivelyAddElementToEndOfArray (array, element) {
  array.push(element);
  return array;
}