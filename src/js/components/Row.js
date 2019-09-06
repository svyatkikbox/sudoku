export default class Row extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
  }
}

customElements.define('matrix-row', Row);