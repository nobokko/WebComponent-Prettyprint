import NobokkoPrettyprintTemplate from './NobokkoPrettyprintTemplate';

export default class NobokkoPrettyprintElement extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = NobokkoPrettyprintTemplate;
    }

    connectedCallback() {
        console.log('' + this.filename);
        console.log('' + this.source);
    }

    static get observedAttributes() {
        return [];
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    }

    get source() : string {
        let ele:HTMLSlotElement = <HTMLSlotElement>(this.shadowRoot?.querySelectorAll('slot[name="source"]')[0]) ?? document.createElement('slot');

        return (<HTMLElement>(ele?.assignedElements()[0]))?.innerHTML ?? '';
    }

    get filename() : string {
        let ele:HTMLSlotElement = <HTMLSlotElement>(this.shadowRoot?.querySelectorAll('slot[name="filename"]')[0]) ?? document.createElement('slot');

        return (<HTMLElement>(ele?.assignedElements()[0]))?.innerText ?? '';
    }
}
