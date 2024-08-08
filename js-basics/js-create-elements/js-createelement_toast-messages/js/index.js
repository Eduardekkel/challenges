console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

function createNewMessage() {
  const newMessage = document.createElement("li");
  newMessage.classList.add("toast-container__message");
  newMessage.textContent = "I'm a toast message.";
  return newMessage;
}
addButton.addEventListener("click", () => {
  // Exercise: Append a new entry to the toast messages container
  const message = createNewMessage();
  toastContainer.append(message);
});

clearButton.addEventListener("click", () => {
  toastContainer.innerHTML = "";
  // Exercise: Clear the stack of toast messages
});
