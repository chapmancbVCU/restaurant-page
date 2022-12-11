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
        moreInfoMessage.textContent = "Provide us feedback or inquire for more information about our services";
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

        // How did you hear about us?
        const hearAboutUsMessage = document.createElement('p');
        hearAboutUsMessage.classList.add('hear-about-us-message');
        hearAboutUsMessage.textContent = 'How did you hear about us?';
        form.appendChild(hearAboutUsMessage);

        const hearAboutUs = document.createElement('div');
        hearAboutUs.classList.add('form-row');

        const hearAboutUsLabel = document.createElement('label');
        hearAboutUsLabel.setAttribute('for', 'about-us');
        hearAboutUsLabel.textContent = 'Select One';
        hearAboutUs.appendChild(hearAboutUsLabel);

        const hearAboutUsSelect = document.createElement('select');
        hearAboutUsSelect.setAttribute('id', 'about-us');
        hearAboutUsSelect.setAttribute('name', 'about-us');

        const social = document.createElement('option')
        social.setAttribute('value', 'social-media');
        social.textContent = 'Social Media';
        hearAboutUsSelect.appendChild(social);

        const storeVisit = document.createElement('option');
        storeVisit.setAttribute('value', 'store-visit');
        storeVisit.textContent = 'Store Visit';
        hearAboutUsSelect.appendChild(storeVisit);

        const foodTruck = document.createElement('option');
        foodTruck.setAttribute('value', 'food-truck');
        foodTruck.textContent = 'Food Truck';
        hearAboutUsSelect.appendChild(foodTruck);

        const friendsOrFamily = document.createElement('option');
        friendsOrFamily.setAttribute('value', 'friends-or-family');
        friendsOrFamily.textContent = 'Friends or Family';
        hearAboutUsSelect.appendChild(friendsOrFamily);

        const other = document.createElement('option');
        other.setAttribute('value', 'other');
        other.textContent = 'Other';
        hearAboutUsSelect.appendChild(other);

        hearAboutUs.appendChild(hearAboutUsSelect);

        form.appendChild(hearAboutUs);

        // Comments
        const comments = document.createElement('div');
        comments.classList.add('form-row');

        const commentsLabel = document.createElement('label');
        commentsLabel.setAttribute('for', 'comments');
        commentsLabel.textContent = 'Write to Us';
        comments.appendChild(commentsLabel);

        const commentsTextArea = document.createElement('textarea');
        commentsTextArea.setAttribute('id', 'comments');
        commentsTextArea.setAttribute('name', 'comments');
        comments.appendChild(commentsTextArea);

        form.appendChild(comments);

        // Join E-mail list
        const mailList = document.createElement('div');
        mailList.classList.add('form-row');

        const mailListLabel = document.createElement('label');
        mailListLabel.classList.add('mail-list-label');
        mailListLabel.setAttribute('for', 'mail-list');

        const mailListCheckBox = document.createElement('input');
        mailListCheckBox.setAttribute('id', 'mail-list');
        mailListCheckBox.setAttribute('name', 'mail-list');
        mailListCheckBox.setAttribute('type', 'checkbox');
        mailListCheckBox.setAttribute('value', 'add-me-to-list');
        mailListLabel.appendChild(mailListCheckBox);

        const mailListMessage = document.createElement('span');
        mailListMessage.textContent = 'Add me to E-mail list';
        mailListLabel.appendChild(mailListMessage);
        mailList.appendChild(mailListLabel);

        form.appendChild(mailList);
        formContainer.appendChild(form);
        parentContainer.appendChild(formContainer); 
    }

    /**
     * Uses getElementbyId('phone') to get phone number input from webpage.  
     * The way this function works is we grab the value of what the user is 
     * typing into the input.  Next we format the value and set the value of 
     * the input field in the html document.
     */
    phoneNumberFormatter() {
        const userPhoneInput = document.getElementById('phone');
        userPhoneInput.addEventListener('keydown', () => {
            const formattedInputValue = 
                this.formatPhoneNumber(userPhoneInput.value);
            userPhoneInput.value = formattedInputValue;
        });
    }
}

