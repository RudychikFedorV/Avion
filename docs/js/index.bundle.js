!function(){const e=document.querySelector("#headerDelivery");e&&e.querySelector("#closeDelivery").addEventListener("click",(()=>{e.classList.add("close-hidden")}));const t=document.querySelector(".burger");if(t){const e=document.querySelector(".header-bottom"),s=document.body;t.addEventListener("click",(()=>{t.classList.toggle("burger--active"),e.classList.toggle("header-bottom--active"),s.classList.toggle("stop-scroll")}))}const s=document.querySelector(".filters-btn");if(s){const e=document.querySelector(".catalog-filter");s.addEventListener("click",(()=>{s.classList.toggle("btn-filter--active"),e.classList.toggle("filter--active")}))}const r=document.querySelector(".header-top__list");r&&new TransferElements({sourceElement:r,breakpoints:{768:{targetElement:document.querySelector(".header-bottom"),targetPosition:1}}});const l=document.querySelectorAll(".stepper");l&&l.forEach((e=>{const t=e.querySelector(".stepper-input"),s=e.querySelector(".btn--minus"),r=e.querySelector(".btn--plus"),l=Number(t.getAttribute("min")),c=Number(t.getAttribute("max"));Number(t.value),t.addEventListener("change",(()=>{s.classList.remove("stepper-btn--disabled"),r.classList.remove("stepper-btn--disabled"),t.value<l&&(s.classList.add("stepper-btn--disabled"),t.value=l),t.value>c&&(r.classList.add("stepper-btn--disabled"),t.value=c)})),r.addEventListener("click",(()=>{let e=Number(t.value);e<c&&(s.classList.remove("stepper-btn--disabled"),r.classList.remove("stepper-btn--disabled"),e++,t.value=e),e===c&&r.classList.add("stepper-btn--disabled")})),s.addEventListener("click",(()=>{let e=Number(t.value);e>l&&(s.classList.remove("stepper-btn--disabled"),r.classList.remove("stepper-btn--disabled"),e--,t.value=e),e===l&&s.classList.add("stepper-btn--disabled")}))}))}();