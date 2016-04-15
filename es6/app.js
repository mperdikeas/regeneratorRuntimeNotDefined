    'use strict';
    
    require('babel-polyfill');

console.log(`
See:
    
    http://stackoverflow.com/a/36628148/274677

... for a solution to the problem talked about in the comments section of this file:

`);
    
    /* 
        This is working only in the following situations:
    
        [1] .babelrc removed or hidden and scope A present
        [2] .babelrc removed or hidden and scope A removed
        [3] .babelrc present           and scope A present
    
    
        It results in "ReferenceError: regeneratorRuntime is not defined" in the following
        situations:
    
        [4] .babelrc present           and scope A removed
    */
    
    
    
    { // scope A (if you remove it you observe different behavior when .babelrc is present)
    
        function *simplestIterator() {
            yield 42;
        }
    
        for (let v of simplestIterator()) {
            console.log(v);
        }
    
    }
