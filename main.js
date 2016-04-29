/* LESSON 1 */ /* ======================================================================================================
*/
var reducer = function(accumulator, item) {			//it runs for each element in the array (for each item), accumulator is
	return accumulator + item;						//the previous value (i.e. for the first time it is the initialValue)
};

var data = [];
var initialValue = 0;
var total = data.reduce(reducer, initialValue);		//reducer always returns the last value of the accumulator
console.log("The sum is: " + total);				//The sum is: 0

var data2 = [];
var initialValue2 = 10;
var total2 = data2.reduce(reducer, initialValue2);
console.log("The sum2 is: " + total2);				//The sum is: 10

var data3 = [1, 3, 4];
var initialValue3 = 0;
var total3 = data3.reduce(reducer, initialValue3);
console.log("The sum3 is: " + total3);				//The sum is: 8
//----------------------------------------------------------------------------------------------------------------------