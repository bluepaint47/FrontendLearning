import * as Clac from "./clac.js";
import sayMyName from "./whoami.js"


console.log('The Sum is', Clac.sum(2,3));
console.log('The Sub is', Clac.sub(5,3));

console.log(" My name is ", sayMyName());

function introduce(strings, arg0, arg1){

    console.log(" strings: ", strings);
    console.log(" arg0: ", arg0);
    console.log(" arg1: ", arg1);

    return 'introduce...';
}

const name = "Xyx";
const color = "white";


const str =  introduce`This is my name ${name} and my favorite color is ${color}`

console.log(str);





const employee = {
    id: 7,
    name: 'James',
    dept: {
      id: 'D001',
      name: 'Spy',
      address: {
        street: '30 Wellington Square',
        city: 'Chelsea'  
      }
    }  
  };

  const street2 = employee.dept.address.street;
  console.log("street using .:", street2);


  const { dept: {address:{street:rvalue}}} = employee;
  console.log("street using destructor:", rvalue);
