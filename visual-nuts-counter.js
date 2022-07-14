// Defines up to which number the counter will work
const counterEnd = 100;

// Defines the number at which the counter will start
const counterStart = 1;

// Defines the value of the interval between each number
let counterSum = 1;

let dividersAndNames = [
  {
    divider: 3,
    name: 'Visual'
  },
  {
    divider: 5,
    name: 'Nuts'
  },
]

function counter() {
  let counter = counterStart;
  let dataToBePrinted = [];

  while (counter <= counterEnd) {
    let applied = dataToBePrinted.length;
 
    dividersAndNames.forEach((data) => {
      if (divisibleNumber(counter, data.divider)) {
        if (dataToBePrinted.length !== applied) {
          dataToBePrinted[dataToBePrinted.length - 1] 
            = dataToBePrinted[dataToBePrinted.length - 1] 
            + ' ' 
            + data.name;
        } else {
          dataToBePrinted.push(data.name)
        }
    }
    })
    
      if (applied === dataToBePrinted.length) {
        dataToBePrinted.indexOf(counter) === -1
            ? dataToBePrinted.push(counter)
      	    : void 0;
      }
    counter = counter + counterSum;
  }
  
 console.log(dataToBePrinted);

}

function divisibleNumber(dividend, divider) {
  return dividend % divider === 0;
}

console.log(counter());