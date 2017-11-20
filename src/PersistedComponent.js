export default class PersistedComponent extends Component {
  constructor(props, storageKey) {
    super(props);
    this.storageKey = storageKey;
    try {
      this.state = JSON.parse(
        sessionStorage && sessionStorage.getItem(this.storageKey)
      );
    } catch (err) {}
  }

  getState() {
    return this.state;
  }

  setState(state, callback) {
    super.setState(state, () => {
      if (sessionStorage) {
        try {
          sessionStorage.setItem(this.storageKey, JSON.stringify(this.state));
        } catch (err) {}
      }
      callback();
    });
  }
}
