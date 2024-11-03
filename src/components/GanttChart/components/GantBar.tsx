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
    start: new Date(Number(format(startDate, 'yyyy')) - 1, Number(format(startDate, 'MM')), Number(format(startDate, 'dd'))),
    end: new Date(Number(format(endDate, 'yyyy')) + 1, Number(format(endDate, 'MM')), Number(format(endDate, 'dd')))
  });   
  
  const createColorEstimate = (currentMonth: Date): string => {
    const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate(); 
    const start = new Date(Number(format(task.estimateStartDate, 'yyyy')), Number(format(task.estimateStartDate, 'MM')), Number(format(task.estimateStartDate, 'dd')));
    const end = new Date(Number(format(task.estimateEndDate, 'yyyy')), Number(format(task.estimateEndDate, 'MM')), Number(format(task.estimateEndDate, 'dd')));   
  
    if (currentMonth >=start && currentMonth <= end) {     
      let startDay = currentMonth.getMonth() === start.getMonth()&&currentMonth.getFullYear()===start.getFullYear() ? start.getDate() : 1;
      let endDay = currentMonth.getMonth() === end.getMonth()&&currentMonth.getFullYear()===end.getFullYear() ? end.getDate() : daysInMonth;    
      const filledPercentage = ((endDay - startDay + 1) / daysInMonth) * 100;
      
      return `linear-gradient(90deg, #808080 ${filledPercentage}%, white ${filledPercentage}%)`;
    }

    if (currentMonth.getDay()>=1 && currentMonth.getDay()<daysInMonth) {     
      let startDay = currentMonth.getMonth() === start.getMonth()&&currentMonth.getFullYear()===start.getFullYear() ? start.getDate() : 1;   
      const filledPercentage = ((daysInMonth - startDay + 1) / daysInMonth) * 100;

      return `linear-gradient(90deg,white ${filledPercentage}%, #808080 ${filledPercentage}%)`;
    }
    return 'white';
  }

  const createColorActual = (currentMonth: Date): string => {
    const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate(); 
    const start = new Date(Number(format(task.actualStartDate, 'yyyy')), Number(format(task.actualStartDate, 'MM')), Number(format(task.actualStartDate, 'dd')));
    const end = new Date(Number(format(task.actualEndDate, 'yyyy')), Number(format(task.actualEndDate, 'MM')), Number(format(task.actualEndDate, 'dd')));     
 
    if (currentMonth >= start && currentMonth <= end) {      
      let startDay = currentMonth.getMonth() === start.getMonth()&&currentMonth.getFullYear()===start.getFullYear() ? start.getDate() : 1;
      let endDay = currentMonth.getMonth() === end.getMonth()&&currentMonth.getFullYear()===end.getFullYear() ? end.getDate() : daysInMonth;  
      const filledPercentage = ((endDay - startDay + 1) / daysInMonth) * 100;

      return `linear-gradient(90deg, #1d2649 ${filledPercentage}%, white ${filledPercentage}%)`;
    }
    if (currentMonth.getDay()>=1 && currentMonth.getDay()<daysInMonth) {     
      let startDay = currentMonth.getMonth() === start.getMonth()&&currentMonth.getFullYear()===start.getFullYear() ? start.getDate() : 1;   
      const filledPercentage = ((daysInMonth - startDay + 1) / daysInMonth) * 100;

      return `linear-gradient(90deg,white ${filledPercentage}%, #1d2649 ${filledPercentage}%)`;
    }
    return 'white';
  }  
 
  return(   
    <>
      <tr key={task.id}>        
        {months.map((month, index) => (
          <th key={index} style={{height:'60px'}}>
            <div  style={{background: createColorEstimate(month),padding:'20px'}}></div>
            <div style={{background: createColorActual(month),padding:'10px'}}></div>
          </th>          
        ))}        
      </tr>      
      {isExpanded && children}
    </>   
  )
}

export default GantBar;