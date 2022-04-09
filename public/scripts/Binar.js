class Component {
  constructor(props) {
    if (this.constructor === Component) {
      throw new Error("Cannot instantiate directly from abstract Class");
    }
  }
  render() {
    //  overrided in Car.js
  }
}
