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
*/

/* LESSON 5 */ /* ======================================================================================================
var data = [1, 2, 3, 4];
function reducer(accumulator, value) {
	return accumulator + value;
};
var initialValue = 0;
var sum = data.reduce(reducer, initialValue);
console.log(sum);

var sum2 = data.reduce(reducer);				//it's going to work, when we don't pass initialValue the first accumulator
console.log(sum2);								//value is the first element of the Array 
//----------------------------------------------------------------------------------------------------------------------
var data2 = ["vote1", "vote2", "vote1", "vote3"];
function reducer2(accumulator, value) {
	if (accumulator[value]) accumulator[value]++;
	else accumulator[value] = 1;

	return accumulator;							//we need to remember about that accumulator need to be returned
												//otherwise we get an error
};
var tally = data2.reduce(reducer2, {});
console.log(tally);

var tally2 = data2.reduce(reducer2);			//it doesn't work properly - as an initialValue the function gets the first
console.log(tally2);							//value (string vote1), which has no fields so the condition in the reducer2
												//is always false (and the returned accumulator has always value of the first
												//item in the Array)
//----------------------------------------------------------------------------------------------------------------------
*/

/* LESSON 6 */ /* ======================================================================================================
var data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];			//Array with 3 nasted Arrays with 3 items in each
var flattenedData = data.reduce(function(acc, value) {	//reduce method returns 'flattenedArray' i.e. 1 Array with 9 items
	return acc.concat(value);							//concat method adds only each item in the nasted array separately
}, []);
console.log(flattenedData);
//----------------------------------------------------------------------------------------------------------------------
var input = [											//Array with 3 objects
  { title: "Batman Begins",
    year: 2005,
    cast: [
      "Christian Bale",
      "Michael Caine",
      "Liam Neeson",
      "Katie Holmes",
      "Gary Oldman",
      "Cillian Murphy"
    ]
  },
  { title: "The Dark Knight",
    year: 2008,
    cast: [
      "Christian Bale",
      "Heath Ledger",
      "Aaron Eckhart",
      "Michael Caine",
      "Maggie Gyllenhal",
      "Gary Oldman",
      "Morgan Freeman"
    ]
  },
  { title: "The Dark Knight Rises",
    year: 2012,
    cast: [
      "Christian Bale",
      "Gary Oldman",
      "Tom Hardy",
      "Joseph Gordon-Levitt",
      "Anne Hathaway",
      "Marion Cotillard",
      "Morgan Freeman",
      "Michael Caine"
    ]
  }
];

var stars = input.reduce(function(acc, value) {		//we want to get every actor from that 3 movies only once
//	return acc.concat(value.cast);					//it returns three flattened arrays (and that's why we have for example
													//item "Christian Bale" 3 times)
	value.cast.forEach(function(star) {
		if (acc.indexOf(star) === -1) acc.push(star);	//if there is no item in the array, the indexOf method returns
	});													//value equal to -1

	return acc;
}, []);
console.log(stars);
//----------------------------------------------------------------------------------------------------------------------
var data2 = [1, 2, 3, 4, "5"];

var sum = data2.reduce(function(acc, value, index) {//reduce method reduces data from left (index: 0) to right (index: length - 1)
	console.log(index);
	return acc + value;
}, 0);
console.log(sum);									//we get '105' (10 is the sum of the 1, 2, 3, 4 and then it adds
													//a string to that sum)

var sum2 = data2.reduceRight(function(acc, value, index) {
	console.log(index);
	return acc + value;
}, 0);
console.log(sum2);									//we get '054321' (0 is the initial value, this is string adding)
//----------------------------------------------------------------------------------------------------------------------
*/

/* LESSON 7 */ /* ======================================================================================================
*/
function increment(input) { return input + 1; };
function decrement(input) { return input - 1; };
function double(input) { return input * 2; };
function halve(input) { return input / 2; };

var initial_value = 1;
//TASK: increment value then double it and then decrement that value
var incremented_value = increment(initial_value);
var doubled_value = double(incremented_value);
var final_value = decrement(doubled_value);
console.log(final_value);									//not recommended


function transform(input) { return ((input + 1) * 2) - 1; };

var final_value2 = transform(initial_value);
console.log(final_value2);									//we can do that way, but why if we already have functions
															//to do the same things


var pipeline = [increment, double, decrement];				//pipeline - series of functions into which we set initial
															//			 value and we get some final value
var final_value3 = pipeline.reduce(function(acc, fn) {
	return fn(acc);
}, initial_value);
console.log(final_value3);
//----------------------------------------------------------------------------------------------------------------------