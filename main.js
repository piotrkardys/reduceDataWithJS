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
*/

/* LESSON 3 */ /* ======================================================================================================
var data = [1, 2, 3];				//transformation of the array into the array with the same length (mapping)

var doubled = data.reduce(function(acc, value) {
	acc.push(value * 2);
	return acc;
}, []);

var doubleMapped = data.map(function(item) { 
	return item * 2;
});

console.log("My doubled data:\t" + doubled);
console.log("My doubleMapped data:\t" + doubleMapped);
//----------------------------------------------------------------------------------------------------------------------
var data2 = [1, 2, 3, 4, 5, 6];		//transformation of the array into the shorter array (filtering)

var evens = data2.reduce(function(acc, value) {
	if (value % 2 === 0) acc.push(value);
	return acc;
}, []);

var evenFiltered = data2.filter(function(item) {
	return item % 2 === 0;
});

console.log("My evens data2:\t\t" + evens);
console.log("My evenFiltered data2:\t" + evenFiltered);
//----------------------------------------------------------------------------------------------------------------------
var filterMapped = data2.filter(function(item) {
	return item % 2 === 0;
}).map(function(item) {
	return item * 2;
});

console.log("My filterMapped data2:\t" + filterMapped);
//----------------------------------------------------------------------------------------------------------------------
var bigData = [];
for (var i = 0; i < 1000000; i++) {
	bigData[i] = i;
};

console.time('bigData');
var filterMappedBigData = bigData.filter(function(item) {
	return item % 2 === 0;
}).map(function(item) {
	return item * 2;
});
console.timeEnd('bigData');								//bigData: 17.14ms

console.time('bigDataReduce');
var reducedBigData = bigData.reduce(function(acc, value) {
	if (value % 2 === 0) acc.push(value * 2);
	return acc;
}, []);
console.timeEnd('bigDataReduce');						//bigDataReduce: 9.91ms
//----------------------------------------------------------------------------------------------------------------------
*/

/* LESSON 4 */ /* ======================================================================================================
*/
var data = [1, 2, 3, 3, 4, 5, 3, 1];

function reducer(accumulator, value) {
	return accumulator + value;
};

var sum = data.reduce(reducer, 0);
console.log('Sum:\t' + sum);
console.log('Mean:\t' + sum / data.length);


function reducer2(accumulator, value, index, array) {		//index - variable contains which element is calculated at the moment
	var intermediaryValue = accumulator + value;			//array is the array on which we are calling the reduce method

	if (index === array.length - 1) return intermediaryValue / array.length;	//if it is the last item in the array - returns the mean of all elements

	return accumulator + value;													//otherwise returns the sum of the elements
};

var mean = data.reduce(reducer2, 0);
console.log('Mean2:\t' + mean);
//----------------------------------------------------------------------------------------------------------------------