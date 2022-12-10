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
import { Page } from './page';

const container = document.querySelector('#content');

// Create objects for each page.
const home = new Home();
const menu = new Menu();
const contactUs = new ContactUs();

// Render header section upon page load.
container.appendChild(home.headerComponents());

// Render home tap upon page load.
home.components();
home.footerComponents();


/******************************************************************************
 * EVENT LISTENERS
 *****************************************************************************/
 const homePage = document.querySelector('#home-tab');
 homePage.addEventListener('click', function() {
     home.eraseDomContent();
     home.removeFooterFromDom();
     home.components();
     home.footerComponents();
 });
 
 const menuPage = document.querySelector('#menu-tab');
 menuPage.addEventListener('click', function() {
     menu.eraseDomContent();
     menu.removeFooterFromDom();
     menu.components();
     menu.footerComponents();
 });
 
 const contactUsPage = document.querySelector('#contact-us-tab');
 contactUsPage.addEventListener('click', function() {
     contactUs.eraseDomContent();
     menu.removeFooterFromDom();
     contactUs.components();
     menu.footerComponents();
 });