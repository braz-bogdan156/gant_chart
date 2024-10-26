import React from 'react';
import { Task } from '../types/types';
import GantLine from './GantLine';

type GantRenderTaskProps = {
  task: Task;
  startDate: Date;
  endDate: Date;
};

export const GantRenderTask: React.FC<GantRenderTaskProps> = ({task, startDate, endDate}) =>{
    if (!task.children) {
        return <GantLine key={task.id} task={task} startDate={startDate} endDate={endDate}></GantLine>
    }

    return (
        <GantLine key={task.id} task={task} hasChildren={true} startDate={startDate} endDate={endDate}>
            {task.children.map((task) => <GantRenderTask task={task} startDate={startDate} endDate={endDate}/>)}
        </GantLine>
    )
}