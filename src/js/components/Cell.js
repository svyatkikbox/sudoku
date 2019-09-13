export default class Cell extends HTMLElement {
  constructor(props) {
    super(props);

    this.classList = props.classList;
    this.innerText = props.innerText;

    if (this.innerText === '?') {
      this.style.color = 'salmon';
    }

    this.id = props.id;

    this.onclick = () => {
      console.log('this.innerText:', this.innerText);
      console.log('this.id:', this.id);
      console.log('i:', i);
      console.log('j:', j);
      const [i, j] = [...this.id];
    }
  }

  connectedCallback() {
  }
}

customElements.define('matrix-cell', Cell);