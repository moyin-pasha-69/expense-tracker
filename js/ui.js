import * as app from "./app.js";
import * as storage from "./storage.js";
import * as operation from "./operations.js";

let formSection = document.getElementById("add-trans-form-section");
let setCartData = document.getElementById("trans-cart-section");
export const emptyResult = document.querySelector(".empty-result-section");

export function addTransForm() {
  formSection.classList.remove("hidden");
  let div = document.createElement("div");
  let overlay = document.createElement("div");
  overlay.classList.add("overlay");
  div.classList.add("add-trans-form");

  div.innerHTML = `
  <i  class="fa-solid fa-arrows-to-circle text-white text-2xl absolute right-4 cancel-btn"></i>
   <h2 class="font-bold text-[#820000] text-3xl text-center mb-8">
          Enter Transaction Details
        </h2>
        <form action="" class="flex flex-col justify-center gap-4 sm:px-8">
          <div class="flex flex-col sm:flex-row sm:gap-14 mx-4 form-items">
            <label for="amt">Amount</label>
            <input
              type="number"
              id="amt"
              name="amt"
              placeholder="Enter Amount"
            />
          </div>
        <div class="flex flex-col sm:flex-row sm:gap-14 mx-4 form-items">
            <label for="type">Type</label>
           <select name="type" id="type">

        <option value="types" selected disabled >--Select Type--</option>
        ${createFormItems(storage.typeList)}
      </select>
          </div>

          <div class="flex flex-col sm:flex-row mx-4 sm:gap-8 form-items">
            <label for="category">Category</label>
            <select name="category" id="category">

        <option value="select" selected disabled >--Select Category--</option>
        ${createFormItems(storage.categoryList)}
      </select>
          </div>

          
          <div class="flex flex-col sm:flex-row sm:gap-14 mx-4 form-items">
            <label for="date">Date</label>
            <input type="date" name="date" id="date" />
          </div>

          <div class="flex flex-col gap-2 mx-4 form-items">
            <label for="description">Description</label>
            <textarea
              name="description"
              id="description"
              rows="4"
              cols="30"
              class="outline-none"
            ></textarea>
          </div>
          <div class="w-full text-center">
          <button
          type="submit"
            class="add-trans-btn bg-[#618764] rounded-3xl py-2 px-4 font-bold text-lg text-white hover:bg-[#2B5748] cursor-pointer mt-4"
          >
            Add
          </button>
        </form>
        
        </div>
  `;

  formSection.appendChild(overlay);
  formSection.appendChild(div);

  const amount = div.querySelector("#amt");
  const category = div.querySelector("#category");
  const type = div.querySelector("#type");
  const date = div.querySelector("#date");
  const description = div.querySelector("#description");
  const addBtn = div.querySelector(".add-trans-btn");
  const form = div.querySelector("form");
  const cancelBtn = div.querySelector(".add-trans-form i");
  cancelBtn.classList.add("cursor-pointer");
  category.classList.add("cursor-pointer");
  date.classList.add("cursor-pointer");
  type.classList.add("cursor-pointer");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (
      amount.value === "" ||
      type.value === "" ||
      category.value === "" ||
      date.value === "" ||
      type.value === "type" ||
      category.value === "select"
    )
      return ErrorToast("Input Field Can't be Empty");

    const trans = {
      Id: Date.now(),
      Amount: Number(amount.value.trim()),
      Type: type.value,
      Category: category.value,
      Date: date.value,
      Description: operation.capitalizeWords(description.value.trim()),
    };

    if (checkIsPossible(trans)) {
      storage.transList.push(trans);
      storage.addToLocalStorage(storage.transList);
      successToast("Transaction added Successfully!");
      renderCartData(storage.transList);
    }
    form.reset();
    overlay.remove();
    div.remove();
    formSection.classList.add("hidden");
  });

  cancelBtn.addEventListener("click", () => {
    overlay.remove();
    div.remove();
    formSection.classList.add("hidden");
  });
}

function createFormItems(data) {
  return data
    .map((items) => `<option value="${items.toLowerCase()}">${items}</option>`)
    .join("");
}

export function renderCartData(transList) {
  setCartData.innerHTML = "";

  if (transList === "empty") {
    emptyResult.innerHTML = "";
    emptyResult.classList.remove("hidden");
    let empty = document.createElement("p");
    empty.classList.add("empty-search");
    empty.innerHTML = "Zero Result Found!";
    emptyResult.appendChild(empty);
  } else {
    if (!emptyResult.className.includes("hidden")) {
      emptyResult.classList.add("hidden");
    }
    transList.forEach((trans, index) => {
      const div = document.createElement("div");
      div.classList.add("trans-cart");
      div.classList.add("trans-cart-hover-effect");
      const date = new Date(trans.Date);
      const month = storage.monthName[date.getMonth()];
      const day = date.getDate();

      const type = operation.capitalizeWords(trans.Type);
      const category = operation.capitalizeWords(trans.Category);
      let desc;
      if (trans.Description === "") {
        desc = "Empty";
      } else {
        desc = operation.capitalizeWords(trans.Description.toLowerCase());
      }

      div.innerHTML = `
          <h2 class="text-center text-[#910000] font-bold text-2xl mb-6">
            Transaction
          </h2>
          <div class="mb-12">
            <p>
              Transaction Amount : <span>₹</span><span id="trans-amt">${trans.Amount}</span>
            </p>
            <p>Transaction Type : <span id="trans-type">${type}</span></p>
            <p>Transaction Category : <span id="trans-cat">${category}</span></p>
            <p>Transaction Date : <span id="trans-date">${day} ${month}</span></p>
            <p>
              Transaction Description :
              <span id="trans-desc"
                >${desc}</span
              >
            </p>
          </div>
          <button class="btn-style w-full">Delete</button>
  `;
      setCartData.appendChild(div);
      const cartDeleteBtn = div.querySelector("button");

      cartDeleteBtn.addEventListener("click", () => {
        removeFromMemory(trans.Id);
      });
    });
  }
}

function removeFromMemory(data) {
  const updatedList = storage.transList.filter((item) => item.Id !== data);

  storage.addToLocalStorage(updatedList);
  infoToast("Transaction deleted Successfully!");
  renderCartData(storage.transList);
}

function ErrorToast(x) {
  let message = x;
  let icon = `<i class="fa-solid fa-circle-xmark"></i>`;
  let color = "red";
  operation.showToast(message, icon, color);
}

function successToast(x) {
  let message = x;
  let icon = `<i class="fa-solid fa-circle-check"></i>`;
  let color = "green";
  operation.showToast(message, icon, color);
}

function infoToast(x) {
  let message = x;
  let icon = `<i class="fa-solid fa-circle-exclamation"></i>`;
  let color = "midnightblue";
  operation.showToast(message, icon, color);
}

function checkIsPossible(trans) {
  if (trans.Type === "expense") {
    if (app.currentAmt.textContent < trans.Amount) {
      ErrorToast("You don't have enough money!");
      return false;
    }
  }
  return true;
}
