
// Date

let dateUpd = new Date();

let day = dateUpd.getDate();
let month = dateUpd.getMonth() + 1;
let year = dateUpd.getFullYear();

let dayToday = day + "/" + month + "/" + year;
console.log(dayToday);

if (document.querySelector(".date") !== null) {
  document.querySelector(".date").innerText = dayToday;
}

// Input email validation Page 1

let emailInp = document.querySelector(".email-box");
let subButton = document.querySelector(".subscribe-botton");
let newsletterCont = document.querySelector(".newsletter-container");
let errorDiv = document.querySelector(".error-div");
let itSOk = document.querySelector(".ok-message");
let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

subButton.addEventListener("click", () => {
  if (!filter.test(emailInp.value)) {
    errorDiv.style.display = "block";
    itSOk.style.display = "none";
  } else {
    errorDiv.style.display = "none";
    itSOk.style.display = "block";
  }
  emailInp.focus;
  return false;
});



// Fetch

let url = "https://rickandmortyapi.com/api/character";
let cardOneImage = document.querySelector(".project-1-image");
let cardOneTitle = document.querySelector(".project-1-title");
let cardOneSub = document.querySelector(".project-1-description");
let cardTwoImage = document.querySelector(".project-2-image");
let cardTwoTitle = document.querySelector(".project-2-title");
let cardTwoSub = document.querySelector(".project-2-description");
let cardThreeImage = document.querySelector(".project-3-image");
let cardThreeTitle = document.querySelector(".project-3-title");
let cardThreeSub = document.querySelector(".project-3-description");
const cards = document.querySelectorAll('.card');


fetch(url)
  .then((Response) => Response.json())
  .then((data) => {
    cardOneImage.setAttribute('src', data.results[0].image)
    cardOneTitle.innerText = data.results[0].name;
    cardOneSub.innerText = data.results[0].species;
    cardTwoImage.setAttribute('src', data.results[15].image)
    cardTwoTitle.innerText = data.results[15].name;
    cardTwoSub.innerText = data.results[15].species;
    cardThreeImage.setAttribute('src', data.results[13].image)
    cardThreeTitle.innerText = data.results[13].name;
    cardThreeSub.innerText = data.results[13].species;



  });





  
