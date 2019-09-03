export default class Row extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.style.display = 'block';
  }
}

customElements.define('matrix-row', Row);