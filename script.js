let arr = [
  { id: 1, name: 'john', age: 18, profession: 'developer' },
  { id: 2, name: 'jack', age: 20, profession: 'developer' },
  { id: 3, name: 'karen', age: 19, profession: 'admin' },
];

// Don't worry about consoling these functions, they are already being called on the button clicks.
// Please don't change anything in the index.html file.

function PrintDeveloper() {
  //Write your code here , just console.log
  for(let i of arr){
    if(i.profession === 'developer')
    console.log(i)
  }

}

function addData() {
  //Write your code here, just console.log
  const data = { id: 4, name: "shubham", age: 24, profession: "intern" };
  arr.push(data);
  consoleArr();

}

function removeAdmin() {
  //Write your code here, just console.log
  arr = arr.filter((emp) => emp.profession !== "admin");
  consoleArr();

}

function concatenateArray() {
  //Write your code here, just console.log
  const temp = [
    { id: 5, name: "ram", age: 25, profession: "admin" },
    { id: 6, name: "paul", age: 26, profession: "developer" },
    { id: 7, name: "shivani", age: 23, profession: "developer" },
  ];
  arr = arr.concat(temp);
  consoleArr();

}

// Here is an example of how functions work,
// basically a function is a block of code which can directly access your 'arr' variable since arr is global.
// If I have a function called consoleArr(), that can directly access arr like this to console it.

function consoleArr() {
  console.log('Consoling Array Variable', arr);
  // Over here I can directly access the variable.
}

