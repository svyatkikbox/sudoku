export default class Cell extends HTMLElement {
  connectedCallback() {
    console.log('added');
  }
}

customElements.define('matrix-cell', Cell);