import React from 'react';
import { List } from 'immutable';
import PropTypes from 'prop-types';


import './task-totals.css';

function taskFilter(task) {
  return !task.completed
}

function taskReducer(acc, current) {
    return Number(acc) + Number(current)
}

function timerMapper(task) {
  return task.timer
}

function totalSeconds(tasks) {
  return tasks.filter(taskFilter).map(timerMapper).reduce(taskReducer)
}

function toTime(seconds) {
  return toHours(seconds) + " hours, " + toMinutes(seconds) + " minutes"
}

function toMinutes(seconds) {
  return Math.floor(seconds % 60)
}

function toHours(seconds) {
  return Math.floor(seconds / 60)
}

const TaskTotals = ({tasks}) => (
  <div className="task-totals">
        <p>Number of Tasks: {tasks.size}</p>
        <p>Time Left: {toTime(totalSeconds(tasks))}</p>
  </div>
);

TaskTotals.propTypes = {
  tasks: PropTypes.instanceOf(List).isRequired,
};


export default TaskTotals;
