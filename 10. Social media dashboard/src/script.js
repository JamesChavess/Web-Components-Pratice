
// data to be used to fill in the cards dynamically

const DASHBOARDCARDS = [
    ["facebook", "./img/icon-facebook.svg", "@nathanf", "1987", "FOLLOWERS", "positive-number", "12 Today"],
    ["twitter","./img/icon-twitter.svg", "@nathanf", "1044", "FOLLOWERS", "positive-number", "99 Today"],
    ["instagram","./img/icon-instagram.svg", "@realnathanf", "11k", "FOLLOWERS", "positive-number", "1099 Today"],
    ["youtube","./img/icon-youtube.svg", "Nathan F.", "8239", "SUBSCRIBERS", "negative-number", "144 Today"]
]

const OVERVIEWCARDS = [
    ["facebook", "Page Views", "87", "./img/icon-facebook.svg", "positive-number", "3%"],
    ["facebook","Likes", "52", "./img/icon-facebook.svg", "negative-number", "2%"],
    ["instagram","Likes", "5462", "./img/icon-instagram.svg", "positive-number", "2257%"],
    ["instagram","Profile Views", "52k", "./img/icon-instagram.svg", "positive-number", "1375%"],
    ["twitter","Retweets", "117", "./img/icon-twitter.svg", "positive-number", "303%"],
    ["twitter","Likes", "507", "./img/icon-twitter.svg", "positive-number", "553%"],
    ["youtube","Likes", "107", "./img/icon-youtube.svg", "negative-number", "19%"],
    ["youtube","Total Views", "1407", "./img/icon-youtube.svg", "negative-number", "12%"]
]

//using the HTML ELEment we create a class and uisng the provided methods we get and set

class dashboardCard extends HTMLElement{
    constructor(){
        super();
    }
    get account(){ return this.getAttribute("account-info");}
    get img(){ return this.getAttribute("img");}
    get user(){ return this.getAttribute("user");}
    get number(){ return this.getAttribute("number");}
    get people(){ return this.getAttribute("people");}
    get state(){ return this.getAttribute("state");}
    get stateNum(){ return this.getAttribute("stateNum");}

    set account(val){this.setAttribute("account-info", val);}
    set title(val){this.setAttribute("title", val)};
    set number(val){this.setAttribute("number", val)};
    set img(val){this.setAttribute("img", val)};
    set state(val){this.setAttribute("state", val)};
    set stateNum(val){this.setAttribute("stateNum", val)};

    static get observedAttributes(){ 
        return ["img","user","number","people","state","statenum"];
    }

    attributeChangedCallback(){
        this.render();
    }
    connectedCallback(){
        this.render();
    }
    render(){
        this.innerHTML = `
        <article class="dCard-user">
                    <img src="${this.img}">
                    <span>${this.user}</span>
                </article>
        
                <span class="dCard-number">${this.number}</span>
                <span class="dCard-people">${this.people}</span>
                <span class="${this.state}">${this.stateNum}</span>`
    }
}

class overviewCard extends HTMLElement{
    constructor(){
        super();
    }
    get account(){return this.getAttribute("data-account");}
    get title(){return this.getAttribute("title");}
    get number(){return this.getAttribute("number");}
    get img(){return this.getAttribute("img");}
    get state(){return this.getAttribute("state");}
    get stateNum(){return this.getAttribute("stateNum");}

    set account(val){this.setAttribute("data-account", val);}
    set title(val){this.setAttribute("title", val)};
    set number(val){this.setAttribute("number", val)};
    set img(val){this.setAttribute("img", val)};
    set state(val){this.setAttribute("state", val)};
    set stateNum(val){this.setAttribute("stateNum", val)};

    static get observedAttributes(){return ["title","number","img","state","statenum"]}

    attributeChangedCallback(){
        this.render();
    }

    connectedCallback(){ 
        this.render();      
    }
    render(){
        this.innerHTML = `
        <div class="oColumn1">
            <span class="oCard-title">${this.title}</span>
            <span class="oCard-number">${this.number}</span>
        </div>
        <div class="oColumn2">
            <img src="${this.img}"/>
            <span class="${this.state}">${this.stateNum}</span>
        </div>
         
        `
    }
}

window.customElements.define('dashboard-card', dashboardCard);
window.customElements.define('overview-card', overviewCard); 

/// why do the elements a asisgn come back without the camel casing assigned

function Fill(){
    let dashboards = document.querySelectorAll('.dCard');
    let overviewCards = document.querySelectorAll('.oCard');
    let attributes = ["account-info", "img", "user", "number", "people", "state", "stateNum"];
    let attributes2 = ["account-info", "title", "number", "img", "state", "stateNum"];
    DASHBOARDCARDS.forEach( (item, index) => {
        let current = dashboards[index];
        item.forEach( (item, index) => {
            current.setAttribute(attributes[index], item);
        })  
    })

    OVERVIEWCARDS.forEach( (item, index) => {
        let current = overviewCards[index];
        item.forEach( (item, index) => {
            current.setAttribute(attributes2[index], item);
        })
    })

}

Fill();

let theme = document.getElementById("style");
let themeSwitch = document.getElementById("buttonWrapper");
let lightTheme = true;

themeSwitch.addEventListener("click", () => {
    if(lightTheme == true) {
        theme.href = "./src/darkMode.css";
        lightTheme = false;
    }
    else {
        theme.href = "./src/styles.css";
        lightTheme = true
    }
})