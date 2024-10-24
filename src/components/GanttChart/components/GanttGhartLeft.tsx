import React from 'react'
import { Task } from '../types/types'
import GantLine from './GantLine';
import GantHeaderLeft from './GantHeaderLeft';



type GanttGhartLeftProps ={
    tasks: Task[];
    
}

 const GanttGhartLeft: React.FC<GanttGhartLeftProps> = ({tasks}) =>{
  

  return (
    <table className="gantt-left" border={1} >
      <thead>
        <GantHeaderLeft></GantHeaderLeft>
        </thead>
        <tbody>
          <>
          
          </>
        {/* {tasks.map(task => (
          <GantLine key={task.id} task={task}></GantLine>
          
        ))} */}
        </tbody>
      </table>
  )
}



export default GanttGhartLeft
