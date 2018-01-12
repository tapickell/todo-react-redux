import React, { Component } from 'react';
import PropTypes from 'prop-types';


import './task-form.css';


export class TaskForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired
  };

  constructor() {
    super(...arguments);

    this.state = {title: '', timer: ''};

    this.handleTimerChange = this.handleTimerChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  clearInput() {
    this.setState({title: '', timer: ''});
  }

  handleTitleChange(event) {
    console.log(`Title Change TITLE: ${event.target.value}, TIMER: ${this.state.timer}`)
    this.setState({title: event.target.value, timer: this.state.timer});
  }

  handleTimerChange(event) {
    console.log(`Timer Change TIMER: ${event.target.value}, TITLE: ${this.state.title}`)
    this.setState({timer: event.target.value, title: this.state.title});
  }

  handleKeyUp(event) {
    if (event.keyCode === 27) this.clearInput();
  }

  handleSubmit(event) {
    event.preventDefault();
    const title = this.state.title.trim();
    const timer = this.state.timer.trim();
    console.log(`Handle Submit ${title}, ${timer}`)
    if (title.length) this.props.handleSubmit(title, timer);
    this.clearInput();
  }

  render() {
    return (
      <form className="task-form" onSubmit={this.handleSubmit} noValidate>
        <input
          autoComplete="off"
          autoFocus
          className="task-form__input"
          maxLength="64"
          onChange={this.handleTitleChange}
          onKeyUp={this.handleKeyUp}
          placeholder="What needs to be done?"
          ref={e => this.titleInput = e}
          type="text"
          value={this.state.title}
        />
        <input
          autoComplete="off"
          autoFocus
          className="task-form__input"
          maxLength="10"
          onChange={this.handleTimerChange}
          onKeyUp={this.handleKeyUp}
          placeholder="How many minutes should it take?"
          ref={e => this.timerInput = e}
          type="text"
          value={this.state.timer}
        />
        <input type="submit" className="task-form__button" value="Submit" />
      </form>
    );
  }
}


export default TaskForm;
