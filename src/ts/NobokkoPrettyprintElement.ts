import NobokkoPrettyprintTemplate from './NobokkoPrettyprintTemplate';

export default class NobokkoPrettyprintElement extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.rewrite();
    }

    static get observedAttributes() {
        return [
            'display-line',
        ];
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        switch (name) {
            case 'display-line':
                {
                    let oV : boolean = (oldValue ?? 'true').toLowerCase() != 'false';
                    let nV : boolean = (newValue ?? 'true').toLowerCase() != 'false';

                    if (oV != nV) {
                        this.rewrite();
                    }
                }
                break;
        }
    }

    rewrite() : void {
        const shadowRoot = this.shadowRoot ?? this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = NobokkoPrettyprintTemplate;
        // console.log('' + this.filename);
        // console.log('' + this.source);
        // console.log('' + this.displayLine);
        // for (let shadowRootStyleSheet of shadowRoot.styleSheets) {
        //     for (let shadowRootStyleSheetCssRules of shadowRootStyleSheet.cssRules) {
        //         if (shadowRootStyleSheetCssRules instanceof CSSStyleRule) {
        //             let rule = <CSSStyleRule>shadowRootStyleSheetCssRules;
        //             if ('nobokko-prittyprint-line::before' == rule.selectorText) {
        //                 rule.cssText = this.displayLine ? '"" counter(line) "xxx"' : '';
        //             }
        //         }
        //     }
        // }

        let srcEle = document.createElement('div');
        srcEle.innerHTML = this.source
            .replace(/^[ \t]*\n/, '')
            .replace(/\n[ \t]*$/, '')
            .replace(/&lt;/g, '<')
            .split("\n")
            .flatMap((line) => {
                let o = document.createElement('div');
                o.innerText = line;

                return o.innerHTML;
            })
            .flatMap((line) => {return line.replace(/^$/,'&nbsp;');})
            .flatMap((line) => {return line.replace(/ /g, '&nbsp;');})
            .flatMap((line, index) => {
                return `<nobokko-prittyprint-line data-line="${index+1}"${this.displayLine ? ` data-display-prefix="${index+1}"` : ''}>`+line+'</nobokko-prittyprint-line>';
            })
            .join("\n");

        shadowRoot.querySelectorAll('#source').forEach((ele) => {
            ele.appendChild(srcEle);
        });
    }

    get displayLine() : boolean {
        return (this.getAttribute('display-line') ?? 'true').toLowerCase() != 'false';
    }

    set displayLine(newValue : boolean) {
        let oldValue: boolean = (this.getAttribute('display-line') ?? 'true').toLowerCase() != 'false';
        if (oldValue != newValue) {
            this.setAttribute('display-line', newValue ? 'true' : 'false');
        }
    }

    get source() : string {
        let ele:HTMLSlotElement = <HTMLSlotElement>(this.shadowRoot?.querySelectorAll('slot[name="source"]')[0]) ?? document.createElement('slot');

        return (<HTMLElement>(ele?.assignedElements()[0]))?.innerText ?? '';
    }

    get filename() : string {
        let ele:HTMLSlotElement = <HTMLSlotElement>(this.shadowRoot?.querySelectorAll('slot[name="filename"]')[0]) ?? document.createElement('slot');

        return (<HTMLElement>(ele?.assignedElements()[0]))?.innerText ?? '';
    }
}
