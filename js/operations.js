const messageBox = document.querySelector(".toast-message-section");
const greetMessage = document.querySelector(".greet-message");

export function capitalizeWords(text) {
  if (text === "") return;
  else
    return text
      .replace(/\s+/g, " ")
      .trim()
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");
}

export function showToast(message, icon, color) {
  let toast = document.createElement("div");

  toast.classList.add("toast");
  toast.innerHTML = `${icon}${message}`;
  messageBox.appendChild(toast);
  let i = toast.querySelector("i");
  i.setAttribute("style", `color:${color}`);
  toast.style.setProperty("--after-color", `${color}`);

  setTimeout(() => {
    messageBox.removeChild(toast);
  }, 4000);
}

export function greet() {
  let time = new Date().getHours();
  if (time >= 5 && time < 12) {
    greetMessage.innerHTML = "Good Morning";
  } else if (time >= 12 && time < 17) {
    greetMessage.innerHTML = "Good Afternoon";
  } else if (time >= 17 && time < 24) {
    greetMessage.innerHTML = "Good Evening";
  } else {
    greetMessage.innerHTML = "Good night";
  }
}

// function timeToMinutes(time) {
//   let [hhmm, period] = time.split(" ");
//   let [hour, min] = hhmm.split(":");

//   let h = Number(hour);
//   let m = Number(min);

//   return h * 60 + m;
// }
