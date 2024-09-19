export default class Component {
  constructor(props = {}) {
    this.props = props;
    this.state = {};
    this.element = null;
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.update();
  }

  mount() {
    this.element = this.render();
    this.update();
    return this.element;
  }

  update() {
    if (this.element) {
      const newElement = this.render();
      this.element.replaceWith(newElement);
      this.element = newElement;
    }
  }

  render() {
    return document.createElement('div');
  }
}