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
const home = new Home();
const homePage = document.querySelector('#home-tab');
homePage.addEventListener('click', function() {
    home.homeComponents();
});

const menu = new Menu();
const menuPage = document.querySelector('#menu-tab');
menuPage.addEventListener('click', function() {
    menu.menuComponents();
});

const contactUs = new ContactUs();
const contactUsPage = document.querySelector('#contact-us-tab');
contactUsPage.addEventListener('click', function() {
    contactUs.contactUsComponents();
});