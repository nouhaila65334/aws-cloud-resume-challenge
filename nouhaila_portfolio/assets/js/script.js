"use strict";

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

const filterItems = document.querySelectorAll("[data-filter-item]");
const filterButtons = document.querySelectorAll("[data-filter-btn]");
const selectItems = document.querySelectorAll("[data-select-item]");

// Function to toggle active class based on selected category
const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (
      selectedValue === "all" ||
      selectedValue === filterItems[i].dataset.category.toLowerCase()
    ) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

// Event listeners for filter buttons
for (let i = 0; i < filterButtons.length; i++) {
  filterButtons[i].addEventListener("click", function () {
    const selectedValue = this.innerText.toLowerCase();
    filterFunc(selectedValue);
    // Add/remove active class on filter buttons
    for (let j = 0; j < filterButtons.length; j++) {
      filterButtons[j].classList.remove("active");
    }
    this.classList.add("active");
  });
}

// Event listeners for select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    const selectedValue = this.innerText.toLowerCase();
    filterFunc(selectedValue);
    // Update the select value
    document.querySelector("[data-selecct-value]").innerText = selectedValue;
  });
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}

//js code part counter views for AWS Cloud resume challenge
const counter = document.querySelector(".counter-number");
async function updateCounter() {
  let response = await fetch(
    "https://gbceszmid7kagyqqfpx63sfklu0nkdpf.lambda-url.us-east-1.on.aws/"
  );
  let data = await response.json();
  counter.innerHTML = ` Views: ${data}`;
}

updateCounter();
