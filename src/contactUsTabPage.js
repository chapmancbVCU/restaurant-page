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
        mainContent.classList.add('main-content');
        this.container.appendChild(mainContent);

        // Setup title
        const pageTitle = document.createElement('h2');
        pageTitle.textContent = 'Contact Us';
        mainContent.appendChild(pageTitle);

        // Contact us intro
        ContactUs.contactIntro(mainContent);

        // Contact info
        ContactUs.contactInfo(mainContent);
    }

    static contactInfo(parentContainer) {
        const contactInfo = document.createElement('h3');
        contactInfo.textContent = 'How To Reach Us';
        parentContainer.appendChild(contactInfo);

        const contactInfoContainer = document.createElement('div');
        contactInfoContainer.classList.add('paragraph-container');

        const phoneNumber = document.createElement('p');
        phoneNumber.textContent = 'Call Us: 123-456-7890';
        contactInfoContainer.appendChild(phoneNumber);

        const email = document.createElement('p');
        email.textContent = 'E-mail: burntpopcorn@fakedomain.com';
        contactInfoContainer.appendChild(email);

        parentContainer.appendChild(contactInfoContainer);
    }

    static contactIntro(parentContainer) {
        const contactUsContainer = document.createElement('div');
        contactUsContainer.classList.add('paragraph-container');

        const reachUs = document.createElement('p');
        reachUs.classList.add('contact-us');
        reachUs.textContent = "We value every customer's feedback.  Whether it be complements or otherwise, you can reach us through many different methods including social media or in person at our location in downtown Westchestertonfieldville.";
        contactUsContainer.appendChild(reachUs);

        const catering = document.createElement('p');
        catering.classList.add('contact-us');
        catering.textContent = "We also offer catering services and our food truck operates daily at the local college campus.";
        contactUsContainer.appendChild(catering);

        parentContainer.appendChild(contactUsContainer);

    }
}