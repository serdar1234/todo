import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './NewBtn.css';

export default class NewBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
    };
  }

  render() {
    const { onCreate } = this.props;
    const { userInput } = this.state;
    const onInputChange = (evt) => {
      this.setState({
        userInput: evt.target.value,
      });
    };

    const onFormSubmit = (evt) => {
      evt.preventDefault();
      if (userInput) {
        onCreate(userInput);
        this.setState({ userInput: '' });
      }
    };

    return (
      <form className="new-btn d-flex" onSubmit={onFormSubmit}>
        <input
          type="text"
          className="form-control"
          onChange={onInputChange}
          value={userInput}
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
