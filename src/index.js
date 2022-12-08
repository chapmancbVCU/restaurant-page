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
import { Home } from './homeTabPage.js';
import { Menu } from './menuTabPage';
import { ContactUs, contactUsComponents } from './contactUsTabPage';

const container = document.querySelector('#content');

function component() {
    const pageContent = document.createElement('div');
    pageContent.classList.add('header');

    const title = document.createElement('h1');
    title.textContent = 'Burnt Popcorn Eatery';

    pageContent.appendChild(title);
    
    // Setup tabs
    const list = document.createElement('ul');
    list.classList.add('tabs');

    // Setup home link
    const homeTab = document.createElement('li');
    homeTab.setAttribute('id', 'home-tab');
    homeTab.textContent = 'Home';
    list.appendChild(homeTab);

    // Setup menu link
    const menuTab = document.createElement('li');
    menuTab.setAttribute('id', 'menu-tab');
    menuTab.textContent = "Menu";
    list.appendChild(menuTab);

    // Setup contact us
    const contactUsTab = document.createElement('li');
    contactUsTab.setAttribute('id', 'contact-us-tab');
    contactUsTab.textContent = "Contact Us";
    list.appendChild(contactUsTab);

    pageContent.appendChild(list);

    return pageContent;
}

container.appendChild(component());

/******************************************************************************
 * EVENT LISTENERS
 *****************************************************************************/
const home = new Home();
const homePage = document.querySelector('#home-tab');
homePage.addEventListener('click', function() {
    home.eraseDomContent();
    home.components();
});

const menu = new Menu();
const menuPage = document.querySelector('#menu-tab');
menuPage.addEventListener('click', function() {
    menu.eraseDomContent();
    menu.components();
});

const contactUs = new ContactUs();
const contactUsPage = document.querySelector('#contact-us-tab');
contactUsPage.addEventListener('click', function() {
    contactUs.eraseDomContent();
    contactUs.components();
});


// Call home upon page load.
home.components();