//Step 2 = Employee Arrary
let employees = [
    {name: "Nichole Lindsay", hourlyRate: 15, hoursWorked: 38},
    {name: "Mackenzie Ricer", hourlyRate: 17, hoursWorked: 46},
    {name: "Cassandra Jones", hourlyRate: 15, hoursWorked: 55},
    {name: "Luke Skywalker", hourlyRate: 20, hoursWorked: 47}
]

//Step 3 = A function to calculate pay up to 40 hours
function calculateBasePay(rate, hours) {
    let normalHours = Math.min(hours,40) //Takes hours and limits them to 40
    return normalHours * rate //calculates the pay per employee
}

//Step 4 = A function to calculate overtime pay past 40 hours
function calculateOvertimePay(rate, hours) {
    if (hours > 40) {
        let overtimeHours = hours - 40 //calculates the number of overtime hours
        return overtimeHours * (rate * 1.5)//1.5 = the amount of overtime
    } else {
        return 0}//If the hours dont go over 40 hours than its 0 for overtime
}

//Step 5 = A funtion to deduct 15% of taxes from total pay
function calculateTaxes (grossPay) {
    return grossPay * 0.15
}

//Step 6 = A function to list out all of the calculations and display them
function processPayroll (employee) {
    let basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked)//Pay for normal hours
    let overtimePay = calculateOvertimePay (employee.hourlyRate, employee.hoursWorked)//Pay for overtime hours
    let grossPay = basePay + overtimePay//Pay for both normal and overtime hours
    let taxes = calculateTaxes(grossPay)//Taxes of pay
    let netPay = grossPay - taxes//Total pay with taxes out

    return { //What is going to be displayed in the console.log
        name: employee.name, 
        basePay: basePay,
        overtimePay: overtimePay,
        grossPay: grossPay,
        netPay: netPay
    }
}

//Step 7 = Loops through the employee array with payroll calculations
for (let employeePayRoll of employees) {
    console.log(processPayroll(employeePayRoll));
}