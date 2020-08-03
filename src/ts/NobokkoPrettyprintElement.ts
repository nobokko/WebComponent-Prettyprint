import NobokkoPrettyprintTemplate from './NobokkoPrettyprintTemplate';
import NobokkoPrettyprintExtensionInterface from './NobokkoPrettyprintExtensionInterface';
import Yaml from './extensions/Yaml';

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
            'extension',
            'no-break-line',
        ];
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        switch (name) {
            case 'display-line':
                {
                    let oV: boolean = (oldValue ?? 'true').toLowerCase() != 'false';
                    let nV: boolean = (newValue ?? 'true').toLowerCase() != 'false';

                    if (oV != nV) {
                        this.rewrite();
                    }
                }
                break;
            case 'no-break-line':
                {
                    let oV: boolean = (oldValue ?? 'false').toLowerCase() != 'false';
                    let nV: boolean = (newValue ?? 'false').toLowerCase() != 'false';

                    if (oV != nV) {
                        this.rewrite();
                    }
                }
                break;
            case 'extension':
                {
                    let oV: string = (oldValue ?? 'txt');
                    let nV: string = (newValue ?? 'txt');

                    if (oV != nV) {
                        this.rewrite();
                    }
                }
                break;
        }
    }

    rewrite(): void {
        const shadowRoot = this.shadowRoot ?? this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = NobokkoPrettyprintTemplate;
        // console.log('' + this.filename);
        // console.log('' + this.source);
        // console.log('' + this.displayLine);
        for (let shadowRootStyleSheet of shadowRoot.styleSheets) {
            for (let shadowRootStyleSheetCssRules of shadowRootStyleSheet.cssRules) {
                if (shadowRootStyleSheetCssRules instanceof CSSStyleRule) {
                    let rule = <CSSStyleRule>shadowRootStyleSheetCssRules;
                    if ('nobokko-prittyprint-line' == rule.selectorText) {
                        if (this.noBreakLine) {
                            rule.style.wordBreak = 'normal';
                            rule.style.whiteSpace = 'nowrap';
                        } else {
                            rule.style.wordBreak = 'break-all';
                            rule.style.whiteSpace = 'normal';
                        }
                        // rule.style.cssText = '';
                    }
                }
            }
        }

        let box: { [key: string]: NobokkoPrettyprintExtensionInterface; } = {};
        box['yml'] = new Yaml();
        box['yaml'] = new Yaml();

        let srcEle = document.createElement('div');
        let innerHTML = this.source;
        innerHTML = (code => {
            return code
                .replace(/^[ \t]*\n/, '')
                .replace(/\n[ \t]*$/, '')
                .replace(/&lt;/g, '<');
        })(innerHTML);
        innerHTML = (box[this.extension]?.beforeSplitCode(innerHTML)) ?? innerHTML;
        let lines = innerHTML.split("\n");
        lines = (l => {
            let prespacenum = Number.MAX_SAFE_INTEGER;

            return l
                .flatMap((line) => {
                    let o = document.createElement('div');
                    o.innerText = line;

                    return o.innerHTML;
                })
                .flatMap((line) => {
                    if (line.length) {
                        let n = ((/^( +)/).exec(line)?.[1].length) ?? 0;
                        if (n < prespacenum) {
                            prespacenum = n;
                        }
                    }

                    return line;
                })
                .flatMap((line) => { return line.replace(new RegExp(`^ {${prespacenum}}`), ''); })
                .flatMap((line) => { return line.replace(/^$/, '&nbsp;'); })
                .flatMap((line) => { return line.replace(/ /g, '&nbsp;'); });
        })(lines);
        lines = (box[this.extension]?.beforeJoinCode(lines)) ?? lines;
        srcEle.innerHTML = lines
            .flatMap((line, index) => {
                return `<nobokko-prittyprint-line data-line="${index + 1}"${this.displayLine ? ` data-display-prefix="${index + 1}"` : ''}>` + line + '</nobokko-prittyprint-line>';
            })
            .join("\n");

        shadowRoot.querySelectorAll('#source').forEach((ele) => {
            ele.appendChild(srcEle);
        });
    }

    get displayLine(): boolean {
        return (this.getAttribute('display-line') ?? 'true').toLowerCase() != 'false';
    }

    set displayLine(newValue: boolean) {
        let oldValue: boolean = (this.getAttribute('display-line') ?? 'true').toLowerCase() != 'false';
        if (oldValue != newValue) {
            this.setAttribute('display-line', newValue ? 'true' : 'false');
        }
    }

    get noBreakLine(): boolean {
        return (this.getAttribute('no-break-line') ?? 'false').toLowerCase() != 'false';
    }

    set noBreakLine(newValue: boolean) {
        let oldValue: boolean = (this.getAttribute('no-break-line') ?? 'true').toLowerCase() != 'false';
        if (oldValue != newValue) {
            this.setAttribute('no-break-line', newValue ? 'true' : 'false');
        }
    }

    get extension(): string {
        return (this.getAttribute('extension') ?? 'txt').toLocaleLowerCase();
    }

    set extension(newValue: string) {
        let oldValue: string = (this.getAttribute('extension') ?? 'txt');
        if (oldValue != newValue) {
            this.setAttribute('extension', newValue ?? 'txt');
        }
    }

    get source(): string {
        let ele: HTMLSlotElement = <HTMLSlotElement>(this.shadowRoot?.querySelectorAll('slot[name="source"]')[0]) ?? document.createElement('slot');

        return (<HTMLElement>(ele?.assignedElements()[0]))?.innerText ?? '';
    }

    get filename(): string {
        let ele: HTMLSlotElement = <HTMLSlotElement>(this.shadowRoot?.querySelectorAll('slot[name="filename"]')[0]) ?? document.createElement('slot');

        return (<HTMLElement>(ele?.assignedElements()[0]))?.innerText ?? '';
    }
}
