import * as ui from "./ui.js";
import * as app from "./app.js";

export const categoryList = [
  "Food",
  "Transport",
  "Shopping",
  "Rent",
  "Bills",
  "Entertainment",
  "Education",
  "Health",
  "Salary",
  "Freelance",
];

export const typeList = ["Income", "Expense"];

export let transList = JSON.parse(localStorage.getItem("cart")) || [];

// ui.renderCartData();

export const monthName = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export function addToLocalStorage(trans) {
  localStorage.setItem("cart", JSON.stringify(trans));
  transList = JSON.parse(localStorage.getItem("cart"));
  app.updateTransBalAmt();
  // ui.renderCartData();
}
