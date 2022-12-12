/******************************************************************************
 *         Name: menuTabPage.js
 *       Author: Chad Chapman
 * Date Created: December 6, 2022
 *  Description: Provides ability to render components of menu tab.
******************************************************************************/

/******************************************************************************
 * IMPORTS
 *****************************************************************************/
import { Page } from "./page";
import BurntPopcornImage from './burnt-popcorn.jpg';
import CocaColaImage from './coca-cola-image.jpg';
import PopcornToppings from './popcorn-toppings.jpg';

/**
 * This class describes the methods for updating the menu page.  It extends 
 * the Page class.
 */
export class Menu extends Page {
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
        mainContent.classList.add('main-content');
        this.container.appendChild(mainContent);

        // Setup title
        const pageTitle = document.createElement('h2');
        pageTitle.textContent = 'Menu';
        mainContent.appendChild(pageTitle);

        Menu.renderBurntPopcornImage(mainContent);

        // Main menu items
        Menu.renderMainItems(mainContent);

        // Popcorn toppings
        Menu.renderPopcornTopppings(mainContent);

        // Soft drinks
        Menu.renderSoftdrinks(mainContent);
    }


    static renderBurntPopcornImage(parentContainer) {
        const burntPopcornImage = new Image();
        burntPopcornImage.classList.add('tall-image-2');
        burntPopcornImage.src = BurntPopcornImage;
        parentContainer.appendChild(burntPopcornImage);
    }
    /**
     * This method is responsible for rendering an image of a glass of 
     * CocaCola.
     * @param {HTMLDivElement} parentContainer the container that is the 
     * parent for all of  the elements that will be created with this method.
     */
    static renderCocaColaImage(parentContainer) {
        const cocaColaImage = new Image();
        cocaColaImage.classList.add('rectangle-image-2');
        cocaColaImage.src = CocaColaImage;
        parentContainer.appendChild(cocaColaImage);
    }

    /**
     * This method is responsible for rendering the main offerings section 
     * of the menu.
     * @param {HTMLDivElement} parentContainer the container that is the 
     * parent for all of  the elements that will be created with this method.
     */
    static renderMainItems(parentContainer) {
        const popcornHeader = document.createElement('h3');
        popcornHeader.textContent = 'Popcorn Selection';
        parentContainer.appendChild(popcornHeader);

        const popcornPricesContainer = document.createElement('div');
        popcornPricesContainer.classList.add('wide-content-container');

        const offeringsList = document.createElement('p');
        offeringsList.textContent = "Choose between regular, slightly burnt, medium burnt, burnt, or our Scorched Earth Specialty";
        popcornPricesContainer.appendChild(offeringsList);

        // Setup the table and header
        const popcornPricesTable = document.createElement('table');
        const tableHeader = document.createElement('tr');

        const smallPopcornLabel = document.createElement('th');
        smallPopcornLabel.textContent = 'Small';
        tableHeader.appendChild(smallPopcornLabel);

        const mediumPopcornLabel = document.createElement('th');
        mediumPopcornLabel.textContent = 'Medium';
        tableHeader.appendChild(mediumPopcornLabel);

        const largePopcornLabel = document.createElement('th');
        largePopcornLabel.textContent = 'Large';
        tableHeader.appendChild(largePopcornLabel);

        popcornPricesTable.appendChild(tableHeader);

        // Setup row for prices for each size
        const popcornPricesRow = document.createElement('tr');

        const smallPopcornPrice = document.createElement('td');
        smallPopcornPrice.textContent = '$2.99';
        popcornPricesRow.appendChild(smallPopcornPrice);

        const mediumPopcornPrice = document.createElement('td');
        mediumPopcornPrice.textContent = '$3.99';
        popcornPricesRow.appendChild(mediumPopcornPrice);

        const largePopcornPrice = document.createElement('td');
        largePopcornPrice.textContent = '$4.99';
        popcornPricesRow.appendChild(largePopcornPrice);

        popcornPricesTable.appendChild(popcornPricesRow);
        popcornPricesContainer.appendChild(popcornPricesTable);
        parentContainer.appendChild(popcornPricesContainer);
    }

    /**
     * This method is responsible for rendering the popcorn toppings section 
     * of this page.
     * @param {HTMLDivElement} parentContainer the container that is the 
     * parent for all of  the elements that will be created with this method.
     */
    static renderPopcornTopppings(parentContainer) {
        const toppingsSectionLabel = document.createElement('h3');
        toppingsSectionLabel.textContent = 'Toppings';
        parentContainer.appendChild(toppingsSectionLabel);

        Menu.renderPopcornToppingsImage(parentContainer);

        const toppingsSectionContainer = document.createElement('div');
        toppingsSectionContainer.classList.add('menu-items-container');

        const toppingsIntro = document.createElement('p');
        toppingsIntro.textContent = 'We offer a variety of toppings.  Of course, salt is always free.';
        toppingsSectionContainer.appendChild(toppingsIntro);


        parentContainer.appendChild(toppingsSectionContainer);
    }

    /**
     * This method is responsible for rendering the image of bowls of popcorn 
     * with various toppings.
     * @param {HTMLDivElement} parentContainer the container that is the 
     * parent for all of  the elements that will be created with this method.
     */
    static renderPopcornToppingsImage(parentContainer) {
        const popcornToppingsImage = new Image();
        popcornToppingsImage.classList.add('tall-image-2');
        popcornToppingsImage.src = PopcornToppings;
        parentContainer.appendChild(popcornToppingsImage);
    }

    /**
     * This method is responsible for rendering the soft drinks section of 
     * this page.
     * @param {HTMLDivElement} parentContainer the container that is the 
     * parent for all of  the elements that will be created with this method.
     */
    static renderSoftdrinks(parentContainer) {
        const softDrinksHeader = document.createElement('h3');
        softDrinksHeader.textContent = 'Soft Drinks';
        parentContainer.appendChild(softDrinksHeader);

        Menu.renderCocaColaImage(parentContainer);        

        const softDrinksContainer = document.createElement('div');
        softDrinksContainer.classList.add('menu-items-container');

        const softDrinksList = document.createElement('p');
        softDrinksList.textContent = 
                'Coca-Cola, Sprite, Dr Pepper, Diet Coke, and Fanta Orange';
        softDrinksContainer.appendChild(softDrinksList);

        // Setup the table and header
        const softDrinksTable = document.createElement('table');
        const tableHeader = document.createElement('tr');

        const smallDrinkLabel = document.createElement('th');
        smallDrinkLabel.textContent = 'Small';
        tableHeader.appendChild(smallDrinkLabel);

        const mediumDrinkLabel = document.createElement('th');
        mediumDrinkLabel.textContent = 'Medium';
        tableHeader.appendChild(mediumDrinkLabel);

        const largeDrinkLabel = document.createElement('th');
        largeDrinkLabel.textContent = 'Large';
        tableHeader.appendChild(largeDrinkLabel);

        softDrinksTable.appendChild(tableHeader);

        // Setup row for prices for each size
        const drinkPricesRow = document.createElement('tr');

        const smallDrinkPrice = document.createElement('td');
        smallDrinkPrice.textContent = '$1.49';
        drinkPricesRow.appendChild(smallDrinkPrice);

        const mediumDrinkPrice = document.createElement('td');
        mediumDrinkPrice.textContent = '$1.99';
        drinkPricesRow.appendChild(mediumDrinkPrice);

        const largeDrinkPrice = document.createElement('td');
        largeDrinkPrice.textContent = '$2.49';
        drinkPricesRow.appendChild(largeDrinkPrice);

        softDrinksTable.appendChild(drinkPricesRow);
        softDrinksContainer.appendChild(softDrinksTable);
        parentContainer.appendChild(softDrinksContainer);
    }
}