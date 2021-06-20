/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');
const navbarList = document.querySelector('#navbar__list');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function isInView(element) {
    // get element position
    const top = element.getBoundingClientRect().top;
    const height = element.getBoundingClientRect().height;

    // check whether the element is in view window
    if (-height + 40 < top && top < 40) {
        return true;
    } else {
        return false;
    }
}

function activateSection(element) {
    // give active state on the section
    element.classList.add('your-active-class');

    // give active state on navbar
    for (let i = 0; i < navbarList.childNodes.length; i++) {
        if ('#' + element.id === navbarList.childNodes[i].firstChild.getAttribute('href')) {
            navbarList.childNodes[i].classList.add('your-active-class');
        }
    }
}

function deactivateSection(element) {
    // remove active status from the section
    element.classList.remove('your-active-class');

    // remove active status from navbar
    for (let i = 0; i < navbarList.childNodes.length; i++) {
        if ('#' + element.id === navbarList.childNodes[i].firstChild.getAttribute('href')) {
            navbarList.childNodes[i].classList.remove('your-active-class');
        }
    }
}

function activeViewChecker() {
    // loop over each sections and check if the section is in view
    for (let i = 0; i < sections.length; i++) {
        if (isInView(sections[i])) {
            // activate that section
            activateSection(sections[i]);
        } else {
            // deactivate section
            deactivateSection(sections[i]);
        }
    }
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
// prepare variables for each nav list
let sectionList = [];
for (let i = 0; i < sections.length; i++) {
    sectionList.push({
        id: sections[i].id,
        data_nav: sections[i].dataset['nav']
    });
}
// build navbar
for (let i = 0; i < sectionList.length; i++) {
    const newList = document.createElement('li');
    newList.innerHTML = '<a href="#' + sectionList[i].id + '">' +
        sectionList[i].data_nav + '</a>';

    navbarList.appendChild(newList);
}
// Add evnet listner on navbar list
navbarList.addEventListener('click', function (event) {
    if (event.target.nodeName === 'A') {
        // remove active class from all sections
        for (let i = 0; i < sections.length; i++) {
            sections[i].classList.remove('your-active-class');
        }
        // add active class on clicked section
        document.querySelector(event.target.getAttribute('href')).classList.add('your-active-class');
    }
})

// Add class 'active' to section when near top of viewport
document.addEventListener('scroll', function () {
    activeViewChecker();
})

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


