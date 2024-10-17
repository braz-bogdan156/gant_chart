import React from 'react';
import '../styles/GanttChart.css';

interface Task {
  id: number;
  name: string;
  estimate: number;
  actual: number;
}

const tasks: Task[] = [
  { id: 1, name: 'Task 1', estimate: 51.961, actual: 83.527 },
  { id: 1.1, name: 'Subtask 1.1', estimate: 45.407, actual: 30.208 },
  { id: 2, name: 'Task 2', estimate: 48.515, actual: 44.150 },
  { id: 3, name: 'Task 3', estimate: 3.288, actual: 6.581 },
  // Добавьте остальные задачи сюда
];

const GanttChart: React.FC = () => {
  return (
    <div className="gantt-chart">
      <div className="gantt-left">
        <div className="gantt-header">
          <div>ID</div>
          <div>Name</div>
          <div>Estimate Duration - H</div>
          <div>Actual Duration - H</div>
        </div>
        {tasks.map(task => (
          <div key={task.id} className="gantt-row">
            <div>{task.id}</div>
            <div>{task.name}</div>
            <div>{task.estimate}</div>
            <div>{task.actual}</div>
          </div>
        ))}
      </div>
      
      <div className="gantt-right">
        <div className="gantt-timeline">
          <div className="gantt-timeline-header">
            <div>2022</div>
            <div>2023</div>
            <div>2024</div>
          </div>
          <div className="gantt-Q">
            <div>Q4</div>
            <div>Q1</div>
            <div>Q2</div>
            <div>Q3</div>
            <div>Q4</div>
            <div>Q1</div>
            <div>Q2</div>
          </div>
          <div className="gantt-timeline-months">
            <div>Dec</div>
            <div>Jan</div>
            <div>Feb</div>
            <div>Mar</div>
            <div>Apr</div>
            <div>May</div>
            <div>Jun</div>
            <div>Jul</div>
            <div>Aug</div>
            <div>Sep</div>
            <div>Oct</div>
            <div>Nov</div>
           
          </div>
        </div>
        {tasks.map(task => (
          <div key={task.id} className="gantt-bar-container">
            <div
              className="gantt-bar estimate"
              style={{ width: `${task.estimate * 2}px` }} // Пример масштабирования длительности
            ></div>
            <div
              className="gantt-bar actual"
              style={{ width: `${task.actual * 2}px` }} // Пример масштабирования фактической длительности
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GanttChart;