import React from 'react';
import { Task } from '../types/types';

type GantLineProps ={
    task: Task;
}

const GantLine: React.FC<GantLineProps> = ({task}) =>{
            return(<div key={task.id} className="gantt-row">
                <div>{task.id}</div>
                <div>{task.name}</div>
                <div>{task.estimateHours}</div>
                <div>{task.actualHours}</div>
              </div>)
}

export default GantLine;