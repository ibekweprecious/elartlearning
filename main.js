const hambugger = document.querySelector(".hamburger");
const mobilenav = document.querySelector(".mobile_nav");
const close = document.querySelector('.ionicons');


hambugger.addEventListener("click",function(){
  // hambugger.classList.toggle("active");
  mobilenav.classList.toggle('show');
})

close.addEventListener("click",function(){
 mobilenav.classList.remove("show");
});

// document.getElementById('btn--back').addEventListener("click",function(){
  
// });