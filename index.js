// Write your solution in this file!
const employee = {
    name: "Sam",
    streetAddress: "11 Broadway"
}

function updateEmployeeWithKeyAndValue(employee, key, value){
let newEmployee = {... employee};
newEmployee (name)= streetAddress;

return newEmployee
}
 function updateEmployeeWithKeyAndValue(){
const updatedEmployee = {employee, key, value}
return updatedEmployee
 }

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]= value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const updatedEmployee={...employee};
    delete updatedEmployee[key];
    return employee
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete updatedEmployee[key];
    return employee
}