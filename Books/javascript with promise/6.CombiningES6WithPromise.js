/**/ array destructuring
**
var numbers = [10, 20];
var [n1, n2] = numbers; // destructuring

console.log(n1); //10
console.log(n2); // 20
##

/**/ object destructuring 
**
var position = {x: 50, y: 100};
var {x, y} = position; // destructuring
console.log(x); //50
console.log(y); //100
##

/**/ Object destructuring with function parameters
**
//with out destructuring
reder.read().then(function (result) {
    //.... use result.value and result.done
});
##

**
// Using destructuring
reader.read().then(function ({value, done}) {
    // .... use done and value
});
##



/**/ Array destructuring with function  parameters
**
// without destructuring
getAccountStatus().then(function (status) {
    var enabled = status[0];
    var lastLogin = status[1];
    // ....
});
##

**
// with destructuring
getAccountStatus().then( function ([enabled, lastLogin]) {
    // ... use enabled and lastLogin directly
} )
##


/**/ Destructuring the fullfillment value from Promise.all()
**
Promise.all([promise1, promise2]).then(function ([result1, result2]) {
    //..
});
##




/**/
**
##




/**/
**
##




/**/
**
##






/**/
**
##



/**/
**
##




/**/
**
##




/**/
**
##




/**/
**
##




/
/**/
**
##




/**/
**
##




/
/**/
**
##




/**/
**
##



**/
**
##




/**/
**
##




/**/
**
##



**/
**
##




/**/
**
##




/**/ Finite iterations
**
function* match(objects, propname, value){
    var i;
    var obj;
    for (i = 0; i < objects.length; i++) {
        obj = objects[i];
        if (obj[propname] === value)
            yield obj;
    };
}

var animals = [
    { type: 'bird', legs: 2 },
    { type: 'dog', legs: 2 },
    { type: 'cat', legs: 4 },
    { type: 'spider', legs: 8 }
];

var iterator = match(animals, 'legs', 4);
console.log(iterator.next().value.type); // value is animal
console.log(iterator.next().value.type); // value is animal
console.log(iterator.next().value); // value undefined

// console output
// cat
// dog
// undefined
##




/**/ Configuring an iterator with an initial parameter
**
function* counter(increment) {
    var count = 0;
    increment = increment || 1;
    while(true) {
        count = count + increment;
        increment = (yield count) || increment;
    }
}

var evens = counter(2);
console.log('Even numbers');
console.log(evens.next().value); // 2
console.log(evens.next().value); // 4
console.log(evens.next().value); // 6

var fives = counter(5);
console.log(fives.next().value); // 5
// ...

##





