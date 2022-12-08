/******************************************************************************
 *         Name: contactUsTabPage.js
 *       Author: Chad Chapman
 * Date Created: December 6, 2022
 *  Description: Provides ability to render components of contact us tab.
******************************************************************************/
import { Page } from "./page";
export class ContactUs extends Page {
    constructor() {
        super();
    }

    components() {
        const mainContent = document.createElement("div");
        mainContent.setAttribute('id', 'main');
        mainContent.textContent = 'Contact us';
        this.container.appendChild(mainContent);
    }
}