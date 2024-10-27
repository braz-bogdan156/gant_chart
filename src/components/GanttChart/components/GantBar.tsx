import React, { useState } from 'react';
import { Task } from '../types/types';
import { format,eachMonthOfInterval } from "date-fns";
type GantBarProps ={
  task: Task;
  hasChildren?: boolean ;
  children?: React.ReactNode;
  startDate: Date;
  endDate: Date;  
}
const GantBar: React.FC<GantBarProps> = ({task, children,startDate, endDate}) =>{
  const [isExpanded, setisExpanded] = React.useState(false);
  
  const months = eachMonthOfInterval({
    start: new Date(Number(format(startDate,`yyy`))-1, Number(format(startDate,`MM`))-1, Number(format(startDate,`ddd`))),
    end: new Date(Number(format(endDate ,`yyy`))+1, Number(format(endDate ,`MM`))-1, Number(format(endDate ,`ddd`)))
  });
  const estimateMonths = eachMonthOfInterval({
    start: new Date(Number(format(task.estimateStartDate,`yyy`)), Number(format(task.estimateStartDate,`MM`))-1, Number(format(task.estimateStartDate,`ddd`))),
    end: new Date(Number(format(task.estimateEndDate ,`yyy`)), Number(format(task.estimateEndDate ,`MM`))-1, Number(format(task.estimateEndDate,`ddd`)))
  });

  const createColor = (currentMonth: Date): string => {
    const start = new Date(Number(format(task.estimateStartDate, 'yyyy')), Number(format(task.estimateStartDate, 'MM')) - 1);
    const end = new Date(Number(format(task.estimateEndDate, 'yyyy')), Number(format(task.estimateEndDate, 'MM')) - 1);
  
    if (currentMonth >= start && currentMonth <= end) {
      return '#1f77b4'; // Синій колір
    }
  
    return 'white'; // Стандартний колір
  }
 
  return(   
    <>
      <tr key={task.id} className="gantt-row">
      {months.map((month, index) => (
  <th 
    style={{background: createColor(month)}} 
    key={index}
  >
    {format(month, 'yyyy-MM')}
  </th>
))}                              
      </tr>      
      {isExpanded && children}
    </>   
  )
}

export default GantBar;