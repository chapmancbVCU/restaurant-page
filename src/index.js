/******************************************************************************
 *         Name: index.js
 *       Author: Chad Chapman
 * Date Created: December 4, 2022
 *  Description: Functions that support implementation of Restaurant website
******************************************************************************/
import _ from 'lodash';
import './styles.css';
console.log("hi hi");

const container = document.querySelector('#content');

function component() {
    const element = document.createElement('div');
    element.classList.add('header');

    const title = document.createElement('h1');
    title.textContent = 'Burnt Popcorn Eatery';

    element.appendChild(title);
    
    const list = document.createElement('ul');
    const homeTab = document.createElement('li');
    homeTab.setAttribute('id', 'home-tab');

    const menuTab = document.createElement('li');
    menuTab.setAttribute('id', 'menu-tab');

    homeTab.textContent = 'Home';
    menuTab.textContent = "Menu";

    list.appendChild(homeTab);
    list.appendChild(menuTab);

    element.appendChild(list);

    return element;
}

container.appendChild(component());

/*
EVENT LISTENERS
*/
const home = document.querySelector('#home-tab');
home.addEventListener('click', function() {
    alert('home');
});

const menu = document.querySelector('#menu-tab');
menu.addEventListener('click', function() {
    alert('menu');
});