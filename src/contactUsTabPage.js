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

        // Form
        ContactUs.moreInfo(mainContent);
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

    static moreInfo(parentContainer) {
        const moreInfo = document.createElement('h3');
        moreInfo.textContent = 'More Info';
        parentContainer.appendChild(moreInfo);

        const formContainer = document.createElement('div');
        formContainer.classList.add('form-container');

        const moreInfoMessage = document.createElement('h4');
        moreInfoMessage.textContent = "Join our mailing list or inquire for more information about our services";
        formContainer.appendChild(moreInfoMessage);

        const form = document.createElement('form');
        form.action = ' ';
        form.method = 'get';
        form.classList.add('info-form');

        // Name
        const fullName = document.createElement('div');
        fullName.classList.add('form-row');

        const fullNameLabel = document.createElement('label');
        fullNameLabel.setAttribute('for', 'full-name');
        fullNameLabel.textContent = 'Name';
        fullName.appendChild(fullNameLabel);

        const fullNameInput = document.createElement('input');
        fullNameInput.setAttribute('id', 'full-name');
        fullNameInput.setAttribute('name', 'full-name');
        fullNameInput.setAttribute('type', 'text');
        fullName.append(fullNameInput);
        form.appendChild(fullName);
        
        // Email
        const email = document.createElement('div');
        email.classList.add('form-row');

        const emailLabel = document.createElement('label');
        emailLabel.setAttribute('for', 'email');
        emailLabel.textContent = 'E-mail';
        email.appendChild(emailLabel);

        const emailInput = document.createElement('input');
        emailInput.setAttribute('id', 'email');
        emailInput.setAttribute('name', 'email');
        emailInput.setAttribute('type', 'email');
        emailInput.placeholder = 'joe@example.com';
        email.appendChild(emailInput);
        form.appendChild(email);
        
        formContainer.appendChild(form);
        parentContainer.appendChild(formContainer);
    }
}