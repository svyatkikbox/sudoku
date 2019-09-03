export default class Cell extends HTMLElement {
  constructor(props) {
    super(props);
    
    this.classList = props.classList;
    this.innerText = props.innerText;
    this.id = props.id;
  }

  connectedCallback() {
  }
}

customElements.define('matrix-cell', Cell);