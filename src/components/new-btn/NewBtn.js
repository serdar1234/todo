import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './NewBtn.css';

export default class NewBtn extends Component {
  state = {
    userInput: '',
  };
  onCreate = this.props.onCreate;

  onInputChange = (evt) => {
    this.setState({
      userInput: evt.target.value,
    });
  };

  onFormSubmit = (evt) => {
    evt.preventDefault();
    if (this.state.userInput) {
      this.onCreate(this.state.userInput);
      this.setState({ userInput: '' });
    }
  };

  render() {
    return (
      <form className="new-btn d-flex" onSubmit={this.onFormSubmit}>
        <input
          type="text"
          className="form-control"
          onChange={this.onInputChange}
          value={this.state.userInput}
          placeholder="new to-do task"
        />
        <button type="submit" className="btn btn-outline-warning btn-sm float-right">
          Add
        </button>
      </form>
    );
  }
}

NewBtn.propTypes = {
  onCreate: PropTypes.func,
};

NewBtn.defaultProps = {
  onCreate: () => {},
};
