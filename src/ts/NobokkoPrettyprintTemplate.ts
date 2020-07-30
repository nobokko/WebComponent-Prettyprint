const NobokkoPrettyprintTemplate = `
<style>
root{
    display: block;
    color: #000000;
    background-color: #ff88ff;
    border-radius: 1em;
    box-shadow: 0 1em 1em 0 rgba(255, 255, 255, .2);
    padding:1em;
    margin: 1em;
}
h1 {
    margin:0;
}
div {
    color: #ffffff;
    background-color: #000000;
    border-radius: 1em;
    box-shadow: 0 1em 1em 0 rgba(0, 0, 64, .2);
    padding:1em;
    margin: 1em;
}
::slotted([slot="source"]) {
    white-space : pre;
}
#source {
    counter-reset: line;
}
nobokko-prittyprint-line {
    display: block;
    position: relative;
    padding: 0 0 0 5em;
    font-family: Consolas, 'Courier New', Courier, Monaco, monospace;
}
nobokko-prittyprint-line:before {
    font-size: 1em;
    counter-increment: line;
    content: "" attr(data-display-prefix) "";
    margin: 0 1em 0 0;
    padding: 0 1em 0 0;
    width: 3em;
    display:inline-block;
    position: absolute;
    height: 100%;
    left: 0;
    text-align: right;
}
nobokko-prittyprint-line:nth-child(odd) {
    background-color: #222222;
}
nobokko-prittyprint-line:nth-child(even) {
    background-color: #111111;
}
nobokko-prittyprint-line:nth-child(odd):before {
    background-color: #444444;
}
nobokko-prittyprint-line:nth-child(even):before {
    background-color: #333333;
}
</style>
<root>
<h1><slot name="filename">filename</slot></h1>
<div id="source">
<slot name="source" style="display:none;"></slot>
</div>
</root>
`;

export default NobokkoPrettyprintTemplate;
