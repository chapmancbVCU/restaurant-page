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
        aboutUs.classList.add('page-section-paragraph');
        aboutUs.textContent = 'At Burnt Popcorn Eatery we offer different types of popcorn but our specialty is burnt popcorn.  We also offer several types of delicious beverages and smoothies that are perfect for washing down our delicious snacks.';
        mainContent.appendChild(aboutUs);

        // Describe hours
        const hoursHeader = document.createElement('h3');
        hoursHeader.textContent = 'Hours';
        mainContent.appendChild(hoursHeader);

        const hoursContainer = document.createElement('div');
        hoursContainer.classList.add('hours-container');
        Home.hours(hoursContainer);





        mainContent.appendChild(hoursContainer);
    }

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
        saturday.textContent = 'Saturday: 11PA - 10PM';
        saturday.classList.add('daily-hours');
        parentContainer.appendChild(saturday);
    }
}