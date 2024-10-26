import React, { useState } from 'react';
import { Task } from '../types/types';
import { GantRenderTask } from './GantRenderTask';

type GantBarProps = {
  task: Task;
  hasChildren?: boolean;
  children?: React.ReactNode;
  startDate: Date;
  endDate: Date;
};

const GantBar: React.FC<GantBarProps> = ({ task, children, startDate, endDate }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <tr key={task.id} className="gantt-row-bar">
        <div className="gantt-bar estimate" style={{ width: `${task.estimateHours * 2}px` }}></div>
        <div className="gantt-bar actual" style={{ width: `${task.actualHours * 2}px` }}></div>
      </tr>
      {isExpanded && children}
      {isExpanded && task.children && task.children.map((childTask) => (
        <GantRenderTask key={childTask.id} task={childTask} startDate={startDate} endDate={endDate} />
      ))}
    </>
  );
};

export default GantBar;