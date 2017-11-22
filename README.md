# react-persisted-component

PersistedComponent automatically persists the state of a component into the browsers session-/localStorage. By default it uses the sessionStorage, but this is configurable as seen in the example below.


## example usage with sessionStorage (default) and localStorage
```javascript
import React from "react";
import PersistedComponent from "react-persisted-component";

// extend PersistedComponent instead of React.Component
class App extends PersistedComponent {
  constructor(props) {
    // use sessionStorage (default) and component name (in this case "App") as storageKey
    super(props);

    // use with custom storageKey
    // super(props, "myStorageKey");

    // use with custom storageKey and persist into localStorage
    // super(props, "myStorageKey", localStorage);

    const initialState = { count: 0 };
    // get persisted state
    this.state = super.getState() || initialState;
  }
  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          go
        </button>
      </div>
    );
  }
}

export default App;
```
