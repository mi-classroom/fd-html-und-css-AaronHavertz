const menuOpenButton = document.querySelector('[data-js-main-menu-open]');
const menuOverlay = document.querySelector('[data-js-main-menu-target]');
const menuCloseButton = document.querySelector('[data-js-main-menu-close]');

menuOpenButton.addEventListener('click', function() {
    menuOverlay.classList.add('is-active');
} );


menuCloseButton.addEventListener('click', function() {
    menuOverlay.classList.remove('is-active');
});

const pageNavigation = document.querySelector('[data-js-page-navigation-menu]');

const sectionHeadlines = document.querySelectorAll('[data-js-page-navigation-content] > section > h2');
console.log(sectionHeadlines);

/*
sectionHeadlines.forEach(function (headline) {
    
    const sectionID = createSlug(headline.innerText);
    const pageNavigationItem = document.createElement('li');
    const pageNavigationAnchor = document.createElement('a');
    
    pageNavigationAnchor.innerHTML = headline.innerHTML;
    pageNavigationAnchor.setAttribute('href', '#' + sectionID);


    pageNavigationItem.appendChild(pageNavigationAnchor);
    pageNavigation.appendChild(pageNavigationItem);

    headline.parentElement.setAttribute('id', sectionID);


 }    );
*/

 sectionHeadlines.forEach(function (headline) {
    
    const sectionID = createSlug(headline.innerText);
   
    const pageNavigationItem = document.createElement('li');
    pageNavigationItem.innerHTML = `<a href="#${sectionID}">${headline.innerHTML}</a>`;
    pageNavigation.appendChild(pageNavigationItem);

    headline.parentElement.setAttribute('id', sectionID);


 }    );






 // function to create a slog from a string without double dashes and keep german umlauts
 function createSlug(str) {
    return str
    .toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/[^a-z0-9]+/g, '-')
    .trim()
    .replace(/^-|-$/g, '')
    .replace(/--+/g, '-');
 }


