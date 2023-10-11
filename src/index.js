import { homeContent } from './home.js';
import { menuContent } from './menu.js';
import { infoContent } from './info.js';
import { navBar } from './navbar.js';
// import './style.css';

// const contentDiv = document.querySelector('#content');

// homeBtn.addEventListener('click', () => {
//     homeContent;
// })
homeBtn.addEventListener('click', homeContent);

// menuBtn.addEventListener('click', () => {
//     menuContent;
// })
menuBtn.addEventListener('click', menuContent);

// infoBtn.addEventListener('click', () => {
//     infoContent;
// })
infoBtn.addEventListener('click', infoContent);

console.log('Hello World');