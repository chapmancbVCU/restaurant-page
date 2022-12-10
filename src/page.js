/******************************************************************************
 *         Name: page.js
 *       Author: Chad Chapman
 * Date Created: December 8, 2022
 *  Description: Super class for classes that describes the home, menu, and
 *               contact us pages.
******************************************************************************/

export class Page {

    constructor() {
        this.container = document.querySelector('#content');
    }
    
    /**
     * This method is called when the user selects a new tab.  It erases the 
     * contents of the currently selected tab so that we can render the 
     * information for the newly selected tab.
     */
    eraseDomContent() {
        const elements = document.getElementById('main');
        elements.remove();
    }

    /**
     * This method is called when we want to render the contents of the footer 
     * section of the webpage.
     */
    footerComponents() {
        const footer = document.createElement('div');
        footer.setAttribute('id', 'footer');
        footer.classList.add('page-footer');
        const siteCurator = document.createElement('h4');
        siteCurator.textContent = 'Created by: Chad Chapman';
        footer.appendChild(siteCurator);
        this.container.appendChild(footer);
    }

    /**
     * This method is responsible for rendering the header section of the 
     * webpage.  The header consists of the title and the tabs that are used 
     * to select the home, menu, and contact us sections of the website.
     * @returns The HTMLDivElement that describes the header section
     */
    headerComponents() {
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

    /**
     * This method removes the footer from the DOM so that we can update the 
     * contents of the page when the user selects a tab.
     */
    removeFooterFromDom() {
        const footer = document.getElementById('footer');
        footer.remove();
    }
}