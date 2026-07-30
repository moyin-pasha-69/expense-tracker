import * as storage from "./storage.js";
import * as operation from "./operations.js";
import * as ui from "./ui.js";

export const currentAmt = document.querySelector(".current-amt");
export const incomeAmt = document.querySelector(".income-amt");
export const savingBal = document.querySelector(".saving-amt");
export const expenseBal = document.querySelector(".expense-amt");
const addTransBtn = document.querySelector(".add-trans-btn");

export function updateTransBalAmt() {
  incomeAmt.innerHTML = 0;
  currentAmt.innerHTML = Number(incomeAmt.innerHTML);
  expenseBal.innerHTML = 0;
  savingBal.innerHTML = 0;

  updateIncomeAmt();
  updateExpenseAmt();
}

function updateExpenseAmt() {
  let expense = storage.transList
    .filter((item) => {
      return item.Type === "expense";
    })
    .map((item) => item.Amount)
    .reduce((acc, cur) => acc + cur, 0);

  expenseBal.innerHTML = expense + Number(expenseBal.innerHTML);
  currentAmt.innerHTML = Number(currentAmt.innerHTML) - expense;
}
function updateIncomeAmt() {
  let income = storage.transList
    .filter((item) => {
      return item.Type === "income";
    })
    .map((item) => item.Amount)
    .reduce((acc, cur) => acc + cur, 0);

  incomeAmt.innerHTML = income + Number(incomeAmt.innerHTML);
  currentAmt.innerHTML = Number(incomeAmt.innerHTML);
}

document.addEventListener("DOMContentLoaded", () => {
  operation.greet();
  ui.renderCartData();
  updateTransBalAmt();
  addTransBtn.addEventListener("click", ui.addTransForm);
});
