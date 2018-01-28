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

function numberOfTasks(tasks) {
  return tasks.filter(taskFilter).size
}

const TaskTotals = ({tasks}) => (
  <div className="task-totals">
        <p>Tasks Left: {numberOfTasks(tasks)}</p>
        <p>Time Left: {numberOfTasks(tasks) > 0 ? toTime(totalSeconds(tasks)) : "0"}</p>
  </div>
);

TaskTotals.propTypes = {
  tasks: PropTypes.instanceOf(List).isRequired,
};


export default TaskTotals;
