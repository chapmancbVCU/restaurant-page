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
        mainContent.textContent = 'Home page';
        this.container.appendChild(mainContent);
    }
}