import React, { Component } from 'react';
import { List } from 'immutable';
import PropTypes from 'prop-types';
import TaskItem from '../task-item/task-item';
import Sound from 'react-sound';


export class TaskList extends Component {
  constructor() {
    super(...arguments);

    this.state = {alarm: "STOPPED"};

    this.toggleAlarm = this.toggleAlarm.bind(this);
  }

  toggleAlarm() {
    if (this.state.alarm === "STOPPED") {
      this.setState({alarm: "PLAYING"})
    } else {
      this.setState({alarm: "STOPPED"})
    }
  }

  renderTasks(tasks) {
    return tasks.map((task, index) => {
      return (
        <TaskItem
          key={index}
          task={task}
          removeTask={this.props.removeTask}
          toggleAlarm={this.toggleAlarm}
          updateTask={this.props.updateTask}
        />
      );
    });
  }

  render() {
    const { tasks } = this.props;

    return (
      <div className="task-list">
        <div>
          <Sound
            url="https://duckduckgo.com/share/goodie/timer/1277/alarm.mp3"
            playStatus={this.state.alarm}
            playFromPosition={0}
            autoLoad={true}
            onFinishedPlaying={this.toggleAlarm}
          />
        </div>
        {this.renderTasks(tasks)}
      </div>
    );
  }
}

TaskList.propTypes = {
  removeTask: PropTypes.func.isRequired,
  tasks: PropTypes.instanceOf(List).isRequired,
  updateTask: PropTypes.func.isRequired
};

export default TaskList;
