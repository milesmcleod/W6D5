import React from 'react';

class AutoComplete extends React.Component {

  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  updateText(text) {
    this.setState({text});
  }

  render () {
    const selectedNames = [];
    this.props.names.forEach((name) => {
      if (name.includes(this.state.text)) selectedNames.push(name);
    });
    return (
      <div className = "auto-complete">
        <div>
          <input
            onChange={(event) => this.updateText(event.currentTarget.value)}
            type="text"
            placeholder="search for names..."/>
        </div>
        <ul>
          {
            selectedNames.map(name => <li key={name}>{name}</li>)
          }
        </ul>
      </div>
    );
  }

}

module.exports = AutoComplete;
