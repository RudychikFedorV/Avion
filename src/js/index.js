// import header from './modules/header.js';
// header();

const headerDelivery = document.querySelector("#headerDelivery");
if (headerDelivery) {
  const closeDelivery = headerDelivery.querySelector("#closeDelivery");
  closeDelivery.addEventListener("click", () => {
    headerDelivery.classList.add("close-hidden");
  });
}

const burgerEl = document.querySelector(".burger");
if (burgerEl) {
  const menuEl = document.querySelector(".header-bottom");
  const body = document.body;
  burgerEl.addEventListener("click", () => {
    burgerEl.classList.toggle("burger--active");
    menuEl.classList.toggle("header-bottom--active");
    body.classList.toggle("stop-scroll");
  });
}

const filtersBtnEl = document.querySelector(".filters-btn");
if (filtersBtnEl) {
  const filtersEl = document.querySelector(".catalog-filter");
  filtersBtnEl.addEventListener("click", () => {
    filtersBtnEl.classList.toggle("btn-filter--active");
    filtersEl.classList.toggle("filter--active");
  });
}

const headerTopList = document.querySelector(".header-top__list");
if (headerTopList) {
  new TransferElements({
    sourceElement: headerTopList,
    breakpoints: {
      768: {
        targetElement: document.querySelector(".header-bottom"),
        targetPosition: 1,
      },
    },
  });
}

const stepperEls = document.querySelectorAll(".stepper");
if (stepperEls) {
  stepperEls.forEach((stepperEl) => {
    const stepperInputEl = stepperEl.querySelector(".stepper-input");
    const stepperMinusEl = stepperEl.querySelector(".btn--minus");
    const stepperPlusEl = stepperEl.querySelector(".btn--plus");
    const stepperMin = Number(stepperInputEl.getAttribute("min"));
    const stepperMax = Number(stepperInputEl.getAttribute("max"));
    let count = Number(stepperInputEl.value);

    stepperInputEl.addEventListener("change", () => {
      stepperMinusEl.classList.remove("stepper-btn--disabled");
      stepperPlusEl.classList.remove("stepper-btn--disabled");
      if (stepperInputEl.value < stepperMin) {
        stepperMinusEl.classList.add("stepper-btn--disabled");
        stepperInputEl.value = stepperMin;
      }
      if (stepperInputEl.value > stepperMax) {
        stepperPlusEl.classList.add("stepper-btn--disabled");
        stepperInputEl.value = stepperMax;
      }
    });

    stepperPlusEl.addEventListener("click", () => {
      let count = Number(stepperInputEl.value);
      if (count < stepperMax) {
        stepperMinusEl.classList.remove("stepper-btn--disabled");
        stepperPlusEl.classList.remove("stepper-btn--disabled");
        count++;
        stepperInputEl.value = count;
      }
      if (count === stepperMax) {
        stepperPlusEl.classList.add("stepper-btn--disabled");
      }
    });
    stepperMinusEl.addEventListener("click", () => {
      let count = Number(stepperInputEl.value);
      if (count > stepperMin) {
        stepperMinusEl.classList.remove("stepper-btn--disabled");
        stepperPlusEl.classList.remove("stepper-btn--disabled");
        count--;
        stepperInputEl.value = count;
      }
      if (count === stepperMin) {
        stepperMinusEl.classList.add("stepper-btn--disabled");
      }
    });
  });
}
