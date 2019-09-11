export default class Row extends HTMLElement {
  constructor(props) {
    super(props);

    this.classList = props.classList;
  }

  connectedCallback() {
  }
}

customElements.define('matrix-row', Row);