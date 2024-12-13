function myFunc() {
  console.log(this);
}

// Using bind to explicitly set the value of 'this'
const boundMyFunc = myFunc.bind({value: 'Bound Object'});
boundMyFunc(); // this will be {value: 'Bound Object'}

const obj = { myMethod: myFunc };
obj.myMethod(); // this will be the object obj

const arr = [1, 2, 3, myFunc];

// Using call to explicitly set the value of 'this'
arr[3].call({value: 'Array Context'}); // this will be {value: 'Array Context'}

// Using apply to explicitly set the value of 'this'
arr[3].apply({value: 'Apply Context'}); // this will be {value: 'Apply Context'}