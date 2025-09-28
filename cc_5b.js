//name, hourlyrate, hoursworked
let employees = [
    {name: "Nichole Lindsay", hourlyRate: 15, hoursWorked: 38},
    {name: "Mackenzie Ricer", hourlyRate: 17, hoursWorked: 46},
    {name: "Cassandra Jones", hourlyRate: 15, hoursWorked: 55},
    {name: "Luke Skywalker", hourlyRate: 20, hoursWorked: 47}
]

function calculateBasePay (rate, hours) {
    let regularHours = Math.min(hours, 40);
    let pay = regularHours * rate;
    console.log(`Step 3: Base pay for rate $${rate}/hr and ${hours} hrs = $${pay.toFixed(2)}`);
    return pay;
}