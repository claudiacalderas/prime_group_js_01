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
  if (rating === 5) {
    bonusPercent += 10;
  }
  else if (rating === 4) {
    bonusPercent += 6;
  }
  else if (rating === 3) {
    bonusPercent += 4;
  }

  if (empNum.length === 4) {
    bonusPercent += 5;
  }

  if (salary > 65000) {
    bonusPercent -= 1;
  }

  bonusPercent = Math.min(bonusPercent, 13);
  bonusPercent = Math.max(bonusPercent, 0);

  bonusAmount = salary * (bonusPercent/100);
  adjustedComp = salary + bonusAmount;


  bonusArray = [name, bonusPercent, adjustedComp, Math.round(bonusAmount)];

  return bonusArray;
}

function calcBonuses (employeeArrays) {
  for (var i = 0; i < employeeArrays.length; i++) {
    console.log(employeeBonus(employeeArrays[i]));
  }
}

calcBonuses(employees);
