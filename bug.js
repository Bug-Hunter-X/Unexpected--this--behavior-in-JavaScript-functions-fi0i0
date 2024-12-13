function myFunc() {
  console.log(this);
}

myFunc(); // this will likely be undefined in strict mode, or the global object in non-strict mode

const obj = { myMethod: myFunc };

obj.myMethod(); // this will be the object obj

const arr = [1,2,3, myFunc];
arr[3](); // this will be the array arr if not in strict mode, or undefined in strict mode