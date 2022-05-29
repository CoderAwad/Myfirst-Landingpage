// first , I've bulid the nave bar by used a method get all the target elements

const menu = document.querySelector("#navbar__list");

let allnav = document.querySelectorAll("[data-nav]");

// I used here for loop to add the li element depend on the sections added to the page dynamically

for (let i = 1; i <= allnav.length; i++) {
  const newLi = document.createElement("li");
  const anchor = '<a href="#section' + i + '"> section ' + i + "<a>";
  newLi.innerHTML = anchor;
  menu.appendChild(newLi);
  //newLi.classList.add("nav-item");

  // now I will use this function to smooth the scrolling
  /**
 * newLi.addEventListener("click", function (e) {
    e.preventDefault();
    allnav[i - 1].scrollIntoView({ behavior: "smooth" });
  });
 * 
 */
}

// function to control scroll behavior

const link_items = document.querySelectorAll("a");

link_items.forEach((link) => {
  const current_sec = document.querySelector(link.getAttribute("href"));
  console.log(current_sec);
  link.addEventListener("click", function (e) {
    const section_top = current_sec.offsetTop;
    console.log(section_top);
    const myUl = document.querySelector("#navbar__list");
    const menuHeight = myUl.getBoundingClientRect().height;
    e.preventDefault();
    if (window.innerWidth <= 600) {
      window.scrollTo({ top: current_sec - menuHeight, behavior: "smooth" });
    } else {
      link.scrollIntoView({ behavior: "smooth" });
    }
  });
});

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
    const maxTop = 250;
    const activelink = document.querySelector(`a[href="#${section.id}"]`);

    if (section_Top > 0 && section_Top <= maxTop) {
      section.classList.add("your-active-class");
      activelink.classList.add("menu-link");
    } else {
      section.classList.remove("your-active-class");
      activelink.classList.remove("menu-link");
    }
  });
}
