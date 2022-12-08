export class Page {

    constructor() {
        this.container = document.querySelector('#content');
    }
    
    components() {

    }

    eraseDomContent() {
        const elements = document.getElementById('main');
        elements.remove();
    }
}