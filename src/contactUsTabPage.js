/******************************************************************************
 *         Name: contactUsTabPage.js
 *       Author: Chad Chapman
 * Date Created: December 6, 2022
 *  Description: Provides ability to render components of contact us tab.
******************************************************************************/

/******************************************************************************
 * IMPORTS
 *****************************************************************************/
import { Page } from "./page";

/**
 * This class describes the methods for updating the Contact Us page.  It 
 * extends the Page class.
 */
export class ContactUs extends Page {
    /**
     * Default constructor
     */
    constructor() {
        super();
    }

    /**
     * This method is responsible for setting up the page.  It calls all of 
     * the other methods that are used to render content.
     */
    components() {
        const mainContent = document.createElement("div");
        mainContent.setAttribute('id', 'main');
        this.container.appendChild(mainContent);

        // Setup title
        const pageTitle = document.createElement('h2');
        pageTitle.textContent = 'Contact Us';
        mainContent.appendChild(pageTitle);
    }
}