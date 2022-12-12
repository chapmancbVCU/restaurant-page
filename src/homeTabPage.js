/******************************************************************************
 *         Name: homeTabPage.js
 *       Author: Chad Chapman
 * Date Created: December 6, 2022
 *  Description: Provides ability to render components of home tab.
******************************************************************************/

/******************************************************************************
 * IMPORTS
 *****************************************************************************/
import { Page } from "./page";
import PopcornBowl from './popcorn_bowl.jpg';
import PopcornMug from './popcorn_mug.jpg';

/**
 * This class describes the methods for updating the main home page.  It 
 * extends the Page class.
 */
export class Home extends Page {
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
        pageTitle.textContent = 'Welcome';
        mainContent.appendChild(pageTitle);

        // About us
        Home.aboutUs(mainContent);

        // Add popcorn bowl image
        Home.renderPopcornBowl(mainContent);

        // Describe hours
        const hoursHeader = document.createElement('h3');
        hoursHeader.textContent = 'Hours';
        mainContent.appendChild(hoursHeader);
        const hoursContainer = document.createElement('div');
        hoursContainer.classList.add('hours-container');
        Home.hours(hoursContainer);
        mainContent.appendChild(hoursContainer);

        // Add popcorn mug image
        Home.renderPopcornMug(mainContent);

        // Location
        Home.location(mainContent);
    }

    /**
     * This function is responsible for rendering the first paragraph of the 
     * webpage that describes the business.
     * @param {HTMLDivElement} parentContainer the container that is the 
     * parent for all of the elements that will be created with this method.
     */
    static aboutUs(parentContainer) {
        const aboutUsContainer = document.createElement('div');
        aboutUsContainer.classList.add('paragraph-container');

        const aboutUs = document.createElement('p');
        aboutUs.classList.add('about-us');
        aboutUs.textContent = 'At Burnt Popcorn Eatery we offer different types of popcorn but our specialty is burnt popcorn.  We also offer several types of delicious beverages and smoothies that are perfect for washing down our delicious snacks.';
        aboutUsContainer.appendChild(aboutUs);

        const catering = document.createElement('p');
        catering.classList.add('about-us');
        catering.textContent = "We also offer catering services and our food truck operates daily at the local college campus.";
        aboutUsContainer.appendChild(catering);

        parentContainer.appendChild(aboutUsContainer);
    }

    /**
     * This function is responsible for rendering the hours section.
     * @param {HTMLDivElement} parentContainer the container that is the 
     * parent for all of the elements that will be created with 
     * this method.
     */
    static hours(parentContainer) {
        const sunday = document.createElement('p');
        sunday.textContent = 'Sunday: Closed';
        sunday.classList.add('daily-hours');
        parentContainer.appendChild(sunday);

        const monday = document.createElement('p');
        monday.textContent = 'Monday: 3PM - 10PM';
        monday.classList.add('daily-hours');
        parentContainer.appendChild(monday);

        const tuesday = document.createElement('p');
        tuesday.textContent = 'Tuesday: 3PM - 10PM';
        tuesday.classList.add('daily-hours');
        parentContainer.appendChild(tuesday);

        const wednesday = document.createElement('p');
        wednesday.textContent = 'Wednesday: 3PM - 10PM';
        wednesday.classList.add('daily-hours');
        parentContainer.appendChild(wednesday);

        const thursday = document.createElement('p');
        thursday.textContent = 'Thursday: 3PM - 10PM';
        thursday.classList.add('daily-hours');
        parentContainer.appendChild(thursday);

        const friday = document.createElement('p');
        friday.textContent = 'Friday: 3PM - 11PM';
        friday.classList.add('daily-hours');
        parentContainer.appendChild(friday);

        const saturday = document.createElement('p');
        saturday.textContent = 'Saturday: 11AM - 10PM';
        saturday.classList.add('daily-hours');
        parentContainer.appendChild(saturday);
    }

    /**
     * This method is responsible for rendering the location section of the 
     * webpage.
     * @param {HTMLDivElement} parentContainer the container that is the 
     * parent for all of  the elements that will be created with this method.
     */
    static location(parentContainer) {
        const address = document.createElement('h3');
        address.textContent = 'Visit Us';
        parentContainer.appendChild(address);

        const locationContainer = document.createElement('div');
        locationContainer.classList.add('location-info');

        const street = document.createElement('p');
        street.textContent = '123 Main Street';
        street.classList.add('address');
        locationContainer.appendChild(street);

        const cityStateZip = document.createElement('p');
        cityStateZip.textContent = 'Westchestertonfieldville, USA 12345';
        cityStateZip.classList.add('address');
        locationContainer.appendChild(cityStateZip);

        parentContainer.appendChild(locationContainer);
    }

    /**
     * This method is responsible for rendering image of a bowl of popcorn.
     * @param {HTMLDivElement} parentContainer the container that is the 
     * parent for all of  the elements that will be created with this method.
     */
    static renderPopcornBowl(parentContainer) {
        const popCornBowlImage = new Image();
        popCornBowlImage.classList.add('rectangle-image');
        popCornBowlImage.src = PopcornBowl;
        parentContainer.appendChild(popCornBowlImage);
    }

    /**
     * This method is responsible for rendering image of popcorn in a mug.
     * @param {HTMLDivElement} parentContainer the container that is the 
     * parent for all of  the elements that will be created with this method.
     */
    static renderPopcornMug(parentContainer) {
        const popCornMugImage = new Image();
        popCornMugImage.classList.add('popcorn-mug-image');
        popCornMugImage.src = PopcornMug;
        parentContainer.appendChild(popCornMugImage);
    }
}