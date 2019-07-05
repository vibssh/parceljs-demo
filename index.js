import 'bulma/css/bulma.css'

const root = document.querySelector('#app');

const appender = (bucket, item) => {
    return bucket.append(item);
}

const createElement = (element, innerHTML, attribute, attributeValue) => {
    const el = document.createElement(element);
    el.innerHTML = innerHTML;
    if(attribute) {
        el.setAttribute(attribute, attributeValue)
    }
    return el;
}

const container = createElement('div', '', 'class', 'container');
const headingText = createElement('h1', 'Hello Worlds !', 'class', 'title');
const primaryButton = createElement('button', 'Primary Button', 'class', 'button is-primary' )


appender(root, container);
appender(container, headingText);
appender(container, primaryButton);

primaryButton.addEventListener('click', function(e) {
    e.preventDefault();
    console.log(e.target);
})