/******************************************************************************
 *         Name: menuTabPage.js
 *       Author: Chad Chapman
 * Date Created: December 6, 2022
 *  Description: Provides ability to render components of menu tab.
******************************************************************************/
import { Page } from "./page";
export class Menu extends Page {
    constructor() {
        super();
    }

    components() {
        alert('menu');
    }
}