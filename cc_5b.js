//name, hourlyrate, hoursworked
let employees = [
    {name: "Nichole Lindsay", hourlyRate: 15, hoursWorked: 38},
    {name: "Mackenzie Ricer", hourlyRate: 17, hoursWorked: 46},
    {name: "Cassandra Jones", hourlyRate: 15, hoursWorked: 55},
    {name: "Luke Skywalker", hourlyRate: 20, hoursWorked: 47}
]

function calculateBasePay(rate, hours) {
    let normalHours = Math.min(hours,40)
    return normalHours * rate
}

function calculateOvertimePay(rate, hours) {
    if (hours > 40) {
        let overtimeHours = hours - 40
        return overtimeHours * (rate * 1.5)
    } else {
        return 0}
}

function calculateTaxes (grossPay) {
    return grossPay * 0.15
}

function processPayroll (employee) {
    let basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked)
    let overtimePay = calculateOvertimePay (employee.hourlyRate, employee.hoursWorked)
    let grossPay = basePay + overtimePay
    let taxes = calculateTaxes(grossPay)
    let netPay = grossPay - taxes

    return { 
        name: employee.name, 
        basePay: basePay,
        overtimePay: overtimePay,
        grossPay: grossPay,
        netPay: netPay
    }
}

for (let employeePayRoll of employees) {
    console.log(processPayroll(employeePayRoll));
}