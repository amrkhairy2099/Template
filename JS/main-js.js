// skills and Stats
let skills = document.querySelector(".skills");
let spans = document.querySelectorAll(".skill-bar span");
let stats = document.querySelector(".stats");
let number = document.querySelectorAll(".stats .box .number");
let started = false;
let btnUp = document.querySelector("button");
window.onscroll = function () {
   if (window.scrollY >= skills.offsetTop - 200) {
      spans.forEach((span) => {
         span.style.width = span.dataset.width;
      })
   };
   if (window.scrollY >= stats.offsetTop - 100) {
      if (!started) {
         number.forEach((num) => startCounter(num));
      }
      started = true;
   };
  if (window.scrollY >= 5000) {
     btnUp.style.display = "block";
   } else {
      btnUp.style.display = "none";
   } 
} 

function startCounter(el) {
   let goal = el.dataset.info;
   let counter = setInterval(() => {
      el.textContent++;
      if (el.textContent == goal) {
         clearInterval(counter);
      }
   }, 2000 / goal);
}

btnUp.onclick = function() {
   window.scrollTo({
      top: 0,
      behavior: "smooth",
   });
}

// Videos
let lis = document.querySelectorAll(".videos ul li");
let img = document.querySelector(".videos .image");
lis.forEach((li) => {
   li.addEventListener("click", (e) => {
      lis.forEach((e) => {
         e.classList.remove("active");
      })
      li.classList.add("active");
      img.style.backgroundImage = e.currentTarget.dataset.img;
   })
})

console.log();