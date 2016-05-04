/* LESSON 1 */ /* ======================================================================================================
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
console.log("The sum3 is: " + total3);				//The sum is: 0
//----------------------------------------------------------------------------------------------------------------------
*/

/* LESSON 2 */ /* ======================================================================================================
*/
var votes = [					//representation of opinion poll "which framework is the best"
  "angular",
  "angular",
  "react",
  "react",
  "react",
  "angular",
  "ember",
  "react",
  "vanilla"
];

var initialValue = {};			//initialValue to reduce the array properly

var reducer = function(tally, vote) {
	if (!tally[vote]) tally[vote] = 1;		//if there isn't field called for example 'angular' create it 
	else tally[vote]++;						//otherwise just increment it

	return tally;							//returns value of the accumulator
};

var result = votes.reduce(reducer, initialValue);

console.log(result);
//----------------------------------------------------------------------------------------------------------------------