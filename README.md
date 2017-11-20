# react-persisted-component

This component persists the state of your component in the users session storage

## example usage
```javascript
import React from "react";
import PersistedComponent from "react-persisted-component";

// extend PersistedComponent instead of React.Component
class App extends PersistedComponent {
  constructor(props) {
    // call super with props and storage key
    super(props, "myStorageKey");

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
