import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Characters</h1>

        <ul>
          <li>
            <a href="/characters">List all characters</a>
          </li>
          <li>
            <a href="/characters?sort=true">
              List all characters in order of number of appearances
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
