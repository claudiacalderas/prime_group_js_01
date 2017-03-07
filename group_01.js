var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];
var robert = ["Robert", "26835", "66000", 1];
var mayella = ["Mayella", "89068", "35000", 2];

var employees = [atticus, jem, boo, scout, robert, mayella];

function employeeBonus (employee) {
  var name = employee[0];
  var empNum = employee[1];
  var salary = parseFloat(employee[2]);
  var rating = employee[3];
  var bonusPercent = 0;
  var bonusAmount;
  var adjustedComp;
  var bonusArray;

  bonusPercent = ratePercent(bonusPercent,rating);
  bonusPercent = seniorityBonus(bonusPercent,empNum);
  bonusPercent = richLuxuryTax(bonusPercent,salary);

  // set the maximum and minimum caps
  bonusPercent = Math.min(bonusPercent, 13);
  bonusPercent = Math.max(bonusPercent, 0);

  // calculate bonusAmount and Adjusted Compensation
  bonusAmount = salary * (bonusPercent/100);
  adjustedComp = salary + bonusAmount;

  // build the result array
  bonusArray = [name, bonusPercent, adjustedComp, Math.round(bonusAmount)];
  return bonusArray;
}

function calcBonuses (employeeArrays) {
  var bonuses = [];
  for (var i = 0; i < employeeArrays.length; i++) {
    bonuses.push(employeeBonus(employeeArrays[i]));
  }
  return bonuses;
}

function ratePercent(percent,rating){
  if (rating === 5) {
    percent += 10;
  }
  else if (rating === 4) {
    percent += 6;
  }
  else if (rating === 3) {
    percent += 4;
  }
  return percent;
}

function seniorityBonus(percent,empNum){
  if (empNum.length === 4) {
    percent += 5;
  }
  return percent;
}

function richLuxuryTax(percent,salary){
  if (salary > 65000) {
    percent -= 1;
  }
  return percent;
}
function produceTable (arrayTable, arrayHeaders) {
  var tableString = "<table class=\"pure-table pure-table-striped pure-table-bordered\"> <thead> <tr>";
  for (var z = 0; z < arrayHeaders.length; z++) {
    tableString += "<th>" + arrayHeaders[z] + "</th>";
  }
  tableString += "</tr> </thead>";
  for (var i = 0; i < arrayTable.length; i++) {
    tableString += "<tr>";
    for (var j = 0; j < arrayTable[i].length; j++) {
      tableString += "<td>" + arrayTable[i][j] + "</td>";
    }
    tableString += "</tr>";
  }
  tableString += "</table>";
  return tableString;
}

$(document).ready(function() {
  var bonusArray = calcBonuses(employees);
  var bonusHeader = ["Name", "Bonus Percent", "Adjusted Annual Compensation", "Total Bonus"];
  $('.bonusTable').append(produceTable(bonusArray,bonusHeader));
});
