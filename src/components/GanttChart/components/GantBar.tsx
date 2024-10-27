import React from 'react';
import { Task } from '../types/types';
import { format,eachMonthOfInterval } from "date-fns";

type GantBarProps ={
  task: Task;
  isExpanded: boolean ;
  children?: React.ReactNode;
  startDate: Date;
  endDate: Date;  
}
const GantBar: React.FC<GantBarProps> = ({task, children,startDate, endDate,isExpanded}) =>{   
  const months = eachMonthOfInterval({
    start: new Date(Number(format(startDate,`yyy`))-1, Number(format(startDate,`MM`))-1, Number(format(startDate,`ddd`))),
    end: new Date(Number(format(endDate ,`yyy`))+1, Number(format(endDate ,`MM`))-1, Number(format(endDate ,`ddd`)))
  });
  
  const createColorEstimate = (currentMonth: Date): string => {
    const start = new Date(Number(format(task.estimateStartDate, 'yyyy')), Number(format(task.estimateStartDate, 'MM')) - 1);
    const end = new Date(Number(format(task.estimateEndDate, 'yyyy')), Number(format(task.estimateEndDate, 'MM')) - 1);  
    if (currentMonth >= start && currentMonth <= end) {
      return '#808080'; 
    }  
    return 'white'; 
  }

  const createColorActual = (currentMonth: Date): string => {
    const start = new Date(Number(format(task.actualStartDate, 'yyyy')), Number(format(task.actualStartDate, 'MM')) - 1);
    const end = new Date(Number(format(task.actualEndDate, 'yyyy')), Number(format(task.actualEndDate, 'MM')) - 1);
  
    if (currentMonth >= start && currentMonth <= end) {
      return '#1d2649'; 
    }  
    return 'white'; 
  }  
 
  return(   
    <>
      <tr key={task.id}>        
        {months.map((month, index) => (
          <th key={index}>
            <div  style={{background: createColorEstimate(month),padding:'20px'}}></div>
            <div style={{background: createColorActual(month),padding:'10px 0'}}></div>
          </th>          
        ))}        
      </tr>      
      {isExpanded && children}
    </>   
  )
}

export default GantBar;