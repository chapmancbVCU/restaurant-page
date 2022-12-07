/******************************************************************************
 *         Name: index.js
 *       Author: Chad Chapman
 * Date Created: December 4, 2022
 *  Description: Functions that support implementation of Restaurant website
******************************************************************************/

/*
IMPORTS
*/
import _ from 'lodash';
import './styles.css';
import { homeComponents } from './homeTabPage.js';
import { menuComponents } from './menuTabPage';
import { contactUsComponents } from './contactUsTabPage';

const container = document.querySelector('#content');

function component() {
    const pageContent = document.createElement('div');
    pageContent.classList.add('header');

    const title = document.createElement('h1');
    title.textContent = 'Burnt Popcorn Eatery';

    pageContent.appendChild(title);
    
    const list = document.createElement('ul');

    const homeTab = document.createElement('li');
    homeTab.setAttribute('id', 'home-tab');
    homeTab.textContent = 'Home';
    list.appendChild(homeTab);

    const menuTab = document.createElement('li');
    menuTab.setAttribute('id', 'menu-tab');
    menuTab.textContent = "Menu";
    list.appendChild(menuTab);

    const contactUsTab = document.createElement('li');
    contactUsTab.setAttribute('id', 'contact-us-tab');
    contactUsTab.textContent = "Contact Us";
    list.appendChild(contactUsTab);

    pageContent.appendChild(list);

    return pageContent;
}

container.appendChild(component());

/*
EVENT LISTENERS
*/
const home = document.querySelector('#home-tab');
home.addEventListener('click', function() {
    homeComponents();
});

const menu = document.querySelector('#menu-tab');
menu.addEventListener('click', function() {
    menuComponents();
});

const contactUs = document.querySelector('#contact-us-tab');
contactUs.addEventListener('click', function() {
    contactUsComponents();
});