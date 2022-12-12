/******************************************************************************
 *         Name: index.js
 *       Author: Chad Chapman
 * Date Created: December 4, 2022
 *  Description: Functions that support implementation of Restaurant website
******************************************************************************/

/******************************************************************************
 * IMPORTS
 *****************************************************************************/
import _ from 'lodash';
import './styles.css';
import { Home } from './homeTabPage.js';
import { Menu } from './menuTabPage';
import { ContactUs } from './contactUsTabPage';


/******************************************************************************
 * INSTANCE VARIABLES AND INITIAL PAGE SETUP
 *****************************************************************************/
const container = document.querySelector('#content');

// Create objects for each page.
const home = new Home();
const menu = new Menu();
const contactUs = new ContactUs();

// Render header section upon page load.
container.appendChild(home.headerComponents());

// Query selectors for ids for each tab on the webpage.
const homePage = document.querySelector('#home-tab');
const menuPage = document.querySelector('#menu-tab');
const contactUsPage = document.querySelector('#contact-us-tab');

// Render home tap upon page load.
home.components();
home.footerComponents();


/******************************************************************************
 * EVENT LISTENERS
 *****************************************************************************/
 homePage.addEventListener('click', function() {
     home.eraseDomContent();
     home.removeFooterFromDom();
     home.components();
     home.footerComponents();
 });
 
 menuPage.addEventListener('click', function() {
     menu.eraseDomContent();
     menu.removeFooterFromDom();
     menu.components();
     menu.footerComponents();
 });
 
 contactUsPage.addEventListener('click', function() {
     contactUs.eraseDomContent();
     contactUs.removeFooterFromDom();
     contactUs.components();
     contactUs.footerComponents();

     // Call event listeners that performs form validation.
     contactUs.phoneNumberFormatter();
     contactUs.validateEmail();
 });