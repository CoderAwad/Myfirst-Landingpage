// first , I've bulid the nave bar by used a method get all the target elements

const menu = document.querySelector("#navbar__list");

let allnav = document.querySelectorAll("[data-nav]");

// I used here for loop to add the li element depend on the sections added to the page dynamically

for (let i = 1; i <= allnav.length; i++) {
  const newLi = document.createElement("li");
  const anchor = '<a href="#section' + i + '"> section ' + i + "<a>";
  newLi.innerHTML = anchor;
  menu.appendChild(newLi);

  // now I will use this function to smooth the scrolling

  newLi.addEventListener("click", function (e) {
    e.preventDefault();
    allnav[i - 1].scrollIntoView({ behavior: "smooth" });
  });
}

// now I created this foreach loop to create which link is active while clicked on it and which is not and used class list to add some style based on the class

let links = document.querySelectorAll("li");

links.forEach((active) => {
  active.addEventListener("click", function () {
    links.forEach((notactive) => notactive.classList.remove("active-link"));
    active.classList.add("active-link");
  });
});

//As required I will create a function to make the sections cleare while veiwing them by add  a class to the css file : your-active-class
// depends on the eventlistener "mouseover" the section will be active
window.addEventListener("scroll", highlight);
let sections = document.querySelectorAll("section");

function highlight() {
  sections.forEach((section) => {
    section.classList.remove("your-active-class");

    const section_Top = section.getBoundingClientRect().top;

    if (section_Top > 0 && section_Top <= 150) {
      section.classList.add("your-active-class");
    } else {
      section.classList.remove("your-active-class");
    }
  });
}
