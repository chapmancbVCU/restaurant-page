/******************************************************************************
 *         Name: homeTabPage.js
 *       Author: Chad Chapman
 * Date Created: December 6, 2022
 *  Description: Provides ability to render components of home tab.
******************************************************************************/
import { Page } from "./page";
export class Home extends Page {
    constructor() {
        super();
    }

    components() {
        const mainContent = document.createElement("div");
        mainContent.setAttribute('id', 'main');
        this.container.appendChild(mainContent);

        // Setup title
        const pageTitle = document.createElement('h2');
        pageTitle.textContent = 'Welcome';
        mainContent.appendChild(pageTitle);

        const aboutUs = document.createElement('p');
        aboutUs.textContent = 'At Burnt Popcorn Eatery we offer different types of popcorn but our specialty is burnt popcorn.  We also offer several types of delicious beverages and smoothies that are perfect for washing down our delicious snacks.';
        mainContent.appendChild(aboutUs);

        const hoursHeader = document.createElement('h3');
        hoursHeader.textContent = 'Hours';
        mainContent.appendChild(hoursHeader);
    }
}