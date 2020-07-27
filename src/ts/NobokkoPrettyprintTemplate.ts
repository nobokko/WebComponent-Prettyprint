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
</style>
<root>
<h1><slot name="filename">filename</slot></h1>
<div>
<slot name="source"></slot>
</div>
</root>
`;

export default NobokkoPrettyprintTemplate;
