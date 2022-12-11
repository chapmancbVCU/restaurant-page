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

    /**
     * This method is responsible for rendering the contact information 
     * section.
     * @param {HTMLDivElement} parentContainer the container that is the 
     * parent for all of the elements that will be created with this method.
     */
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

    /**
     * This method is responsible for rendering the introduction section of 
     * the Contact Us tab of the website.
     * @param {HTMLDivElement} parentContainer the container that is the 
     * parent for all of the elements that will be created with this method.
     */
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

    /**
     * Function that receives number as an input and formats it based on the 
     * length.  For strings less than three it does nothing. For values less 
     * than 7 you get a formatted string that looks like xxx-xxx.  If the 
     * input string is more than 7 then the formatted string looks like 
     * xxx-xxx-xx.  Client side validation is recommened as well.  
     * 
     * Do not call this function directly within the html file.  The 
     * phoneNumberFormatter function will be used to call this function in 
     * order to set the correct format.
     * @param {string} value the string of numbers
     * @returns The properly formatted string based on length.
     */
    formatPhoneNumber(value) {
        // If input is falsy eg if the suer delets the input, then just return.
        if(!value) return value;
    
        // Clean the input for any non-digit values.
        const phoneNumber = value.replace(/[^\d]/g, '');
    
        /* phoneNumberLength is used to know when to apply or formatting for the
           phone number. */
        const phoneNumberLength = phoneNumber.length;
    
        /* We need to return the value with no formatting if its less than four
           digits.  This is to avoid weird behavior that occurs if you format
           the area code too early. */
        if(phoneNumberLength < 4) {
            return phoneNumber;
        }
    
        /* If phoneNumberLength is greater than 4 and less than 7 we start to
           return the formatted number. */
        if(phoneNumberLength < 7) {
            return `${phoneNumber.slice(0,3)}-${phoneNumber.slice(3)}`;
        }
    
        /* Finally, if the phoneNumberLength is greater than seven, we add the 
           last bit of formatting and return it. */
        return `${phoneNumber.slice(0,3)}-${phoneNumber.slice(
            3,
            6,
        )}-${phoneNumber.slice(6,9)}`;
    }

    /**
     * This method displays the form that allows the user to inquiry 
     * about services.
     * @param {HTMLDivElement} parentContainer the container that is the 
     * parent for all of the elements that will be created with this method.
     */
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

        // Phone number
        const phoneNumber = document.createElement('div');
        phoneNumber.classList.add('form-row');

        const phoneNumberLabel = document.createElement('label');
        phoneNumberLabel.setAttribute('for', 'phone');
        phoneNumberLabel.textContent = 'Phone Number';
        phoneNumber.appendChild(phoneNumberLabel);

        const phoneNumberInpuut = document.createElement('input');
        phoneNumberInpuut.setAttribute('id', 'phone');
        phoneNumberInpuut.setAttribute('name', 'phone');
        phoneNumberInpuut.setAttribute('type', 'tel');
        phoneNumberInpuut.setAttribute('pattern', '[0-9]{3}-[0-9]{3}-[0-9]{4}');
        phoneNumberInpuut.setAttribute('minlength', '12');
        phoneNumberInpuut.setAttribute('maxlength', '12');
        phoneNumberInpuut.setAttribute('placeholder', 'ex: 123-456-7890');
        phoneNumber.appendChild(phoneNumberInpuut);
        form.appendChild(phoneNumber);

        const hearAboutUs = document.createElement('p');
        hearAboutUs.textContent = 'How did you hear about us?';



        
        form.appendChild(hearAboutUs);


        formContainer.appendChild(form);
        parentContainer.appendChild(formContainer);

        

        
    }
}

