import React from 'react'
import { Task } from '../types/types'
import GantLine from './GantLine';
import GantHeaderLeft from './GantHeaderLeft';



type GanttGhartLeftProps ={
    tasks: Task[];
}

 const GanttGhartLeft: React.FC<GanttGhartLeftProps> = ({tasks}) =>{


  return (
    <div className="gantt-left">
        <GantHeaderLeft></GantHeaderLeft>
        {tasks.map(task => (
          <GantLine key={task.id} task={task}></GantLine>
        ))}
      </div>
  )
}



export default GanttGhartLeft
