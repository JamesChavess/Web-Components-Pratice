class helloWorld extends HTMLElement{
    constructor(){
        super();
        this.name;
        this.surname;
    }

    static get observedAttributes(){
        return ['name','surname'];
    }

    attributeChangedCallback(nameAtr, oldValue, newValue){
        switch(nameAtr){
            case 'name':
                this.name = newValue;
            break;
            case 'surname':
                this.surname = newValue;
            break;
        }
    }

    connectedCallback(){
        this.innerHTML = `<div>
        <h1>hello ${this.name} ${this.surname}</h1>
        <p>This is a paragraph</p>
        </div>`;
        this.style.color = "blue";
    }

}

window.customElements.define("hello-world",helloWorld);