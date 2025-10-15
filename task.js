'use strict';

function solveEquation(a, b, c) {
let discriminant = b ** 2 - 4 * a * c;
let roots = [];

if (discriminant < 0) {
return roots;
}

if (discriminant === 0) {
let root = -b / (2 * a);
roots.push(root);
return roots;
}

let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
roots.push(root1, root2);

return roots;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
let percentNumber = parseFloat(percent);
let contributionNumber = parseFloat(contribution);
let amountNumber = parseFloat(amount);
let countMonthsNumber = parseFloat(countMonths);

if (isNaN(percentNumber) || isNaN(contributionNumber) || isNaN(amountNumber) || isNaN(countMonthsNumber)) {
return false;
}

let monthlyPercent = percentNumber / 100 / 12;
let loanBody = amountNumber - contributionNumber;

if (loanBody <= 0) {
return 0;
}

let monthlyPayment = loanBody * (monthlyPercent + monthlyPercent / ((1 + monthlyPercent) ** countMonthsNumber - 1));
let totalAmount = monthlyPayment * countMonthsNumber;

return Math.round(totalAmount * 100) / 100;
}