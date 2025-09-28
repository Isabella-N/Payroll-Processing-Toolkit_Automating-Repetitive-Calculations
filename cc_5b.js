//name, hourlyrate, hoursworked
let employees = [
    {name: "Nichole Lindsay", hourlyRate: 15, hoursWorked: 38},
    {name: "Mackenzie Ricer", hourlyRate: 17, hoursWorked: 46},
    {name: "Cassandra Jones", hourlyRate: 15, hoursWorked: 55},
    {name: "Luke Skywalker", hourlyRate: 20, hoursWorked: 47}
];

function calculateBasePay(rate, hours) {
    if (employees.hoursWorked > 40) {
        let hours = employees.hoursWorked - 40
    } else {
        let hours = 0 }
    return employees.hourlyRate * (employees.hoursWorked - hours)
};

function calculateOvertimePay(rate, hours) {
    if (hoursWorked > 40) {
        let hours = hoursWorked - 40
    } else {
        let hours = 0
    }
    return (hourlyRate * 1.5) * hours
}


