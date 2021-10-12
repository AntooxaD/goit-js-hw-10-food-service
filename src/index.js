import './sass/main.scss';
import menuElement from './menu.json';
import menuTemplate from './template/template.hbs';
import './refs.js';




const menuRef = document.querySelector('.js-menu');

menuRef.insertAdjacentHTML('beforeend', menuTemplate(menuElement));