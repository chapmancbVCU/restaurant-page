export class Page {

    constructor() {
        this.container = document.querySelector('#content');
    }
    
    eraseDomContent() {
        const elements = document.getElementById('main');
        elements.remove();
    }

    footerComponents() {
        const footer = document.createElement('div');
        footer.setAttribute('id', 'footer');
        footer.classList.add('page-footer');
        const text = document.createElement('p');
        text.textContent = 'afdafa';
        footer.appendChild(text);
        this.container.appendChild(footer);
        return footer;
    }

    headerComponents() {
        const pageContent = document.createElement('div');
        pageContent.classList.add('header');
    
        const title = document.createElement('h1');
        title.textContent = 'Burnt Popcorn Eatery';
    
        pageContent.appendChild(title);
        
        // Setup tabs
        const list = document.createElement('ul');
        list.classList.add('tabs');
    
        // Setup home link
        const homeTab = document.createElement('li');
        homeTab.setAttribute('id', 'home-tab');
        homeTab.textContent = 'Home';
        list.appendChild(homeTab);
    
        // Setup menu link
        const menuTab = document.createElement('li');
        menuTab.setAttribute('id', 'menu-tab');
        menuTab.textContent = "Menu";
        list.appendChild(menuTab);
    
        // Setup contact us
        const contactUsTab = document.createElement('li');
        contactUsTab.setAttribute('id', 'contact-us-tab');
        contactUsTab.textContent = "Contact Us";
        list.appendChild(contactUsTab);
    
        pageContent.appendChild(list);
    
        return pageContent;
    }
    removeFooterFromDom() {
        const footer = document.getElementById('footer');
        footer.remove();
        return;
    }
}