//name, hourlyrate, hoursworked
let employees = [
    {name: "Nichole Lindsay", hourlyRate: 15, hoursWorked: 38},
    {name: "Mackenzie Ricer", hourlyRate: 17, hoursWorked: 46},
    {name: "Cassandra Jones", hourlyRate: 15, hoursWorked: 55},
    {name: "Luke Skywalker", hourlyRate: 20, hoursWorked: 47}
];
console.log("Step 2: Employees created:", employees);

function calculateBasePay(rate, hours) {
    let regularHours = Math.min(hours, 40);
    return regularHours * rate;
}


