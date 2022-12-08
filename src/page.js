export class Page {

    constructor() {
        this.container = document.querySelector('#content');
    }
    
    eraseDomContent() {
        const elements = document.getElementById('main');
        elements.remove();
    }
}