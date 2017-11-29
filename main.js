var transactions = [
  {
    type: 'sale',
    paymentMethod: 'cash',
    customer: 'Isaac Asimov',
    items: [
      { name: 'Byte', price: 1.00 },
      { name: 'Bit', price: 0.125 }
    ]
  },
  {
    type: 'sale',
    paymentMethod: 'credit',
    customer: 'CJ Cherryh',
    items: [
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'credit',
    vendor: 'Dick\'s Doodads',
    items: [
      { name: 'XL Doodad', price: -3.00 },
      { name: 'XS Doodad', price: -0.50 }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'cash',
    vendor: 'Gibson Gadgets',
    items: [
      { name: 'Basic Gadget', price: -2.00 },
      { name: 'Advanced Gadget', price: -3.50  }
    ]
  },
  {
    type: 'sale',
    paymentMethod: 'credit',
    customer: 'Frederik Pohl',
    items: [
      { name: 'Byte', price: 1.00 },
      { name: 'Byte', price: 1.00 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'cash',
    vendor: 'Clarke Computing',
    items: [
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 }
    ]
  },
  {
    type: 'sale',
    paymentMethod: 'credit',
    customer: 'Neal Stephenson',
    items: [
      { name: 'kilobyte', price: 1024.00 }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'credit',
    vendor: 'Gibson Gadgets',
    items: [
      { name: 'Advanced Gadget', price: -3.50  },
      { name: 'Advanced Gadget', price: -3.50  },
      { name: 'Advanced Gadget', price: -3.50  },
      { name: 'Advanced Gadget', price: -3.50  }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'credit',
    vendor: 'Dick\'s Doodads',
    items: [
      { name: 'XL Doodad', price: -3.00 },
      { name: 'XL Doodad', price: -3.00 },
      { name: 'XL Doodad', price: -3.00 }
    ]
  },
  {
    type: 'sale',
    paymentMethod: 'cash',
    customer: 'Isaac Asimov',
    items: [
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
    ]
  }
];


// --------------------------------------------------
// EXAMPLE QUESTION
// --------------------------------------------------
/*
  Calculate the total number of transactions.
*/
var totalTransactions = transactions.length;

console.log( 'The total number of transactions is:', totalTransactions );


// --------------------------------------------------
// QUESTION 01
// --------------------------------------------------
/*
  Calculate the total number of 'sales'.

  HINT(S):
  - Not all transactions are 'sales'.

*/

function sales() {

    var counter = 0;

    for (var i = 0; i < totalTransactions; i++) {
      if (transactions[i]['type'] === 'sale') {
        counter +=1;
    }
  }
    return counter;

}


// var numSales = transactionSales.length;

var transactionSales = transactions.filter(function(transaction) {
  return (transaction.type === 'sale')
});

function typeSale(array) {
  return array.type === 'sale';
}

var numSales = transactions.filter(typeSale).length

//why does this way work? when i assign the fuction directly, i dont get the return value but the entire function itself




/*
  Hey, welcome to the first question!

  Here's a breakdown of the question, and some pointers on how to get started!
    - A variable has been declared a few lines above (`numSales`).
    - Just below, the contents of the `numSales` variable are logged to the console.
    - Your job is to assign the variable to the correct value (in this case: the total number of sales) *BEFORE* it is logged out.
    - You can do this by:
      - Adding an `=` sign (we are *assigning* something after all)
      - Starting with the `transactions` variable (see the example question);
      - Adding one or more methods to transform/extract the value we're looking for.
      - If your solution is correct, `numSales` should be equal to 5.

  You can solve the remaining questions in the same way!

  P.S.
  The breakdown above takes up a lot of space, feel free to move it to the top or bottom of the file!
*/

console.log( 'The total number of sales is:', numSales );


// --------------------------------------------------
// QUESTION 02
// --------------------------------------------------
/*
  Calculate the total number of 'purchases'.
*/

// function purchases() {
//   var counter = 0;
//   for (var i = 0; i < totalTransactions; i++) {
//     if (transactions[i]['type'] === 'purchase')
//       counter +=1;
//   }
//     return counter;
// }
//
// function typePurchase(array) {
//   return (array.type === 'purchase');
// }
//

// var numPurchases = transactions.filter(typePurchase).length;

var numPurchases = transactions.filter(function(array) {
    return(array.type === 'purchase');
});




console.log( 'The total number of purchases is:', numPurchases.length );


// --------------------------------------------------
// QUESTION 03
// --------------------------------------------------
/*
  Calculate the total number of 'cash' 'sales'.

  HINT(S):
  - Don't forget that 'purchases' can also be made in 'cash'!
*/

//
// function cashSale(array) {
//   return (array.type === 'sale' && array.paymentMethod === 'cash');
// }


var numCashSales = transactions.filter(function(array) {
  return (array.type === 'sale' && array.paymentMethod === 'cash');
}).length;

console.log( 'The total number of cash sales is:', numCashSales );


// --------------------------------------------------
// QUESTION 04
// --------------------------------------------------
/*
  Calculate the total number of 'credit' 'purchases'.

  HINT(S):
  - Make sure to exclude any 'sales' made by 'credit'!
*/


  // function creditPurchase(array) {
  //   return (array.type === 'purchase' && array.paymentMethod === 'credit')
  // }

var numCreditPurchases = transactions.filter(function(array) {
  return (array.type === 'purchase' && array.paymentMethod === 'credit')
}).length;

console.log( 'The total number of credit purchases is:', numCreditPurchases );


// --------------------------------------------------
// QUESTION 05
// --------------------------------------------------
/*
  Create an array that includes all of vendors which appear in the transactions data set.
  eg. `[ 'vendor one', 'vendor two', ... ]

  HINT(S):
  - Not all transactions have a 'vendor'!
  - The assembled array should be made up of strings, not full `transaction` objects.
  - This array is allowed to contain duplicate values.
*/

  var purchases = transactions.filter(function(array) {
    return (array.type === 'purchase');
  })

  var uniqueVendors = purchases.map(function(array) {
        return array.vendor;

    });

  //
  // for (var i = 0; i < transactions.length; i++) {
  //   if (transactions[i]['vendor'])
  //     vendorsArray.push(transactions[i]['vendor']);
  // }
  //
  // function findVendor(array) {
  //   return array.vendor;
  // }
  // var tryOut = transactions.filter(findVendor) {
  //
  // }



  // function findVendor(array) {
  //   return array.vendor
  // }
  //
  //
  // vendorsArray = [];
  //
  // function vendors(array) {
  //   for (var i = 0; i < array.length; i++) {
  //     if (array.vendor !== undefined)
  //       vendorsArray.push(array.vendor);
  //       console.log(array.vendor);
  //   }
  //
  // }


  //this will give me an array of objects that have vendors
  //now i have to take this array, and extract the vendors from each one of them





  // function findVendor(array) {
  //   for (var i =0; i < array.length; i++) {
  //     console.log(array[i].vendor);
  //   }
  // }


console.log( 'The unique vendors are:', uniqueVendors );


// --------------------------------------------------
// QUESTION 06
// --------------------------------------------------
/*
  Create an array that includes all of *unique* customers which appear in the transactions data set.
  eg. `[ 'customer one', 'customer two', ... ]

  HINT(S):
  - Not all transactions have a 'customer'!
  - The assembled array should be made up of strings, not full `transaction` objects.
  - Make sure that the resulting array *does not* include any duplicates.
*/

var customers = transactions.filter(function(array) {

  return (array.type === 'sale');

});

var uniqueCustomers = customers.map(function(array) {
  return (array.customer);
});

console.log( 'The unique customers are:', uniqueCustomers );


// --------------------------------------------------
// QUESTION 07
// --------------------------------------------------
/*
  Create an array of information about the 'sale' transactions which include 5 or more items.

  The array should resemble the following:
  [ { name: 'Customer Name', numItems: 5 }, ... ]

  HINT(S):
  - There may be more than 1 'sale' that includes 5 or more items.
  - Individual transactions do not have either `name` or `numItems` properties, we'll have to add them to the output.
*/

//look for the sales, so get an array that includes only the sales , we have a customers array
//then loop through the transactions, and count if greater than 5
//if greater than 5, we should return the transactions




var bigSpenders = customers.filter(function(array) {

return (array.items.length >= 5);

});





console.log( 'The "big spenders" are:', bigSpenders );


// --------------------------------------------------
// QUESTION 08
// --------------------------------------------------
/*
  Calculate the sum of all of the 'sales' transactions.

  HINT(S):
  - Transactions don't have 'prices', but their 'items' do!
*/

//map, goes theough the elements of the array and then applies function on them, returning new values
//filters values based on true/falseness of them
//reduce, reduces the input into a number

//i want to filter the array for ll the sales transactions
//i want to iterate through the items array and grab all the sale prices
//and then i want to reduce the array into a sum of all the sales

//how the fucj do u iterate through the array and grab the items??
//do i need to make a separate for loop to itrate through the items array?


var sumSales1 = transactions.filter(function(array){
  return (array.type === 'sale');
});




var sumTheSales = function(array){
  var salesPriceArray = [];

  sumSales1.forEach(function(element){

    for (var i = 0; i < element['items'].length; i++) {
      salesPriceArray.push((element['items'][i]['price']));
      // console.log(salesPriceArray)
    };
  });

  return salesPriceArray.reduce(function(total, current, index){
    // console.log(total+current);
    return total += current;
    // return total;

  });

  // console.log(salesPriceTotal);
  //reduce takes a function and the starting value as the parameter
}


// console.log(lol(sumSales1))



console.log( 'The sum of all sales is: $', sumTheSales(sumSales1));


// --------------------------------------------------
// QUESTION 09
// --------------------------------------------------
/*
  Calculate the sum of *all* 'purchase' transactions.

  HINT(S):
  - Your solution to 'QUESTION 08' is a good starting point!
  - Make sure to include 'price' information from *all* purchases.
*/

//get the purchases from the transactins array

  var onlyPurchases = transactions.filter(function(array){
    return (array.type === 'purchase')
  });

//create array to hold all the purchase prices
  var purchasePriceArray = [];

//iterate through the purchases array and push the prces into the purhase price array


  onlyPurchases.forEach(function(element){

    for (var i = 0; i < element['items'].length; i++) {
      purchasePriceArray.push((element['items'][i]['price']));
    }
  });

console.log(purchasePriceArray);

//sum all the purchases using the reduce method 

var sumPurchases= purchasePriceArray.reduce(function(total, current, index){
  console.log(total+= current);
  // return total += current;
  return total;
})

console.log( 'The sum of all purhcases is:', sumPurchases );


// --------------------------------------------------
// QUESTION 10
// --------------------------------------------------
/*
  Calculate the company's net profit.

  This number will be positive if the sum of the sales is greater than the amount spent on purchases.

  Otherwise, this number will be negative.

  HINT(S):
  - Unlike 'QUESTION 08' and 'QUESTION 09', here we're interested in both 'sale' and 'purchase' transactions.
*/
var netProfit;

console.log( 'The net profit is:', netProfit );


// --------------------------------------------------
// QUESTION 11
// --------------------------------------------------
/*
  Calculate the most items sold as part of single transaction.

  HINTS:
  - The result of this calculation should be a number (not an array, object, or other data type).
*/
var mostItems;

console.log( 'The most items sold in a single transaction is:', mostItems );


// --------------------------------------------------
// QUESTION 12
// --------------------------------------------------
/*
  Calculate the sum of the 'purchase' with the fewest items.
*/
var sumOfSmallestPurchase;

console.log( 'The sum of the smallest purchase is:', sumOfSmallestPurchase );
