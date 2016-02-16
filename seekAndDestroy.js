/*
You will be provided with an initial array
(the first argument in the destroyer function),
followed by one or more arguments.
Remove all elements from the initial array
that are of the same value as these arguments.
*/

// First solution
// Brute force / proof of concept
function destroyer(arr) {
    var firstArg = arguments[1];
    var secondArg = arguments[2];
    var thirdArg = arguments[3];

    function cleaner(value) {
        return value !== firstArg && value !== secondArg && value !== thirdArg;
    }


    var filtered = arr.filter(cleaner);
    return filtered;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);


// Second solution
// More elegant
function destroyer(arr) {

    var arg = arguments;

    return arr.filter(function(value) {

        for (var i = 1; i < arg.length; i++) {
            if (value == arg[i])
                return false;

        }

        return true;

    });

}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);


// Third solution
function destroyer(arr) {

  var elemToDestroy = [];
  for(var i = 1; i < arguments.length; i++){
    elemToDestroy.push(arguments[i]);
  }

  var survived = arguments[0].filter(function(element, index){
    var toReturn = true;

    for(var i = 0; i < elemToDestroy.length; i++){
      if (element === elemToDestroy[i]){
        toReturn = false;
      }
    }
    return toReturn;

  });
  return survived;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// Fourth solution
function destroyer(arr) {
    // Get full array values
    var args = Array.prototype.slice.call(arguments);

    args.splice(0,1);

    var placeHolder = [];

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < args.length; j++) {
            if (arr[i] === args[j]) {
                delete arr[i];
            }
        }
    }
    placeHolder = arr.filter(removeFalseVar);
    return placeHolder;
}
function removeFalseVar(value) {
    return Boolean(value);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
