import { Component } from "react";

export default class PersistedComponent extends Component {
  constructor(
    props,
    storageKey,
    storage = (window && window.sessionStorage) || {}
  ) {
    super(props);
    this.storageKey = storageKey || this.constructor.name;
    console.log("*****", storageKey);
    console.log("#####", this.constructor.name, this.storageKey);
    this.storage = storage;
    try {
      this.state = JSON.parse(this.storage.getItem(this.storageKey));
    } catch (err) {}
  }

  getState() {
    return this.state;
  }

  setState(state, callback) {
    super.setState(state, () => {
      try {
        this.storage.setItem(this.storageKey, JSON.stringify(this.state));
      } catch (err) {}
      (callback || (() => {}))();
    });
  }
}
