console.log(arguments);
console.log(require('module').wrappper)

const C = require('./test-module-1')
const calc1 = new C();
console.log(calc1.add(5,3));

//exports   
const {add, multiply} = require('./test-module-2');
console.log(add(1,3));

//caching
require('./test-module-3')();
require('./test-module-3')();
require('./test-module-3')();
