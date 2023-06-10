const left_arrow = document.getElementById("left-arrow");
const right_arrow = document.getElementById("right-button");

let scrolling = document.querySelector("#book-parent");

left_arrow.addEventListener("click", function handleClick() {
  scrolling.scrollBy(-150, 0);
});

right_arrow.addEventListener("click", function handleClick() {
  scrolling.scrollBy(150, 0);
});

function random_rgba() {
  let o = Math.round,
    r = Math.random,
    s = 180;
  return "rgba(" + o(r() * s) + "," + o(r() * s) + "," + o(r() * s) + ")";
}

let color = random_rgba();
let indexCounter = 0;

const books = [
  document.querySelector("#book-parent>div.books:nth-child(1)"),
  document.querySelector("#book-parent > div.books:nth-child(2)"),
  document.querySelector("#book-parent > div.books:nth-child(3)"),
  document.querySelector("#book-parent > div.books:nth-child(4)"),
  document.querySelector("#book-parent > div.books:nth-child(5)"),
  document.querySelector("#book-parent > div.books:nth-child(6)"),
  document.querySelector("#book-parent > div.books:nth-child(7)"),
];

const overlayDiv = document.querySelector(".overlay-span");
const addBookButton = document.querySelector(".submit-books");
const formDiv = document.querySelector(".form-box");
const submit_btn = document.querySelector("#submit-btn");
const titleText = document.querySelector('input[name= "name"]');
const authorText = document.querySelector('input[name= "author"]');
const yearText = document.querySelector('input[name= "year"]');
const readValue = document.querySelector(".read-options");
const gridObjects = document.querySelector(".suggestion-grid");

const formPrompter = document.querySelector(".form-head");
const addBooksDiv = document.querySelector(".add-box");

function toggleRead() {
  let getParentBookContainer = this.parentElement.parentElement.parentElement;
  if (this.checked == false) {
    this.style.setProperty("--toggle-text", '"UNREVIEWED"');
    this.style.setProperty("--toggle-color", "brown");
    this.style.setProperty("--left-toggle", "60px");
    this.style.setProperty("--right-toggle", "-15px");
    getParentBookContainer.setAttribute("data-readvalue", false);
  } else {
    this.style.setProperty("--toggle-text", '"COMPLETED"');
    this.style.setProperty("--toggle-color", "green");
    this.style.setProperty("--left-toggle", "60px");
    this.style.setProperty("--right-toggle", "100%");
    getParentBookContainer.setAttribute("data-readvalue", true);
  }
}

function changeDefaultToggle(e) {
  e.style.setProperty("--toggle-text", '"COMPLETED"');
  e.style.setProperty("--toggle-color", "green");
  e.style.setProperty("--left-toggle", "60px");
  e.style.setProperty("--right-toggle", "100%");
}
submit_btn.addEventListener("click", submitFn);

bookObjects = [];

for (i = 0; i < 7; i++) {
  books[
    i
  ].style.background = `linear-gradient(${random_rgba()}, ${random_rgba()})`;
}

addBookButton.addEventListener("click", popup);

function book(title, author, year, readStatus, index, color1, color2) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.readStatus = readStatus;
  this.index = index;
  this.color1 = color1;
  this.color2 = color2;
}

book.prototype.readStatusChange = function () {};

function popup() {
  overlayDiv.style.display = "block";
  formDiv.style.display = "flex";
}

function submitFn(event) {
  if (
    titleText.value &&
    authorText.value &&
    yearText.value &&
    readValue.value !== ""
  ) {
    let newBook = new book(
      titleText.value,
      authorText.value,
      yearText.value,
      readValue.value,
      indexCounter,
      random_rgba(),
      random_rgba()
    );
    bookObjects.push(newBook);

    createElement(
      titleText.value,
      authorText.value,
      yearText.value,
      readValue.value,
      bookObjects[indexCounter].color1,
      bookObjects[indexCounter].color2,
      indexCounter
    );
    indexCounter++;

    overlayDiv.style.display = "none";
    titleText.value = "";
    authorText.value = "";
    yearText.value = "";
    readValue.value = "";
    formPrompter.style.setProperty("--prompt", '""');
    formDiv.style.display = "none";
  } else {
    formPrompter.style.setProperty("--prompt", '"form not completed"');
  }

  event.preventDefault();
}

function createElement(title, author, year, readValue, color1, color2, index) {
  const bookDiv = document.createElement("div");
  const toggleDiv = document.createElement("div");
  const deleteBtn = document.createElement("div");
  bookDiv.style.background = `linear-gradient(${color1}, ${color2})`;
  bookDiv.setAttribute("data-Id", index);
  deleteBtn.setAttribute("data-Id", index);
  bookDiv.setAttribute("data-readValue", readValue);
  const bookTitle = document.createElement("h3");
  const description = document.createElement("span");
  const checkToggle = document.createElement("input");
  description.innerHTML = `<p>Author: ${author}</p> <p> Published:${year}AE</p>`;

  bookDiv.classList.add("books");
  bookDiv.classList.add("indexed-books");
  deleteBtn.classList.add("new-books");
  toggleDiv.classList.add("toggle");
  checkToggle.classList.add("input-checkbox");
  checkToggle.setAttribute("type", "checkbox");
  deleteBtn.addEventListener("click", deleteBooks);
  checkToggle.addEventListener("click", toggleRead);

  toggleDiv.appendChild(checkToggle);
  description.appendChild(deleteBtn);
  description.appendChild(toggleDiv);
  if (readValue === "true") {
    checkToggle.checked = true;
    checkToggle.defaultChecked = true;
    changeDefaultToggle(checkToggle);
  } else {
    checkToggle.checked = false;
  }
  bookTitle.classList.add("book-title-2");
  description.classList.add("book-desc");

  bookTitle.append(title);

  bookDiv.appendChild(bookTitle);
  bookDiv.appendChild(description);
  gridObjects.insertBefore(bookDiv, addBooksDiv);
}

function deleteBooks() {
  let index = Number(this.getAttribute("data-Id"));
  bookObjects.splice(index, 1);
  let element = document.querySelector(`div[data-Id= "${index}"]`);
  element.remove();
  updateIndex();
  indexCounter--;
}

function updateIndex() {
  let bookIndexes = document.querySelectorAll(".indexed-books");
  let delBtnIndexes = document.querySelectorAll(".new-books");
  let deleteBtnArray = Array.from(delBtnIndexes);
  Array.from(bookIndexes).forEach((element, index) => {
    element.setAttribute("data-Id", index);
    deleteBtnArray[index].setAttribute("data-Id", index);
  });
}
