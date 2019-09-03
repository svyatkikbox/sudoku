export default class Cell extends HTMLElement {
  constructor() {
    super();
  }

}

customElements.define('matrix-cell', Cell);